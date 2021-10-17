import { IsString, IsBoolean, IsUUID, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsString()
  public username: string;

  @IsString()
  public password: string;

  @IsBoolean()
  @IsOptional()
  public isEnabled?: boolean;

  @IsBoolean()
  @IsOptional()
  public hasVerifiedEmail?: boolean;

  @IsUUID()
  public roleId: string;
}
