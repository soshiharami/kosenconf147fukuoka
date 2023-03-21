import { Controller, Get } from '@nestjs/common';
import { AppService, Profile } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Profile {
    return this.appService.getHello();
  }
}
