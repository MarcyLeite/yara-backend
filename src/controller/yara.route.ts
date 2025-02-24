import path from 'path'
import { readFileSync, writeFileSync } from 'fs'

import { Controller } from './main.js'

const publicPath = path.resolve('public/yara-config.json')

export default [
	{
		method: 'get',
		path: '/yara/config.json',
		callback: (_, res) => {
			res.send(readFileSync(publicPath))
		},
	},
	{
		method: 'post',
		path: '/yara/config.json',
		callback: (req, res) => {
			const newConfig = req.body
			writeFileSync(publicPath, JSON.stringify(newConfig))
			res.status(200).send()
		},
	},
] as Controller[]
