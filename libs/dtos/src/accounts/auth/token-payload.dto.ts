import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class TokenPayloadDto {
  @IsUUID()
  public id: string;

  @IsString()
  public scope: string;

  @IsString()
  public roleId: string;

  @IsNumber()
  @IsOptional()
  public iat?: number;

  @IsNumber()
  @IsOptional()
  public exp?: number;
}
