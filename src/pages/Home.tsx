import React from 'react';
import BlogList from '../components/BlogList';
import { gql, useQuery } from '@apollo/client';

const GET_BLOGS = gql`
    query Blogs {
        posts {
            id
            title
            datePublished
            content {
                html
            }
            slug
        }
    }
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_BLOGS);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>{`Error ${error.message}`}</div>;

    return (
        <div className="max-w-4xl mx-auto p-4 min-h-screen ">
            <div>
                <h1 className="font-black text-3xl md:text-5xl ">Beluga</h1>
                <p className="md:text-lg">Our blog posts.</p>
                <hr />
            </div>
            <BlogList posts={data.posts} />
        </div>
    );
};

export default Home;
