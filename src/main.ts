import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  // اضافه کردن میدلورها
   app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // برای زمانی که نام استرینگ دارم با پسورد هم بفرسته ولیدیشن هایی که بود فقط نیم رو چک میکمنیم و
      // وقتی اضافه کنی مثلا فیلد پسورد  رو ارور میده چیزایی که تو وایت لیست هستن مثل نیم رو چک میکنه
    }),
  );
    app.use(
    session({
      secret: 'secret',
      
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

}
bootstrap();
