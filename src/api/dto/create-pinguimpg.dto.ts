import { IsInt, IsNotEmpty, IsString } from 'class-validator'

export class CreatePinguimpgDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsInt()
  age: number
}
