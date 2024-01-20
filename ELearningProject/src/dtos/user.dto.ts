import { IsString, IsEmail, IsOptional, IsDate } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsOptional()
  @IsString()
  public phoneNumber: string;

  @IsOptional()
  @IsDate()
  public birthDate: Date;
}

export class UpdateUserDto {
  @IsEmail()
  public email: string;

  @IsOptional()
  @IsString()
  public phoneNumber: string;

  @IsOptional()
  @IsDate()
  public birthDate: Date;
}
