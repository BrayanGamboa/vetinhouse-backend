import { InfoResponse } from '../../../application/utilities/general_functions';

export default class User {
  document: string | null;
  name: string;
  lastName: string;
  email: string;
  password: string;
  documentTypeId: number;
  roleId: number;
  info: InfoResponse;

  constructor(
    document: string | null = null,
    name: string,
    lastName: string,
    email: string,
    password: string,
    documentTypeId: number,
    roleId: number,
    info: { createdAt: string; updatedAt: string },
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