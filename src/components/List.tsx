import React from 'react';
import { faker } from '@faker-js/faker';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

interface Card {
    name: string;
    email: string;
    avatar: string;
}

const bigList: Card[] = Array.from({ length: 500000 }, () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
}));

const List: React.FC = () => {
    const renderRow = ({ index, style }: ListChildComponentProps) => (
        <div style={{ ...style, display: "flex" }}>
            <img
                src={bigList[index].avatar}
                alt={bigList[index].name}
                width={50}
            />
            <p>
                {bigList[index].name} - {bigList[index].email}
            </p>
        </div>
    );

    return (
        <FixedSizeList
            height={window.innerHeight}
            width={window.innerWidth - 20}
            itemCount={bigList.length}q
            
            itemSize={50}
        >
            {renderRow}
        </FixedSizeList>
    );
};

export default List;
