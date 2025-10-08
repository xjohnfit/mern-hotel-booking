import express from 'express';
import { authController, logoutController } from '../controllers/authController';
import verifyToken from '../middlewares/verifyToken';
import { validateTokenController } from '../controllers/validateTokenController';

const router = express.Router();

router.post('/login', authController);
router.get('/validate-token', verifyToken, validateTokenController);
router.post('/logout', logoutController);

export default router;