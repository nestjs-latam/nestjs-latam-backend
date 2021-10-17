import { UserDto } from '@core/dtos';
import { LoginDto } from '@core/dtos/accounts/auth/login.dto';
import { RegisterDto } from '@core/dtos/accounts/auth/register.dto';
import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post
} from '@nestjs/common';

import { AuthService } from '../services/auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.ACCEPTED)
  public async login(@Body() body: LoginDto): Promise<UserDto> {
    try {
      return await this.auth.login(body);
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  public async register(@Body() body: RegisterDto): Promise<any> {
    try {
      await this.auth.register(body);
      return {};
    } catch (error) {
      throw new HttpException(error.message, error?.status || 500);
    }
  }
}
