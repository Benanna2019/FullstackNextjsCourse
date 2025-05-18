import React from 'react';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <svg
                width="240"
                height="50"
                viewBox="0 0 240 50"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-200 hover:text-red-500"
            >
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#646464" />
                    </linearGradient>
                </defs>

                {/* Fullstack */}
                <text
                    x="5"
                    y="32"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="14"
                    fontWeight="semibold"
                    fill="currentColor"
                >
                    FULLSTACK
                </text>

                {/* Nextjs */}
                <text
                    x="90"
                    y="32"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="14"
                    fontWeight="semibold"
                    fill="url(#logoGradient)"
                >
                    NEXTJS
                </text>
            </svg>
        </Link>
    );
} 