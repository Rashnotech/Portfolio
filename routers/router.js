import { Router } from 'express'
import Mailer from '../controllers/Mailer'

const route = new Router();

route.post('/api/v1/contact', Mailer.mail);
