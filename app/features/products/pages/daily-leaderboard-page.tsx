import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Daily Leaderboard | wemake' },
        { name: 'description', content: 'Daily product leaderboard' },
    ];
};

export default function DailyLeaderboardPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Daily Leaderboard</h1>
        </div>
    );
}
