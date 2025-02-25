import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
    return [
        { title: 'Weekly Leaderboard | wemake' },
        { name: 'description', content: 'Weekly product leaderboard' },
    ];
};

export default function WeeklyLeaderboardPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">Week</h1>
        </div>
    );
}
