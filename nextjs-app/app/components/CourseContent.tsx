import React from 'react';

interface ModuleItemProps {
    title: string;
    duration?: string;
    number: number;
}

const ModuleItem = ({ title, duration, number }: ModuleItemProps) => {
    return (
        <div className="bg-gray-900 rounded-lg p-5 mb-4">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-gray-400">Item {number}</p>
                    <h3 className="text-white text-lg">{title}</h3>
                </div>
                {duration && (
                    <div className="flex items-center">
                        <span className="mr-2">▶</span>
                        <span className="text-gray-400">{duration}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

interface ModuleSectionProps {
    number: number;
    title: string;
    items: Array<{
        title: string;
        duration?: string;
    }>;
}

const ModuleSection = ({ number, title, items }: ModuleSectionProps) => {
    return (
        <div className="mb-16">
            <p className="text-gray-400">Section {number}</p>
            <h2 className="text-white text-5xl mb-10">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <ModuleItem
                        key={index}
                        title={item.title}
                        duration={item.duration}
                        number={index + 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default function CourseContent() {
    const sections = [
        {
            number: 1,
            title: "NextJS Core Concepts",
            items: [
                { title: "NextJS project setup and architecture" },
                { title: "Pages Router: file-based routing and configuration" },
                { title: "App Router: layouts, routing groups, and intercepting routes" },
                { title: "Styling approaches with Tailwind CSS" },
                { title: "Static vs. Server components" },
                { title: "Environment variables and configuration" },
                { title: "Metadata API and SEO best practices" }
            ]
        },
        {
            number: 2,
            title: "Data Fetching Patterns",
            items: [
                { title: "Client vs Server fetching strategies" },
                { title: "getServerSideProps and getStaticProps in Pages Router" },
                { title: "Server components data fetching in App Router" },
                { title: "React Query implementation and patterns" },
                { title: "tRPC for type-safe API communication" },
                { title: "Problems with useEffect for data fetching" },
                { title: "SWR as an alternative to React Query" },
                { title: "Caching strategies and invalidation" }
            ]
        },
        {
            number: 3,
            title: "Server Actions and Form Handling",
            items: [
                { title: "Server Actions fundamentals and implementation" },
                { title: "Forms in React and Next.js" },
                { title: "Client vs Server validation strategies" },
                { title: "Form state management with React Hook Form" },
                { title: "Type-safe forms with Zod schema validation" },
                { title: "Handling form errors and user feedback" },
                { title: "Progressive enhancement and fallbacks" },
                { title: "Optimistic updates with Server Actions" }
            ]
        },
        {
            number: 4,
            title: "Building APIs with Domain-Driven Design",
            items: [
                { title: "API routes in Pages Router" },
                { title: "Route handlers in App Router" },
                { title: "Domain-Driven Design principles for API development" },
                { title: "Service layer patterns and implementation" },
                { title: "Error handling and response standardization" },
                { title: "API middleware for cross-cutting concerns" },
                { title: "Validation with Zod" },
                { title: "API testing strategies" }
            ]
        },
        {
            number: 5,
            title: "Streaming and Performance",
            items: [
                { title: "Streaming fundamentals and benefits" },
                { title: "Implementing streaming in Pages Router" },
                { title: "Streaming with Suspense in App Router" },
                { title: "Progressive rendering patterns" },
                { title: "Loading UI and error boundaries" },
                { title: "Code splitting and lazy loading" },
                { title: "Bundle analysis and optimization" },
                { title: "Measuring and improving Core Web Vitals" }
            ]
        },
        {
            number: 6,
            title: "Database Integration with Supabase",
            items: [
                { title: "Setting up Postgres with Supabase" },
                { title: "Supabase client configuration in NextJS" },
                { title: "Data modeling and schema design" },
                { title: "CRUD operations with Supabase client" },
                { title: "Row-level security implementation" },
                { title: "Migrations and version control" },
                { title: "Edge function integration" },
                { title: "Testing database operations" }
            ]
        },
        {
            number: 7,
            title: "Authentication and Authorization",
            items: [
                { title: "Authentication strategies (NextAuth.js/Auth.js)" },
                { title: "JWT vs. session-based authentication" },
                { title: "OAuth integration with common providers" },
                { title: "Role-based access control implementation" },
                { title: "Protected routes in both router types" },
                { title: "Middleware for authentication flows" },
                { title: "Security best practices" },
                { title: "Testing authentication flows" }
            ]
        },
        {
            number: 8,
            title: "Caching Strategies",
            items: [
                { title: "Client-side caching fundamentals" },
                { title: "Server-side caching approaches" },
                { title: "Request memoization" },
                { title: "Revalidation strategies in NextJS" },
                { title: "Cache tags and on-demand revalidation" },
                { title: "Distributed caching with Redis" },
                { title: "Cache invalidation patterns" },
                { title: "Measuring cache performance" }
            ]
        },
        {
            number: 9,
            title: "State Management",
            items: [
                { title: "Local vs. global state considerations" },
                { title: "React Context API patterns and limitations" },
                { title: "Zustand for lightweight state management" },
                { title: "Form state with React Hook Form and Zod" },
                { title: "Server state vs. client state separation" },
                { title: "State persistence strategies" },
                { title: "State debugging tools and techniques" },
                { title: "Testing state management" }
            ]
        },
        {
            number: 10,
            title: "Real-time Features",
            items: [
                { title: "Supabase Realtime implementation" },
                { title: "LiveBlocks for collaborative experiences" },
                { title: "WebSockets in Next.js" },
                { title: "Cursor tracking and presence features" },
                { title: "Real-time chat implementation" },
                { title: "Notification systems" },
                { title: "Optimistic UI updates" },
                { title: "Scaling real-time features" }
            ]
        },
        {
            number: 11,
            title: "Deployment Options",
            items: [
                { title: "Vercel deployment and configuration" },
                { title: "Cloudflare Pages deployment" },
                { title: "SST/AWS setup for Next.js" },
                { title: "Docker containerization" },
                { title: "CI/CD pipeline implementation" },
                { title: "Environment management" },
                { title: "Monitoring and error tracking" },
                { title: "Performance monitoring post-deployment" }
            ]
        },
    ];

    return (
        <div className="bg-black min-h-screen  text-white p-8">
            <div className="container max-w-7xl mx-auto">
                <h1 className="text-6xl mb-4">What Inside</h1>
                <p className="text-xl mb-16">This course is designed to take you from beginner to a confident Fullstack Next.js Developer.</p>

                {sections.map((section) => (
                    <ModuleSection
                        key={section.number}
                        number={section.number}
                        title={section.title}
                        items={section.items}
                    />
                ))}
            </div>
        </div>
    );
} 