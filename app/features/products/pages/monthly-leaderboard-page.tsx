import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Monthly Leaderboard | wemake' },
        { name: 'description', content: 'Monthly product leaderboard' },
    ];
};

export default function MonthlyLeaderboardPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Monthly Leaderboard</h1>
        </div>
    );
}
