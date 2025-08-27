export default class User {
  document: string | null;
  name: string;
  lastName: string;
  email: string;
  password: string;
  documentTypeId: number;
  roleId: number;
  info: JSON;

  constructor(
    document: string | null = null,
    name: string,
    lastName: string,
    email: string,
    password: string,
    documentTypeId: number,
    roleId: number,
    info: JSON,
  ) {
    this.document = document;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.documentTypeId = documentTypeId;
    this.roleId = roleId;
    this.info = info;
  }
};