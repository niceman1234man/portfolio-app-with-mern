import React, { useState, useEffect } from 'react';
import works from '../assets/works.png';
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Projects() {
    const [repo, setRepo] = useState([]);
    const [recentRepo, setRecentRepo] = useState([]);

    useEffect(() => {
        const myrepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/niceman1234man/repos');
                const data = await response.json(); // Await the response and convert to JSON
                setRepo(data);
            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        };
        myrepos();//calling function
    }, []);

    useEffect(() => {
        if (repo.length > 0) {
            const sortedRepos = repo.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Sort by date descending
            setRecentRepo(sortedRepos.slice(0, 4)); // Get the most recent 4 repos
        }
    }, [repo]);

    return (
        <div className='w-full bg-white py-16 text-black font-semibold'>
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='text-center text-3xl'>My Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {recentRepo.length > 0 ? (
                        recentRepo.map((repo) => (
                            <div key={repo.id} className='w-full shadow-xl py-8 px-2'>
                                <h1 className='text-center font-bold text-2xl py-4'>{repo.name}</h1>
                                <p className='p-2'>{repo.description || "No description provided."}</p>
                                <img src={works} alt={repo.name} className='p-4' />
                                <div className='flex items-center justify-center'>
                                    <button  className='flex p-2 mx-2 items-center bg-blue-400 rounded-lg'>
                                        <FaGithub /><a href={repo.html_url}></a> Repo
                                    </button>
                                    <button className='bg-blue-400 p-2 rounded-lg'>Live</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading Projects.......</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;