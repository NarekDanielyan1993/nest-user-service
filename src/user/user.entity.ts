import { IsBoolean, IsInt, IsString, Max, Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  surname: string;

  @Column()
  @IsInt()
  @Min(0)
  @Max(120)
  age: number;

  @Column()
  @IsString()
  gender: string;

  @Column()
  @IsBoolean()
  problems: boolean;
}
