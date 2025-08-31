import { FORMAT_DATE } from "../../infrastructure/config/constants";
import moment from "moment-timezone";

type AnyObject = Record<string, any>;

//Verifica si el valor es un objeto (excluye arrays y fechas).
export const isObject = (object: unknown): object is AnyObject => {
  try {
    return (
      typeof object === "object" &&
      object !== null &&
      !Array.isArray(object) &&
      new Date(object as any).toString() === "Invalid Date"
    );
  } catch (err) {
    console.error(err);
    return false;
  }
};

//Convierte las claves de un objeto a snake_case de manera recursiva.
export const convertCamelToSnakeCase = (object: unknown): unknown => {
  let result: any = {};

  if (Array.isArray(object)) {
    result = object.map(convertCamelToSnakeCase);
  } else if (isObject(object)) {
    for (const property in object) {
      const newProperty = property.replace(
        /[A-Z]/g,
        (letter) => `_${letter.toLowerCase()}`
      );

      if (isObject(object[property])) {
        result[newProperty] = convertCamelToSnakeCase(object[property]);
      } else if (Array.isArray(object[property])) {
        result[newProperty] = object[property].map(convertCamelToSnakeCase);
      } else {
        result[newProperty] = object[property];
      }
    }
  } else {
    result = object;
  }

  return result;
};

//Genera la fecha actual en formato definido en FORMAT_DATE.
export const generateCurrentDate = (): string => {
  return moment().utc().format(FORMAT_DATE);
};

//Convierte un texto a mayúsculas.
export const convertUpperCase = (text: string): string => {
  return text.toUpperCase();
};


export interface InfoResponse {
  createdAt: string;
  updatedAt: string;
}