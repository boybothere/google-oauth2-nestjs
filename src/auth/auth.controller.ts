import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/GoogleAuthGuard';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { resolve } from 'path';

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

    @Get('status')
    user(@Req() req: Request) {
        if (req.user) {
            return { message: "User has been authenticated!", user: req.user }
        } else {
            return { message: "User has not been authenticated!", user: null }
        }
    }

    @Get('logout')
    @UseGuards(AuthGuard('session'))
    logoutUser(@Req() req: Request) {
        return new Promise<any>((resolve, reject) => {
            req.logout((err) => {
                if (err) return reject(err)
                console.log("Logging out...")
                resolve({ message: "User logged out successfully" })
            })
        })
    }
}
