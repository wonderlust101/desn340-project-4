import "./LatestBlog.scss";
import Button from "../../../components/Button";
import BlogPost from "./BlogPost";
import blogJson from "../../../data/blog.json";

const blogs: Blog[] = blogJson;

export default function LatestBlog() {

    return (
        <section className="latest-blog">
            <h2 className="latest-blog__header">Latest Blog Posts</h2>

            <div className="latest-blog__content">
                <div className="latest-blog__carousel">
                    <div className="latest-blog__carousel-content">
                        {blogs.map((blog, index) => (
                            <BlogPost
                                key={index}
                                title={blog.title}
                                date={blog.date}
                                imgURL={blog.imgURL}
                                content={blog.content}
                            />
                        ))}

                        <section className="latest-blog__view-all">
                            <h2>View All</h2>
                            
                            <Button variant="button--white">VIEW BLOG</Button>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

