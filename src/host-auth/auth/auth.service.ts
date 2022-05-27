import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ExisitingHostDTO } from 'src/host-auth/host/dtos/existing-host.dto';
import { NewHostDTO } from 'src/host-auth/host/dtos/new-host.dto';
import { HostDetails } from 'src/host-auth/host/host-details.interface';
import { HostDocument } from 'src/host-auth/host/host.schema';
import { HostService } from 'src/host-auth/host/host.service';
import { JwtPayloadDto } from './dto/jwt-payload.dto';

@Injectable()
export class AuthService {
    constructor(
        private HostService: HostService,
        private jwtService:JwtService,
        ) { }
    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 12);
    }
    async register(host: Readonly<NewHostDTO>): Promise<HostDetails | any> {
        const { name, email,  password } = host; 
        const existingHost = await this.HostService.findByEmail(email );
            
        if (existingHost){ 
            throw new HttpException('Ce compte existe déja',409); 
        }  
        const hashedPassword = await this.hashPassword(password);
        const newHost = await this.HostService.create( {...host,password:hashedPassword} );  
        return this.HostService._getHostDetails(newHost);
    }
    async doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
    async validateHost(email: string, password: string): Promise<HostDetails | null> {
        const host = await this.HostService.findByEmail(email );
        if (!host) throw new HttpException('mail invalide',HttpStatus.NOT_FOUND);
        const doesPasswordMatch = await this.doesPasswordMatch(password, host.password);
        if (!doesPasswordMatch) throw new HttpException('mot de passe fausse',HttpStatus.NOT_FOUND);
  
        return this.HostService._getHostDetails(host);
    }
    async login(existingHost: ExisitingHostDTO): Promise<{ token: string } | null> {
        const { email, password } = existingHost; 
        
        const host = await this.validateHost(email, password);
        if (!host) return null;
        
    const payload: JwtPayloadDto = {
        username: host.name,
        email: host.email,
        role: host.role,
      };
        const jwt =  this.jwtService.sign(payload);//json with token
        return {token: jwt};
    }
}
