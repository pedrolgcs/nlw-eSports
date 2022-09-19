import { AppError } from '@/shared/errors/AppError';

export namespace UpdateGameByIdError {
  export class GameNotExists extends AppError {
    constructor() {
      super('Game not exists', 404);
    }
  }

  export class GameTitleAlreadyExists extends AppError {
    constructor() {
      super('Game title already exists', 400);
    }
  }
}
