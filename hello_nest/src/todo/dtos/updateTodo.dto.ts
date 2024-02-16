import { IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  dueDate?: Date;

  @IsOptional()
  done?: boolean;
}
