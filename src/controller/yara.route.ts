import path from 'path'
import { writeFileSync } from 'fs'

import { Controller } from './main.js'

const publicPath = path.resolve('public/config.json')

export default [
	{
		method: 'post',
		path: '/api/v1/scene/config.json',
		callback: (req, res) => {
			const newConfig = req.body
			writeFileSync(publicPath, JSON.stringify(newConfig))
			res.status(200).send()
		},
	},
] as Controller[]
