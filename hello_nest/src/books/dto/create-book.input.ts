import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => String)
  name: string;

  @Field(() => ID)
  authorId: string;
}
