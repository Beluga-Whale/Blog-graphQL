import React, { useState } from 'react';
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
    const [query, setQuery] = useState('');
    const { loading, error, data } = useQuery(GET_BLOGS);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>{`Error ${error.message}`}</div>;

    const search = (data: any) => {
        return data.posts.filter(
            (post: any) =>
                post.content.html
                    .replace(/<[^>]+>/g, '')
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                post.title.toLowerCase().includes(query.toLowerCase())
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-4 min-h-screen ">
            <div className="flex justify-between mb-2">
                <div>
                    <h1 className="font-black text-3xl md:text-5xl ">Beluga</h1>
                    <p className="md:text-lg">Our blog posts.</p>
                </div>
                <input
                    type="text"
                    className="border-2 w-72 h-16 border-teal-600 rounded-md"
                    value={query}
                    placeholder="Search content or title"
                    onChange={e => setQuery(e.target.value)}
                />
            </div>
            <hr />

            <BlogList posts={search(data)} />
        </div>
    );
};

export default Home;
