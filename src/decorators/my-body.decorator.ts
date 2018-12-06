import { createParamDecorator } from '@nestjs/common';

export const MyBody = createParamDecorator((data, req) => {
  return req.body;
});