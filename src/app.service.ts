import { Injectable } from '@nestjs/common';
// dto برای validations
//لاجیک رو هندل میکنه 
// بهترین ویژگی نست دپندنسی اینجکشن هستش  هرکاری میخای انجام بدی برای یوزر همه چی اونجا قرار داره user.find user get user get user create  
// هر سرویس رو باید تو سرویس دیگه استفاده کنیم و اونو توی سرویس ها اینجکت میکنیم
//  توی سرویس ایجکت میکنی متدهاتو و تو کنترلر ی که میخای استفاده کنی اضافه اش میکنی
// اگر سرویسی میخای توی سرویس دیگه استفاده کنی باید توی پروایدر استفادش کنی
// middleware :  handle or validate or check requsers --> logger authentication error 
//Middleware به کدی گفته می‌شود که بین درخواست (Request) ورودی و پاسخ نهایی (Response) اجرا می‌شود
// کارهایی که می‌توان با Middleware انجام داد:
// چک کردن توکن/کوکی کاربر قبل از نمایش صفحه و مثلاً اگر کاربر لاگین نکرده، بفرستش به صفحه login بر اساس زبان مرورگر، ریدایرکت به /en یا /fa لاگ‌گیری و مانیتورینگ	ومثلا جلوگیری از دسترسی IPهای خاص

//passport package قبل از اینکه ریکوست برسه به کنترلر برسی میکنه مثل میدلورها yarn add password
// password هش میشه و هش شده توی دیتابیس ذخبره میشه برای هش کردن yarn add bcryptjs
// validate with class-transformer   // ValidationPipe from nest  ValidationPipe یه تایپ قبل از اینکه به کتنرل برسه dtoها رو ولیدت میکنه

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
