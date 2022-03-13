interface IMailTo {
  name: string,
  email: string
}

interface IMailMessage {
  subject: string,
  body: string
  attachment?: string[]
}

interface MessageDTO {
  to: IMailTo,
  message: IMailMessage
}

interface IMailService {
  sendMail(request: MessageDTO): void
}

class Email implements IMailService {
  sendMail({ to, message}: MessageDTO) {
    console.log(`E-mail enviado para ${to.name}: ${message.subject}`);
  }

}

export default Email;