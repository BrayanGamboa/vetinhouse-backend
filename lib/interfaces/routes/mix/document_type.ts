import { Server } from '@hapi/hapi';
import DocumentTypeController from '../../controllers/mix/DocumentTypeController';

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
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: pathBase,
        handler: DocumentTypeController.createDocumentType,
        options: {
          description: 'Create a document type',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: `${pathBase}/{id}`,
        handler: DocumentTypeController.getDocumentType,
        options: {
          description: 'Get a document type by id',
          tags: ['api'],
        },
      },
      // {
      //   method: 'DELETE',
      //   path: `${pathBase}/{id}`,
      //   handler: DocumentTypeController.deleteUser,
      //   options: {
      //     description: 'Delete a user',
      //     tags: ['api'],
      //   },
      // },
    ]);
  }
};