import {setupWorker} from 'msw'
import {handlers} from './handlers'

const worker = setupWorker(...handlers)

export * from 'msw'
export {worker}
