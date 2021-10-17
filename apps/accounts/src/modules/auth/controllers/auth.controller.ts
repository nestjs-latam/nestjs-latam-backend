import { LoginDto } from '@core/dtos/accounts/auth/login.dto';
import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserModel } from '../../users/models/user.model';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  public login(@Body() payload: LoginDto): Promise<UserModel> {
    return this.authService.login(payload);
  }
}
