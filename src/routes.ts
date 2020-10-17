import { Router } from 'express';
import multer from 	'multer';

import uploadConfig from './config/multer';
import OrphanagesController from './controllers/Orphanages';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.store);

export default routes;
