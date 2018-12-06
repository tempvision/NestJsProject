import { AuthService } from './auth/auth.service';
import { UsersService } from './users.service';
import { DelayInterceptor } from './interceptor/delay.interceptor';
import { RolesGuard } from './guards/roles.guard';
import { BadWordsPipe } from './pipes/bad-words.pipe';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { Get, Controller, BadRequestException, UseFilters, Query, ParseIntPipe, UsePipes, Post, Body, ValidationPipe, UseGuards, ReflectMetadata, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { UserLoginDTO } from './models/user-login.dto';
import { Roles } from './decorators/roles.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,

    private readonly usersService: UsersService) { }

  @Post('login')
  async login(@Body() user) {
    if (this.usersService.isLoggedIn(user)) {
      return await this.authService.sign({ username: user.username });
    }
    else {
      return 'No such user!';
    }
  }

  @Get('data')
  @UseGuards(AuthGuard())
  async getData() {
    return 'data';
  }
}



// @Get()
//   // @UsePipes(BadWordsPipe)
//   // @UseFilters(new HttpExceptionFilter())
//   // @Roles('admin', 'simple', 'superuser')
//   // @UseGuards(RolesGuard)
//   @UseInterceptors(DelayInterceptor)
//   root(@Query() id: string): string {
//     // console.log(id);
//     return this.appService.root();
//   }

//   @Post()
//   add(@Body(new ValidationPipe({
//     whitelist: true,
//     transform: true,
//   })) body: UserLoginDTO) {
//     console.log(body);
//   }
