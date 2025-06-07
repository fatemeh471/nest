import { Injectable } from '@nestjs/common';

//لاجیک رو هندل میکنه 
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
