import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common'; 
import { JwtPayloadDto } from '../dto/jwt-payload.dto';
import { HostService } from 'src/host-auth/host/host.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private hostService: HostService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    });
  
  }
  async validate(payload: JwtPayloadDto) {
    console.log(payload );
    console.log('new'+ payload.username);
    const user = await this.hostService.findByEmail(
      payload.email,
    );
    if (!user) {
      throw new UnauthorizedException('Veuillez vérifier vos credentials');
    }
    return user;
  }
}
