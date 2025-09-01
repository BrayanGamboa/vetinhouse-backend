import DocumentType from "../../../domain/mix/type_document/TypeDocument";

const _serializeSingleRoleUser = (documentType: DocumentType) => {
  return {
    'id': documentType.id,
    'name': documentType.name,
    'description': documentType.description,
    'info': documentType.info
  };
};

export default class {
  serialize(data: DocumentType) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleRoleUser);
    }
    return _serializeSingleRoleUser(data);
  }

};