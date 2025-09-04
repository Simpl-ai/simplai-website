import React from 'react';
import Link from 'next/link';

type CardProps = {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    items: string[];
    accentColor: string;
    titleColor: string;
    subTitleColor: string;
    link?: { href: string; label: string; color: string };
};

const Card: React.FC<CardProps> = ({ icon, title, subtitle, items, accentColor, titleColor, subTitleColor, link }) => (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
            <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${accentColor} relative`}>
                {icon}
            </div>
            <h3 className={`text-xl font-semibold ${titleColor} mb-2`}>{title}</h3>
        </div>
        <h4 className={`text-lg font-semibold ${subTitleColor} mb-4`}>{subtitle}</h4>
        <ul className="space-y-2 text-gray-300 mb-6">
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        {link && (
            <Link href={link.href} className={`${link.color} font-semibold`}>
                {link.label}
            </Link>
        )}
    </div>
);

export default Card;