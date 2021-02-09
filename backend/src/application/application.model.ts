import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Application {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  name: string;
}
