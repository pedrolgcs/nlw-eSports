import { AppError } from '@/shared/errors/AppError';

export namespace FindDiscordByAdIdError {
  export class AdNotFound extends AppError {
    constructor() {
      super('Ad not found', 404);
    }
  }
}
