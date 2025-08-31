import { InfoResponse } from '../../../application/utilities/general_functions';

export default class RoleUser {
  id: number;
  name: string;
  description: string;
  info: InfoResponse | null;

  constructor(
    id: number,
    name: string,
    description: string,
    info: { createdAt: string; updatedAt: string },
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.info = info;
  }
};