import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()  // یه کلاسه  روتین رو هندل میکنن
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
