export class Register{
  email: string
  password: string
  userName: string
  dateNaissance: string


  constructor(email: string, password: string, userName: string, dateNaissance: string) {
    this.email = email;
    this.password = password;
    this.userName = userName;
    this.dateNaissance = dateNaissance;
  }
}


