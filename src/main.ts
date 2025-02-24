import express from 'express'
import controllers from './controller/main.js'

const app = express()
app.use(express.json())
for (const controller of controllers) {
	app[controller.method](controller.path, controller.callback)
}

app.listen(8080, () => {
	console.log('Server listening to port 8080')
})
