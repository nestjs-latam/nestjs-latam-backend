import { JwtService as JwtProvider } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { TokenPayloadDto } from '@core/dtos/accounts/auth/token-payload.dto';
import { TokenDto } from '@core/dtos/accounts/auth/token.dto';

@Injectable()
export class JwtService {
  constructor(private readonly jwt: JwtProvider) {}

  public async createToken(payload: TokenPayloadDto): Promise<TokenDto> {
    const accessToken = await this.jwt.sign(payload);
    const signed = await this.jwt.verify(accessToken);
    return {
      accessToken,
      expiresAt: new Date(signed.exp * 1000)
    };
  }
}
