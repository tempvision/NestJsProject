import { AppService } from './../app.service';
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';

export class BadWordsPipe implements PipeTransform {

  constructor(private readonly appService: AppService){

  }
  private words: string[] = ['test'];
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    // if (this.words.find(word => word === value)) {
    //   console.log('Bad word found');
    // }

    return value;
  }
}