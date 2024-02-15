import { IsString, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class TodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @Type(() => Date)
  @IsDate()
  dueDate: Date;
}
