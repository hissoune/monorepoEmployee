import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
 constructor(private authService:AuthService){}
    @Post('login')
    login(@Body() body){
        return this.authService.login(body)
    }

    @Post('register')
    register(@Body() body){
        return this.authService.register(body)

    }
}
