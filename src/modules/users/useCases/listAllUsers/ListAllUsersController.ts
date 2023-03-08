import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const all_users = this.listAllUsersUseCase.execute();

    return response.status(200).json(all_users);
  }
}

export { ListAllUsersController };