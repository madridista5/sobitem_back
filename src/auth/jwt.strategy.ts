import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { User } from "../user/user.entity";
import { config } from "../config/config";

export interface JwtPayload {
  id: string;
}

function cookieExtractor(req: any): null | string {
  return (req && req.cookies) ? (req.cookies?.jwt ?? null) : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: config.SECRET_OR_KEY, // to musi być to samo co w metodzie createToken w pliku auth.service.ts
    });
  }

  async validate(payload: JwtPayload, done: (error, user) => void) {
    if (!payload || !payload.id) {
      return done(new UnauthorizedException(), false);
    }
    const user = await User.findOne({ where: { currentTokenId: payload.id } });
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}