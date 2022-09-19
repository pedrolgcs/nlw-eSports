import { AppError } from '@/shared/errors/AppError';

export namespace FindAdByIdError {
  export class AdNotFound extends AppError {
    constructor() {
      super('Ad not found', 404);
    }
  }
}
