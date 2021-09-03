import express from 'express';
import { show, up, destroy, showAll } from './controller';

const userRouter = express.Router()

// Lo que debo proteger es lo siguiente
// ? Para poder proteger mi ruta debo usar all()
userRouter.route('/show/:id').get(show)
userRouter.route('/destroy/:id').delete(destroy)
userRouter.route('/users').get(showAll)
userRouter.route('/update/:id').put(up);
// ? Usamos export default cuando solamente hay una cosa que exportar
export default userRouter
