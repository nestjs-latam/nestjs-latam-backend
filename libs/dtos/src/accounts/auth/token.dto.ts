import { IsDate, IsString } from 'class-validator';

export class TokenDto {
  @IsString()
  public accessToken: string;

  @IsDate()
  public expiresAt: Date;
}
