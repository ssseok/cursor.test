import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Submit Product | wemake' },
        { name: 'description', content: 'Submit your product' },
    ];
};

export default function SubmitPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Submit Your Product</h1>
        </div>
    );
}
