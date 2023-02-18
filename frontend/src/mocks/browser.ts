import { setupWorker } from 'msw';
import { handlers } from './resolver';

export const worker = setupWorker(...handlers);
