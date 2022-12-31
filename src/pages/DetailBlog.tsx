import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const GET_DETAILS = gql`
    query Details($slug: String!) {
        post(where: { slug: $slug }) {
            id
            title
            slug
            datePublished
            author {
                id
                name
                avatar {
                    url
                }
            }
            content {
                html
            }
            photo {
                id
                url
            }
        }
    }
`;

const DetailBlog = () => {
    const { slug } = useParams();

    const { data, error, loading } = useQuery(GET_DETAILS, {
        variables: {
            slug: slug,
        },
    });

    if (loading) return <div>Loading...</div>;

    if (error) return <div>{`Error ${error.message}`}</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 my-3 h-auto ">
            <div className="text-center">
                <p className="font-bold text-gray-400">
                    {data.post.datePublished}
                </p>
                <h1 className="text-2xl font-black lg:text-5xl lg:my-2 ">
                    {data.post.title}
                </h1>
            </div>
            <div className="lg:flex">
                <div className="flex items-center justify-center my-5 lg:w-[20%] lg:place-self-start ">
                    <img
                        className="rounded-full mr-4 w-[60px] h-[60px] object-cover "
                        src={data.post.author.avatar.url}
                        alt=""
                    />
                    <p className="font-black text-xl ">
                        {data.post.author.name}
                    </p>
                </div>
                <div className="lg:w-[80%]">
                    <img className="rounded" src={data.post.photo.url} alt="" />
                    <div className="mt-4">{parse(data.post.content.html)}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailBlog;
