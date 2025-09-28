import ServiceRepository from "../../../../domain/services/service/ServiceRepository";
import Service from "../../../../domain/services/service/Service";

export default async (id: number, { serviceRepository }: { serviceRepository: ServiceRepository }): Promise<Service> => {
  
  return await serviceRepository.getByFilter({id});
};