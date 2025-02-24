import { Request, Response } from 'express'
import yaraRoute from './yara.route.js'

export type Controller = {
	method: 'get' | 'post'
	path: string
	callback: (request: Request, response: Response) => void
}

export default [...yaraRoute]
