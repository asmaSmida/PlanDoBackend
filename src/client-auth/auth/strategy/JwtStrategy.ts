import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common'; 
import { UserService } from '../../user/user.service';
import { JwtPayloadDto } from '../dto/jwt-payload.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    });
  }
  async validate(payload: JwtPayloadDto) {
    const user = await this.userService.findByEmail(
       payload.email,
    );
    if (!user) {
      throw new UnauthorizedException('Veuillez vérifier vos credentials');
    }
    return user;
  }
}
