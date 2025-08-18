import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/GoogleAuthGuard';

@Controller('auth')
export class AuthController {

    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {

    }
    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    handleRedirect(@Req() req) {
        return { message: "Authentication successful!", user: req.user }
    }
}
