import { ObjectType, Field } from 'type-graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@ObjectType()
export class AmenityType {
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly amenityName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  readonly iconValue: string;
}
