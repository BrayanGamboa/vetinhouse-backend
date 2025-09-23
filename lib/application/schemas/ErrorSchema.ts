import Joi from "joi";

export const ErrorResponseSchema = Joi.object({
  statusCode: Joi.number().required(),
  error: Joi.string().required(),
  message: Joi.string().required(),
});

export const CommonErrorResponses = {
  400: {
    description: "Bad Request",
    schema: ErrorResponseSchema.example({
      statusCode: 400,
      error: "Bad Request",
      message: "Validation failed: missing required fields",
    }),
  },
  401: {
    description: "Unauthorized",
    schema: ErrorResponseSchema.example({
      statusCode: 401,
      error: "Unauthorized",
      message: "Invalid or expired token",
    }),
  },
  404: {
    description: "Not Found",
    schema: ErrorResponseSchema.example({
      statusCode: 404,
      error: "Not Found",
      message: "Resource not found",
    }),
  },
  500: {
    description: "Internal Server Error",
    schema: ErrorResponseSchema.example({
      statusCode: 500,
      error: "Internal Server Error",
      message: "Unexpected server error",
    }),
  },
};
