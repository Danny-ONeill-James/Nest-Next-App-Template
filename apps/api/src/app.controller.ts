import {
  Controller,
  Post,
  UseGuards,
  Request as NestRequest,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { Request } from 'express'; // <-- Import express Request

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@NestRequest() req: Request) {
    return req.user;
  }
}
