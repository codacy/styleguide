import React from 'react';

export const ColorCard = ({children, color}:{children: React.ReactNode, color: String}) => {
    return (
        <div className="color-container">
            <div className={color + " color-container-tint"}></div>
            <p>{children}</p>
        </div>
    );
};