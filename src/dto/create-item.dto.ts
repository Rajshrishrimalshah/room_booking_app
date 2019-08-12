import { ObjectType, Field, Int, ID } from 'type-graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsInt,
} from 'class-validator';

@ObjectType()
export class ItemType {
  @Field(() => ID)
  @IsOptional()
  @IsString()
  readonly id: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @Field(() => Int)
  //@IsOptional()
  // @IsNumber()
  readonly price: number;
  @Field()
  @IsString()
  readonly description: string;
}
