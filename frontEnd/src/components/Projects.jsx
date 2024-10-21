import React, { useState, useEffect } from 'react';
import works from '../assets/works.png';
import { FaGithub } from "react-icons/fa";

function Projects() {
    const [repo, setRepo] = useState([]);
    const [recentRepo, setRecentRepo] = useState([]);
    const [languages, setLanguages] = useState({});

    useEffect(() => {
        const myrepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/niceman1234man/repos');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                console.log("Fetched Repositories:", data); // Log fetched data
                setRepo(data);
            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        };
        myrepos(); // calling function
    }, []);

    useEffect(() => {
        if (repo.length > 0) {
            const sortedRepos = repo.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setRecentRepo(sortedRepos.slice(0, 4)); // Get the most recent 4 repos
            console.log("Recent Repositories:", sortedRepos.slice(0, 4)); // Log recent repos

            sortedRepos.forEach(async (repository) => {
                try {
                    const lang = await fetch(repository.languages_url);
                    if (!lang.ok) throw new Error('Network response was not ok');
                    const langData = await lang.json();
                    setLanguages((prev) => ({ ...prev, [repository.id]: langData }));
                } catch (error) {
                    console.error("Error fetching Languages:", error);
                }
            });
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
                                    <button className='flex p-2 mx-2 items-center bg-blue-400 rounded-lg'>
                                        <FaGithub /><a href={repo.html_url}>Repo</a>
                                    </button>
                                    <button className='bg-blue-400 p-2 rounded-lg'>Live</button>
                                </div>
                                <p>Language: {languages[repo.id] ? Object.keys(languages[repo.id]).join(", ") : 'Loading....'}</p>
                                <p className='p-2'>Updated At: {new Date(repo.updated_at).toLocaleString()}</p>
                            </div>
                        ))
                    ) : (
                        <p>Loading Projects.......</p>
                    )}
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-2 mx-auto text-black flex justify-center'><a href="https://github.com/niceman1234man?tab=repositories">See More Projects</a></button>
            </div>
        </div>
    );
}

export default Projects;