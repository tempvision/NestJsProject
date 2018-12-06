import { AppService } from './../app.service';
import { ExceptionFilter, ArgumentsHost, Catch, HttpException, Injectable } from '@nestjs/common';

@Injectable()
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  constructor(private readonly appService: AppService) { }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse();
    response.send({ msg: 'Exception catched', ex: exception.message });
  }
}