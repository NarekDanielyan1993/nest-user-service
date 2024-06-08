import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
  constructor(public validationErrors: string[]) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Validation failed',
        errors: validationErrors,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
