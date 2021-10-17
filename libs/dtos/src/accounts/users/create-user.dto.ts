import { IsString, IsBoolean, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public username: string;

  @IsString()
  public password: string;

  @IsBoolean()
  public isEnabled?: boolean;

  @IsBoolean()
  public hasVerifiedEmail?: boolean;

  @IsUUID()
  public roleId: string;
}
