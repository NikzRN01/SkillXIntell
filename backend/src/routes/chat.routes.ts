import { Router } from 'express';
import * as chatController from '../controllers/chat.controller';
import { requireAuth } from '../middleware/auth.middleware';

const router = Router();

// All routes require authentication
router.use(requireAuth);

// Send chat message with conversation history
router.post('/message', chatController.sendMessage);

// Validate if message is career-related
router.post('/validate', chatController.validateMessage);

export default router;
