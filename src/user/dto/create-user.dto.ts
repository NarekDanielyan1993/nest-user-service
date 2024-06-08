import { IsBoolean, IsEnum, IsInt, IsString } from 'class-validator';

enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsInt()
  age: number;

  @IsEnum(Gender)
  gender: Gender;

  @IsBoolean()
  problems: boolean;
}
