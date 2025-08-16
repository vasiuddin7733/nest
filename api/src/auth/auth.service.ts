import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup(username: string, password: string): string {
    console.log(username, password);
    return `${username} signed up successfully.`;
  }
  login(username: string, password: string): string {
    console.log(username, password);
    return `User ${username} logged in successfully.`;
  }
}
