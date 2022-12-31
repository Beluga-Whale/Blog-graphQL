import React from 'react';
import { Link } from 'react-router-dom';

type PostProps = {
    posts: any;
};

const BlogList = ({ posts }: PostProps) => {
    return (
        <section className="my-4">
            {posts.map((post: any) => (
                <div key={post.id}>
                    <div className="py-4 ">
                        <p className="font-bold text-gray-400">
                            {post.datePublished}
                        </p>
                        <h1 className=" text-xl font-black">{post.title}</h1>
                        <p>
                            {post.content.html
                                .replace(/<[^>]+>/g, '')
                                .substring(0, 90)}
                        </p>
                        <Link to={`/${post.slug}`}>
                            <button className="flex items-center text-purple-600 text-lg font-bold ">
                                Read more
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    );
};

export default BlogList;
