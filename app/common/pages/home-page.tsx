import { Button } from '../components/ui/button';
import { NavigationMenu } from '../components/ui/navigation-menu';

export default function HomePage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">홈페이지</h1>
            <Button>Click me</Button>
        </main>
    );
}
