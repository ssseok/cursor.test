import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Promote Product | wemake' },
        { name: 'description', content: 'Promote your product' },
    ];
};

export default function PromotePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Promote Your Product</h1>
        </div>
    );
}
