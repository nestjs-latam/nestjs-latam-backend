import {
  IsString,
  IsBoolean,
  IsOptional,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @Matches(/[a-zA-Z0-9]{2,16}/)
  @MaxLength(16)
  @MinLength(2)
  public username: string;

  @IsString()
  public password: string;

  @IsBoolean()
  @IsOptional()
  public isEnabled?: boolean;

  @IsBoolean()
  @IsOptional()
  public hasVerifiedEmail?: boolean;
}
