import { HttpException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Users from 'src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerDto: RegisterDto) {
    const user = await this.usersService.findUserByEmail(registerDto.email);
    if (user) {
      throw new HttpException('User already exists', 400);
    }
    registerDto.password = await bcrypt.hash(registerDto.password, 10);

    // send welcome email after register is completed
    // setImmediate(async () => {
    //   await this.mailerService.sendMail({
    //     text: 'welcome to our website',
    //     subject: 'welcome',
    //     to: registerDto.email,
    //     template: 'welcome.html',
    //     context: {
    //       name: registerDto.first_name,
    //       family: registerDto.last_name,
    //     },
    //   });
    // });
    return await this.usersService.createUser(registerDto);
  }
  async login(loginDto: LoginDto) {
    const user = await this.usersService.findUserByEmail(loginDto.email);
    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const isPasswordMath = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordMath) {
      throw new HttpException('wrong password', 400);
    }
    const accessToken = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });
    return {
      access_token: accessToken,
    };
  }
}
