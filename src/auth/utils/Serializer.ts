import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { User } from "src/typeorm/entities/user.entity";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService) {
        super()
    }

    serializeUser(user: User, done: Function) {
        console.log("Serialize user")
        console.log(user)
        done(null, user.id)
    }

    async deserializeUser(payload: any, done: Function) {
        const user = await this.authService.findUserById(payload)
        console.log("Deserialize user")
        console.log(user)
        return user ? done(null, user) : done(null, null)
    }
}