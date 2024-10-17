import BlogContent from "@/app/components/BlogContent";
import BlogHeader from "@/app/components/BlogHeader";
import { fetchBlog } from "@/app/utils/fetchWordpress";
import { createHighlighter } from "shiki";
import { JSDOM } from "jsdom";
import { Metadata } from "next";
import { stripHtmlAndDecode } from "@/app/utils/helpers";

type TProps = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
    const blog = await fetchBlog(params.slug);

    const description = stripHtmlAndDecode(blog.excerpt.rendered);
    return {
        title: blog.title.rendered + " - Alvin Chang",
        description,
        keywords: blog.title.rendered + ", " + blog._embedded["wp:term"][1].map((tag: any) => tag.name).join(", "),
        alternates: {
            canonical: `https://alvinchang.dev/blogs/${blog.slug}`,
        },
        openGraph: {
            title: blog.title.rendered + " - Alvin Chang",
            description,
            url: `https://alvinchang.dev/blogs/${blog.slug}`,
            type: "article",
            siteName: "Alvin Chang",
            images: [
                {
                    url: "/horizontal-logo.png",
                    width: 1100,
                    height: 300,
                    alt: "Alvin Chang Portfolio Logo",
                }
            ]
        }
    };
}

export default async function BlogPage({ params }: TProps) {
    const blog = await fetchBlog(params.slug);

    // Function to highlight code blocks
    const highlightCodeBlocks = async (htmlContent: string) => {
        const highlighter = await createHighlighter({
            langs: ["javascript"],
            themes: ["ayu-dark"],
        });
        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;
    
        const blocks = Array.from(document.querySelectorAll("pre code"));
        await Promise.all(blocks.map(async (block: any) => {
            const highlighted = await highlighter.codeToHtml(
                block.textContent || "",
                {
                    lang: "javascript",
                    theme: "ayu-dark",
                }
            );
            block.parentElement.innerHTML = highlighted;
        }));
    
        return document.body.innerHTML;
    };
    
    // Preprocess the content to highlight code blocks
    const highlightedContent = await highlightCodeBlocks(blog.content.rendered);

    return (
        <div className="w-full flex justify-center">
            <main className="w-full min-h-screen max-w-[600px] p-2">
                <BlogHeader />
                {blog && (
                    <BlogContent blog={blog} content={highlightedContent} />
                )}
            </main>
        </div>
    );
}
