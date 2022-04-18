import { Router } from "express";

import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const createComplimentController = new CreateComplimentController();
const authUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();


router.post('/users', createUserController.handle);
router.post('/users/login', authUserController.handle);

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);

router.post('/compliments', ensureAuthenticated, createComplimentController.handle);
router.get('/compliments/sent', ensureAuthenticated, listUserSendComplimentsController.handle)
router.get('/compliments/received', ensureAuthenticated, listUserReceiveComplimentsController.handle);


export { router };