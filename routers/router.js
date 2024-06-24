import { Router } from 'express'
import Contact from '../controllers/Contact.js';

const router = Router();

router.post('/api/v1/contact', Contact.Sendmail);
router.get('/', (req, res) => {
    res.send('Welcome to my API');
});

export default router;