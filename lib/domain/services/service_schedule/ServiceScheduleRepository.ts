/* eslint-disable @typescript-eslint/no-unused-vars */
import ServiceSchedule from "./ServiceSchedule";
import Boom from "@hapi/boom";

export default class {

  persist(domainServiceSchedule: ServiceSchedule): Promise<ServiceSchedule> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  update(servicesScheduleId: number, fields: any): Promise<ServiceSchedule> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(servicesScheduleId: number): Promise<ServiceSchedule> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByFilter(filter: any): Promise<any> {
    throw Boom.notImplemented('ERR_METHOD_NOT_IMPLEMENTED');
  }

};
