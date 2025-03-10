import { Router } from 'express';
import user_controller from '../controllers/user.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const user_router = new Router();

user_router.get('/all', protect ,user_controller.get_all_users);
user_router.get('/:id', protect ,user_controller.get_user_by_id);

user_router.post('/login', user_controller.login_user);
user_router.post('/register', user_controller.create_user);

// user_router.post('/create/all', user_controller.create_user_all);

user_router.put('/:id',protect ,user_controller.update_user_by_id);
user_router.delete('/:id',protect , user_controller.delete_user_by_id);


export default user_router;
