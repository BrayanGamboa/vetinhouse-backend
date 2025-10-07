import { InfoResponse } from '../../../application/utilities/general_functions';

export default class Service {
  id: number;
  name: string;
  schedule: JSON | null;
  info: InfoResponse | null;

  constructor();
  constructor(
    id: number,
    name: string,
    schedule: JSON,
    info: InfoResponse,
  );

  constructor(
    id?: number,
    name?: string,
    schedule?: JSON,
    info?: InfoResponse,
  ) {
    this.id = id ?? 0;
    this.name = name ?? '';
    this.schedule = schedule ?? null;
    this.info = info ?? null;
  }
}
