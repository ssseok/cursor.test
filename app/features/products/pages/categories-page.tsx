import { Hero } from '~/common/components/hero';
import type { Route } from './+types/categories-page';
import CategoryCard from '../components/category-card';

export const meta: Route.MetaFunction = () => {
    return [
        { title: 'Categories | wemake' },
        { name: 'description', content: 'Browse products by category' },
    ];
};

export default function CategoriesPage() {
    return (
        <div className="space-y-10">
            <Hero
                title="Categories"
                subtitle="Browse products by category"
            />
            <div className="grid grid-cols-4 gap-10">
                {Array.from({ length: 10 }).map((_, index) => (
                    <CategoryCard
                        key={`category-${index}`}
                        id={`category-${index}`}
                        name={`Category Name`}
                        description={`Category description`}
                    />
                ))}
            </div>
        </div>
    );
}
