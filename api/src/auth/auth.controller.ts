import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(
    @Body('username') username: string,
    @Body('password') password: string,
  ): string {
    console.log('controller');
    return this.authService.signup(username, password);
  }

  @Post('login')
  login(
    @Body('username') username: string,
    @Body('password') password: string,
  ): string {
    console.log('controller');
    console.log(username, password);
    return this.authService.login(username, password);
  }
}
