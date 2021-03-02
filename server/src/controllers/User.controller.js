import UserModel from '../models/User.model.js'

const createUser = async (request, response) => {
    
	const user = new UserModel({
		username: request.body.username,
		password: request.body.password,
		age: request.body.age
	})

	try {
		const databaseResponse = await user.save()
		response.status(201).send(databaseResponse)
	} catch (error) {
		response.status(500).send({
			message: 'Fel vid skapande av användare',
			stack: error
		})
	}
}

const getAllUsers = async (request, response) => {
	try {
		const databaseResponse = await UserModel.find()
		response.status(200).send(databaseResponse)
	} catch (error) {
		response.status(500).send({ message: error.message })
	}
}

export default {
	createUser,
	getAllUsers
}