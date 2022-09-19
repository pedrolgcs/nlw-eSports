import { AppError } from '@/shared/errors/AppError';

export namespace FindAdsByGameIdError {
  export class GameNotFound extends AppError {
    constructor() {
      super('Game not found', 404);
    }
  }
}
