import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ExisitingUserDTO } from 'src/client-auth/user/dtos/existing-user.dto';
import { NewUserDTO } from 'src/client-auth/user/dtos/new-user.dto';
import { UserDetails } from 'src/client-auth/user/user-details.interface';
import { UserDocument } from 'src/client-auth/user/user.schema';
import { UserService } from 'src/client-auth/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private UserService: UserService,
        private jwtService:JwtService,
        ) { }
    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 12);
    }
    async register(user: Readonly<NewUserDTO>): Promise<UserDetails | any> {
        const { name, email, password } = user; 
        const existingUser = await this.UserService.findByEmail(email);
        if (existingUser){ 
            throw new HttpException('mail already used',409); 
        }
        const hashedPassword = await this.hashPassword(password);
        const newUser = await this.UserService.create(name, email, hashedPassword);  
        return this.UserService._getUserDetails(newUser);
    }
    async doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
    async validateUser(email: string, password: string): Promise<UserDetails | null> {
        const user = await this.UserService.findByEmail(email); console.log(email+user);
        
        if (!user) throw new HttpException('user inexistant',HttpStatus.NOT_FOUND);
        const doesPasswordMatch = await this.doesPasswordMatch(password, user.password);
        if (!doesPasswordMatch) throw new HttpException('mot de passe fausse',HttpStatus.NOT_FOUND);
  
        return this.UserService._getUserDetails(user);
    }
    async login(existingUser: ExisitingUserDTO): Promise<{ token: string } | null> {
        const { email, password } = existingUser; 
        
        const user = await this.validateUser(email, password);
        if (!user) return null;
        const jwt = await this.jwtService.signAsync({user});//json with token
        return {token: jwt};
    }
}
