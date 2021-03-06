import Router from 'koa-router';
import { Context } from 'koa';
import StateMiddleware from '../middlewares/StateMiddleware';
import StatController from '../controllers/StatController';

const router = new Router();

router.get('/', async (ctx: Context) => {
  ctx.body = await StatController.getEverything(ctx.stateType);
});

export default router;
