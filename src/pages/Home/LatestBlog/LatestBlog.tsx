import "./LatestBlog.scss";
import blogImage from "/images/blog/blog-post.png";
import Button from "../../../components/Button";

export default function LatestBlog() {

    return (
        <section className="latest-blog">
            <h2 className="latest-blog__header">Latest Blog Posts</h2>

            <div className="latest-blog__content">
                <div className="latest-blog__carousel">
                    <div className="latest-blog__carousel-content">
                        <BlogPost/>
                        <BlogPost/>
                        <BlogPost/>
                        <BlogPost/>
                        <BlogPost/>
                        <BlogPost/>
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

function BlogPost() {
    return (
        <section className="blog-post">
            <div className="blog-post__content">
                <div className="blog-post__title">
                    <h3>Big Spring Bike Sale!</h3>

                    <p className='blog-post__date'>April 12, 2024</p>
                </div>

                <img src={blogImage} alt=""/>

                <p className="blog-post__text">
                    It’s that time of year again! Spring! We’re very excited to be holding our Big Spring Bike Sale on
                    Saturday, April 20th starting at 11 AM at the downtown shop. Don’t miss it If you’re looking for a
                    new bike! See bikeedmonton.ca/springsale for more details.
                </p>
            </div>

            <Button variant="button--blue button--full-width">Read More</Button>

        </section>
    );
}