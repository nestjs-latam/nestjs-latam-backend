import { LoginDto } from '@core/dtos/accounts/auth/login.dto';
import { RegisterDto } from '@core/dtos/accounts/auth/register.dto';
import { Body, Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { UserModel } from '../../users/models/user.model';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  public login(
    @Body(ValidationPipe)
    payload: LoginDto
  ): Promise<UserModel> {
    return this.authService.login(payload);
  }

  @MessagePattern({ cmd: 'register' })
  public async register(
    @Body(ValidationPipe)
    payload: RegisterDto
  ): Promise<UserModel> {
    try {
      return await this.authService.register(payload);
    } catch (exception) {
      throw new RpcException({
        message: exception.message,
        status: exception.error.status
      });
    }
  }
}
