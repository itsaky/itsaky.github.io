import Image from 'next/legacy/image';
import Link from 'next/link';
import React from "react";
import {Dev} from "../lib/dev";
import {GitHub_AndroidIDE} from "../lib/constants";
import {SvgExternal} from "../lib/icons";

const HomePage = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 animate-gradient">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
                <Image
                    src={Dev.Image}
                    alt={Dev.Name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-white">{Dev.Name}</h1>
            <p className="text-gray-500">{Dev.Bio}</p>
            <div className="flex mt-6 space-x-4">
                {Object.keys(Dev.Social).map((link) => Dev.Social[link]).map((link) =>
                    <Link
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {link.icon({className: "w-8 h-8 transition-transform hover:scale-110 fill-white hover:fill-blue"})}
                    </Link>
                )}
            </div>

            <Link href={GitHub_AndroidIDE}
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-12">
                <div className="flex items-center">
                    <button type="button">
                        I'm currently working on AndroidIDE
                    </button>
                    <SvgExternal className="fill-white ml-3"/>
                </div>
            </Link>
            <Link href={`${Dev.Social.GitHub.url}?tab=repositories`}
                  className="mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <div className="flex items-center">
                    <button type="button">
                        View projects on GitHub
                    </button>
                    <SvgExternal className="fill-black dark:fill-white ml-3"/>
                </div>
            </Link>
        </div>
    );
};

export default HomePage;
