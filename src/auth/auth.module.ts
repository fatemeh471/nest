import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Users from 'src/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
//load data from .env
import * as dotenv from 'dotenv';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
dotenv.config();


@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtStrategy],
})
export class AuthModule {}
