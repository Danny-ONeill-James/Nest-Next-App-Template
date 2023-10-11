import {
  Controller,
  Request as NestRequest,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express'; // <-- Import express Request
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@NestRequest() req: Request) {
    return this.authService.login(req.user);
  }
}
