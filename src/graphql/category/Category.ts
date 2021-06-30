import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Category {
  @Field()
  name: string

  @Field()
  description: string

  @Field()
  _id: string
}
