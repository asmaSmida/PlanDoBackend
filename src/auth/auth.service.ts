import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'; 
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private UserService: UserService) { }
    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 12);
    }
    async register(user: Readonly<NewUserDTO>): Promise<UserDetails | any> {
        const { name, email, password } = user;
        const existingUser=await this.UserService.findByEmail(email);
        if(existingUser) return 'Email taken!';
        const hashedPassword=await this.hashPassword(password);
        const newUser= await this.UserService.create(name,email,hashedPassword);
        return this.UserService._getUserDetails(newUser);
    }
}
