import { TypeDocuments } from './entity/TypeDocument';
import { Companys }from './entity/Companys';
import {Router, Request, Response } from 'express';

import {getTypeDocuments, saveTypeDocuments , getTypedocument, updateTypeDocument, removeTypeDocument} from './controller/TypeDocumentsController'
import { getCompanys, saveCompanys, getCompany, updateCompany,removeCompany } from './controller/Companys'

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Hello Mundo'});
})

/* rotas dos tipos de documento */
routes.get('/typeDocuments', getTypeDocuments);
routes.get('/typeDocuments/:id', getTypedocument);
routes.post('/typeDocuments', saveTypeDocuments);
routes.put('/typeDocuments/:id', updateTypeDocument);
routes.delete('/typeDocuments/:id', removeTypeDocument);

/* rotas do cadastro da empresa */
routes.get('/companys', getCompanys);
routes.post('/companys', saveCompanys);
routes.get('/companys', getCompany);
routes.post('/companys', updateCompany);
routes.post('/companys', removeCompany);


export default routes