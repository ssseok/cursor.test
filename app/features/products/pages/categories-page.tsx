import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Categories | wemake' },
        { name: 'description', content: 'Browse products by category' },
    ];
};

export default function CategoriesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Categories</h1>
        </div>
    );
}
