export const mainpassport = `
// localStrategy.ts
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService, private bcrypt: Bcrypt) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.userService.findCreditential(email);

    if (user && (await this.bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;

      return result;
    }

    throw new UnauthorizedException();
  }
}


// jwtStrategy.ts
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWTSECRET,
    });
  }

  async validate(payload: any): Promise<User> {
    return this.userService.findOneUserOrchestration(Number(payload.userId));
  }
}


// login.ts
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    const payload = { userId: user.id, admin: user.admin, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}

`;
