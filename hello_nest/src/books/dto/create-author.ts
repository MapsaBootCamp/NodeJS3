import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;
}
