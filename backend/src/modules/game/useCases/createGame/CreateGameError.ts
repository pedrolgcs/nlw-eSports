import { AppError } from '@/shared/errors/AppError';

export namespace CreateGameError {
  export class GameTitleAlreadyExists extends AppError {
    constructor() {
      super('Game title already exists');
    }
  }
}
