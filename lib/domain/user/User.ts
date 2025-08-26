export default class User {
  id: string | null;
  name: string;
  lastName: string;
  email: string;
  password: string;

  constructor(
    id: string | null = null,
    name: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
};