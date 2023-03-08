import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const user = this.showUserProfileUseCase.execute({ user_id });

    if (!user) {
      throw new Error("Nenhum usuário encontrado com o ID informado!");
    }

    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
