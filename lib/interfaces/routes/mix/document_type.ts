import { Server } from '@hapi/hapi';
import DocumentTypeController from '../../controllers/mix/DocumentTypeController';
import {DocumentTypePayloadSchema, DocumentTypeListResponseSchema, DocumentTypeResponseSchema} from '../../../application/schemas/mix/DocumentTypeSchema';
import Joi from 'joi';

const pathBase = '/document_type';

export default {
  name: 'Document type',
  version: '1.0.0',
  register: async (server: Server) => {

    server.route([
      {
        method: 'GET',
        path: pathBase,
        handler: DocumentTypeController.findDocumentTypes,
        options: {
          description: 'List all document types',
          tags: ['Document type', 'api'],
          response: {
            schema: DocumentTypeListResponseSchema
          }
        },
      },
      {
        method: 'POST',
        path: pathBase,
        handler: DocumentTypeController.createDocumentType,
        options: {
          description: 'Create a document type',
          tags: ['Document type', 'api'],
          validate: {
            payload: DocumentTypePayloadSchema
          },
          response: {
            schema: DocumentTypeResponseSchema
          }
        },
      },
      {
        method: 'PATCH',
        path: `${pathBase}/{id}`,
        handler: DocumentTypeController.updateDocumentType,
        options: {
          description: 'Update a document type by id',
          tags: ['Document type', 'api'],
          validate: {
            params: Joi.object({
              id: Joi.number().required().description('The id of the user')
            })
          },
        },
      },
      {
        method: 'GET',
        path: `${pathBase}/{id}`,
        handler: DocumentTypeController.getDocumentType,
        options: {
          description: 'Get a document type by id',
          tags: ['Document type', 'api'],
          response: {
            schema: DocumentTypeListResponseSchema
          },
          validate: {
            params: Joi.object({
              id: Joi.number().required().description('The id of the user')
            })
          },
        },
      },
      {
        method: 'DELETE',
        path: `${pathBase}/{id}`,
        handler: DocumentTypeController.deleteDocumentType,
        options: {
          description: 'Delete a document type by id',
          tags: ['Document type', 'api'],
        },
      },
    ]);
  }
};