import { Companys } from './../entity/Companys';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

export const getCompanys = async (request: Request, response: Response) => {
  const company = await getRepository(Companys).find();
  return response.json(company);
}

export const saveCompanys = async(request: Request, response: Response) => {
  const company = await getRepository(Companys).save(request.body);
  response.json(company)
}

export const getCompany = async(request: Request, response: Response) => {
  const { id } = request.params;
  const task = await getRepository(Companys).findOne(id);
  return response.json(task);
}

export const updateCompany = async(request: Request, response: Response) => {
  const { id } = request.params;
  const companys = await getRepository(Companys).update(id, request.body);
  if (companys.affected === 1) {
    const companyUpdated = await getRepository(Companys).findOne(id);
    return response.json(companyUpdated);
  }
  return response.status(404).json({ message: 'Company not found'});
} 

export const removeCompany = async(request: Request, response: Response) => {
  const { id } = request.params;
  const company = await getRepository(Companys).delete(id);

  if (company.affected === 1) {
    const removeCompany = await getRepository(Companys).findOne(id);
    return response.json({message: 'Empresa removida'});
  }
  return response.status(404).json({ message: 'Company not found'});
}

