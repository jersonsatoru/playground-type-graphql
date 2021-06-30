import { Field, ObjectType } from 'type-graphql';
import { Category } from '../category/Category';

@ObjectType()
export class Video {
  @Field()
  name: string

  @Field()
  description: string

  @Field()
  _id: string

  @Field(() => Category)
  category: Category
}
