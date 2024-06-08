import { ValidationPipeOptions } from '@nestjs/common';
import { ValidationException } from 'src/common/exceptions/validation.exception';
import { transformValidationErrors } from 'src/utils/validation.utils';

export const validationPipeOptions: ValidationPipeOptions = {
  transform: true,
  whitelist: true,
  forbidNonWhitelisted: true,
  exceptionFactory: (errors) => {
    const validationErrors = transformValidationErrors(errors);
    throw new ValidationException(validationErrors);
  },
};
