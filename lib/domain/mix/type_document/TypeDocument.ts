import { InfoResponse } from '../../../application/utilities/general_functions';

export default class TypeDocument {
  id: number;
  name: string;
  description: string;
  info: InfoResponse | null;

  // Sobrecargas de constructor
  constructor();
  constructor(
    id: number,
    name: string,
    description: string,
    info: InfoResponse,
  );

  // Implementación única
  constructor(
    id?: number,
    name?: string,
    description?: string,
    info?: InfoResponse,
  ) {
    this.id = id ?? 0;
    this.name = name ?? '';
    this.description = description ?? '';
    this.info = info ?? null;
  }
}
