import { Ingredient } from '../ingredient.model';

export class Recipe {
    constructor(
        public name: string,
        public img_url: string,
        public description: string,
        public ingredients: Ingredient[]
    ) { }
}
