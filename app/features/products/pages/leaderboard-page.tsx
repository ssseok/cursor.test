import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Leaderboard | wemake' },
        { name: 'description', content: 'Product leaderboards' },
    ];
};

export default function LeaderboardPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Leaderboard</h1>
        </div>
    );
}
