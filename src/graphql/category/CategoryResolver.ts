import {
  Arg, Mutation, Query, Resolver,
} from 'type-graphql';
import { Category } from './Category';
import CategorySchema from '../../models/CategorySchema';
import { CategoryInput } from './CategoryInput';

@Resolver(Category)
export class CategoryResolver {
  @Query(() => [Category])
  async categories() {
    return CategorySchema.find();
  }

  @Mutation(() => Category)
  async createCategory(@Arg('categoryInput') categoryInput: CategoryInput) {
    return CategorySchema.create(categoryInput);
  }
}
