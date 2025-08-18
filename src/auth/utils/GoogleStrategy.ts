import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configService: ConfigService,
        @Inject('AUTH_SERVICE') private readonly authService: AuthService
    ) {
        super({
            clientID: configService.get<string>('CLIENT_ID')!,
            clientSecret: configService.get<string>('CLIENT_SECRET')!,
            callbackURL: configService.get<string>('CALLBACK_URL')!,
            scope: ['profile', 'email']
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        console.log(accessToken)
        console.log(refreshToken)
        console.log(profile)
        if (!profile.emails || profile.emails.length === 0) {
            throw new Error('User email not provided by Google.');
        }

        const user = await this.authService.validateUser({
            email: profile.emails[0].value,
            displayName: profile.displayName,
        });
        console.log('Validate')
        console.log(user)
        return user || null
    }
}