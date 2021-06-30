import { Field, InputType } from 'type-graphql';

@InputType()
export class VideoInput {
  @Field()
  name: string

  @Field()
  description: string

  @Field()
  category: string
}
