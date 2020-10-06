import { getRepository } from 'typeorm';
import { TypeDocuments } from '../entity/TypeDocument';
import { Request, Response } from 'express';

export const getTypeDocuments = async (request: Request, response: Response) => {
  const typeDocuments = await getRepository(TypeDocuments).find();
  return response.json(typeDocuments);
}

export const saveTypeDocuments = async(request: Request, response: Response) => {
  const typeDocuments = await getRepository(TypeDocuments).save(request.body);
  response.json(typeDocuments)
}

export const getTypedocument = async(request: Request, response: Response) => {
    const { id } = request.params;
    const task = await getRepository(TypeDocuments).findOne(id);
    return response.json(task);
}

export const updateTypeDocument = async(request: Request, response: Response) => {
  const { id } = request.params;
  const typeDocuments = await getRepository(TypeDocuments).update(id, request.body);
  if (typeDocuments.affected === 1) {
    const typeDocumentUpdated = await getRepository(TypeDocuments).findOne(id);
    return response.json(typeDocumentUpdated);
  }
  return response.status(404).json({ message: 'Type Document not found'});
} 

export const removeTypeDocument = async(request: Request, response: Response) => {
  const { id } = request.params;
  const typeDocuments = await getRepository(TypeDocuments).delete(id);

  if (typeDocuments.affected === 1) {
    const removeTypeDocument = await getRepository(TypeDocuments).findOne(id);
    return response.json({message: 'Tipo de Documento removido'});
  }
  return response.status(404).json({ message: 'Type Document not found'});
}

