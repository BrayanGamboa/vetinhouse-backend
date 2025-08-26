import SayHello from "../../application/use_cases/SayHello";
import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";

export default {

  sayHelloWorld(): string {
    return SayHello();
  },

  sayHelloPerson(request: Request, h: ResponseToolkit): string | ResponseObject {
    const { name } = request.params as { name?: string };

    if (!name || name.trim() === "") {
      return h.response({ error: "Name parameter is required" }).code(400);
    }

    return SayHello(name);
  },

};
