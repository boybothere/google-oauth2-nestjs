import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/GoogleAuthGuard';

@Controller('auth')
export class AuthController {

    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {

    }
    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    handleRedirect() {

    }
}
