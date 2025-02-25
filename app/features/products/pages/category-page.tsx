import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Category | wemake' },
        { name: 'description', content: 'Products in this category' },
    ];
};

export default function CategoryPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Category</h1>
        </div>
    );
}
