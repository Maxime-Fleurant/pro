export const jwtmain = `
// app.ts
context: ({ req }) => {
  let user: Pick<User, 'id' | 'role'> | null;

  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];

    user = this.jwt.jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as Pick<User, 'id' | 'role'>;
  } else {
    user = null;
  }

  const context: IContext = {
    user: user ? { id: user.id, role: user.role } : null,
    loaders,
  };

  return context;
}



// login.ts
@Query(() => LoginResult)
async login(
  @Arg('name') name: string,
  @Arg('password') password: string
): Promise<{ token: string | null }> {
  const user = await this.userRepo.findOne({ name });

  if (user) {
    if (await this.bcrypt.bcrypt.compare(password, user.password)) {
      const token = this.jwt.jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: 120 }
      );

      return { token };
    }
  }

  return { token: null };
}

`;
