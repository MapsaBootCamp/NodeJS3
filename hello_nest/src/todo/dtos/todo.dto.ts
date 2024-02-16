import { IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class TodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  dueDate: Date;
}
