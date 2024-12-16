import "./LatestBlog.scss";
import Button from "../../../components/Button";
import BlogPost from "./BlogPost/BlogPost";

import blogJson from "../../../data/blog.json";
import Carousel from "../../../components/Carousel";


export default function LatestBlog() {
    const blogs: Blog[] = blogJson;
    const blogNum: number = 6;

    return (
        <section className="latest-blog">
            <h2 className="latest-blog__header">Latest Blog Posts</h2>

            <Carousel
                itemCount={blogNum + 1}
                itemWidth={30}
            >
                {blogs.slice(0, blogNum).map((blog, index) => (
                    <BlogPost
                        key={index}
                        title={blog.title}
                        date={blog.date}
                        imgURL={blog.imgURL}
                        imgAlt={blog.imgAlt}
                        content={blog.content}
                    />
                ))}

                <section className="latest-blog__view-all">
                    <h3 className="latest-blog__view-all-header">View All</h3>

                    <Button variant="button--white">VIEW BLOG</Button>
                </section>
            </Carousel>
        </section>
    );
}

