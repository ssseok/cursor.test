import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Yearly Leaderboard | wemake' },
        { name: 'description', content: 'Yearly product leaderboard' },
    ];
};

export default function YearlyLeaderboardPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Yearly Leaderboard</h1>
        </div>
    );
}
