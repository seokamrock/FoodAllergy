import { MealInfo } from '../types';

export function cleanDishName(name: string): string {
  return name.replace(/\s*\(N\)\s*$/i, '').trim();
}

export function cleanMealNames(meals: MealInfo[]): MealInfo[] {
  return meals.map(meal => ({
    ...meal,
    dishes: meal.dishes.map(dish => ({
      ...dish,
      name: cleanDishName(dish.name),
    })),
  }));
}
