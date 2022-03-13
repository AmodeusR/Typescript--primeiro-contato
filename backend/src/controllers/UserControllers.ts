import { Request, Response } from "express";
import EmailService from "../services/EmailService";
const users = [
  {name: "Apolodoro", email: "apolo@gmail.com"},
  {name: "Desidério", email: "ofilosofo@gmail.com"}
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {name: "Mardias", email: "mardias@hotmail.com"},
      message: {subject: "Meu primeiro e-mail", body: "Eis aqui o meu primeiro e-mail"}
    });

    res.send();
  }
}