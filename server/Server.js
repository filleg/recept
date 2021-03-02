import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from './src/middlewares/Middlewares.js'
import Configuration from './configurations/Configurations.js'

const application = express()
application.use(helmet())
application.use(morgan('common'))

/*const checkIfAdmin = (request, response, next) => {
	console.log('is admin')
	next()
}

application.use(checkIfAdmin)

application.get('/recipe', (request, response) => {
	response.send('Ditt anrop gick igenom')
})


application.get('/throwdice', (request, response) => {
	response.send(Math.random().toString())
})*/


application.use(Middlewares.notFound)
application.use(Middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(application)