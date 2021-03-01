import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'

const application = express()
application.use(helmet())
application.use(morgan('common'))

const checkIfAdmin = (request, response, next) => {
	console.log('is admin')
	next()
}

application.use(checkIfAdmin)

application.get('/recipe', (request, response) => {
	response.send('Ditt anrop gick igenom')
})

application.get('/throwdice', (request, response) => {
	response.send(Math.random().toString())
})

mongoose.connect('mongodb://localhost/namndb', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('SUCCESFULLY CONNECTED TO DB'))
	.catch((error) => {
		console.log('ERROR WHILE TRYING TO CONNECT TO DB: ' + error)
		process.exit()
	})

application.listen(3001, () => {
	console.log('Servern är igång på port' + 3001)
})