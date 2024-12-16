import './BlogPost.scss'

import Button from "../../../../components/Button";

type blogPostProps = {
    title: string;
    date: string;
    imgURL: string;
    imgAlt: string;
    content: string;
}

export default function BlogPost({title, date, imgURL, imgAlt, content}: blogPostProps) {
    return (
        <section className="blog-post">
            <div className="blog-post__content">
                <div className="blog-post__title">
                    <h3>{title}</h3>
                    <p className="blog-post__date">{date}</p>
                </div>

                <img 
                    className='blog-post__img' 
                    src={imgURL} 
                    alt={imgAlt}
                />
                
                <p className="blog-post__text">{content}</p>
            </div>

            <Button variant="button--blue button--full-width">Read More</Button>
        </section>
    );
}