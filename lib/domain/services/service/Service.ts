import { InfoResponse } from '../../../application/utilities/general_functions';

export default class Service {
  id: number;
  name: string;
  description: string;
  value: number | null;
  scheduleServicioId: number;
  info: InfoResponse | null;

  // Sobrecargas de constructor
  constructor();
  constructor(
    id: number,
    name: string,
    description: string,
    value: number, 
    scheduleServicioId: number,
    info: InfoResponse,
  );

  // Implementación única
  constructor(
    id?: number,
    name?: string,
    description?: string,
    value?: number,
    scheduleServicioId?: number,
    info?: InfoResponse,
  ) {
    this.id = id ?? 0;
    this.name = name ?? '';
    this.description = description ?? '';
    this.value = value ?? null;
    this.scheduleServicioId = scheduleServicioId ?? 0;
    this.info = info ?? null;
  }
}
