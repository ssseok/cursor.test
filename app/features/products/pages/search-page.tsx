import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Search Products | wemake' },
        { name: 'description', content: 'Search for products' },
    ];
};

export default function SearchPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Search Products</h1>
        </div>
    );
}
