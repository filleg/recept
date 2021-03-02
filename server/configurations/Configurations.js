import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { DATABASE_URL, PORT } = process.env

const connectToDatabase = async () => {
	try {
		await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
		console.log('SUCCESFULLY CONNECTED TO DB')
	} catch (error) {
		console.log('ERROR WHILE TRYING TO CONNECT TO DB: ' + error)
		process.exit()
	}
}

const connectToPort = (application) => {
	application.listen(3001, () => {
		console.log('Servern är igång på port: ' + PORT)
	})    
}


export default {
	connectToDatabase,
	connectToPort
}














/*mongoose.connect('mongodb://localhost/namndb', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('SUCCESFULLY CONNECTED TO DB'))
	.catch((error) => {
		console.log('ERROR WHILE TRYING TO CONNECT TO DB: ' + error)
		process.exit()
	})

application.listen(3001, () => {
	console.log('Servern är igång på port' + 3001)
})*/