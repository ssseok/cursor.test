import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Products | wemake' },
        { name: 'description', content: 'Explore all products' },
    ];
};

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Products</h1>
        </div>
    );
}
