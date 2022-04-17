import { Router } from "express";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createComplimentController = new CreateComplimentController();
const authUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/users', createUserController.handle);
router.post('/users/login', authUserController.handle);

router.post('/tags', ensureAdmin, createTagController.handle);

router.post('/compliments', createComplimentController.handle);


export { router };