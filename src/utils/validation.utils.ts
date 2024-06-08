import { ValidationError } from 'class-validator';

export function transformValidationErrors(errors: ValidationError[]): string[] {
  return errors.map(
    (error) =>
      `${error.property} has wrong value ${error.value}, ${Object.values(error.constraints).join(', ')}`,
  );
}
