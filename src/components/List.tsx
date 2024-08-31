import React from 'react'
import { faker } from '@faker-js/faker';

interface Card {
    name: string;
    email: string;
    avatar: string;
}

const bigList: Card[] = [...Array(50000)].map(() => ({
    name: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
}));

const List = () => {
    return (
        <>
            <div className="space-y-4 max-w-md mx-auto p-4">
                {bigList.map((person, i) => {
                    // avatarの中身をログに出力
                    console.log(`Avatar URL for ${person.name}:`, person.avatar);

                    return (
                        <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                            <div className="p-4 flex items-center">
                                <img className="w-12 h-12 rounded-full mr-4" src={person.avatar} alt={`${person.name}'s avatar`} />
                                <div>
                                    <h2 className="font-semibold text-lg text-gray-800">{person.name}</h2>
                                    <p className="text-gray-600">{person.email}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default List;
