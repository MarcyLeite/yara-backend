import express from 'express'
import cors from 'cors'
import controllers from './controller/main.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/scene', express.static('public'))

for (const controller of controllers) {
	app[controller.method](controller.path, controller.callback)
}

app.listen(8080, () => {
	console.log('Server listening to port 8080')
})
