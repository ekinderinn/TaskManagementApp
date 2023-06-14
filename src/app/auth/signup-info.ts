export class SignupInfo {

  email: string;
  role: string[];
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.role = ['student'];
    this.password = password;
  }
}
