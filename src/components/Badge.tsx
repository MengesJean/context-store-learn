import React from 'react';

type BadgeType = {
    children: React.ReactNode;
};

const Badge = ({children}: BadgeType) => {
    return (
        <div className={"rounded-full bg-red-600 h-5 w-5 text-sm"}>
            {children}
        </div>
    );
};

export default Badge;