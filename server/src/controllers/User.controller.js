import { request, response } from 'express'
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

const deleteUser = async (request, response) => {
	try {
		const userId = request.params.userId
		const databaseResponse = await UserModel.findByIdAndDelete(request.params.userId)
		response.status(200).send({message: 'Användare borttagen', date: databaseResponse})
	} catch (error) {
		response.status(500).send({
			message: `Gick inte att ta bort användare med ID ${userId}`,
			error: error.message
		})
	}
}

const updateUser = async (request, response) => {
	const userId = request.params.userId
	const data = {
		username: request.body.username,
		password: request.body.password
	}
	try {
		const databaseResponse = await UserModel.findByIdAndUpdate(userId, data, { new: true })
		response.status(200).send(databaseResponse)
	} catch(error) {
		response.status(500).send({
			message: `Gick inte att uppdatera info om användare med ID ${userId}`,
			error: error.message
		})
	}
}

const queryUsername = async (request, response) => {
	try {
		const databaseResponse = await UserModel.find({ username: request.query.username })
		response.status(200).send(databaseResponse)
	} catch (error) {
		response.status(500).send({
			message: `Gick inte att hitta användaren: ${request.query.username}`,
			error: error.message
		})
	}
}

const getUserByID = async (request, response) => {
	try {
		const databaseResponse = await UserModel.findOne({ _id: request.params.userId })
		response.status(200).send(databaseResponse)
	} catch (error) {
		response.status(500).send({
			message: `Gick inte att hitta användaren med ID: ${request.params.userId}`,
			error: error.message
		})
	}
}

export default {
	createUser,
	getAllUsers,
	deleteUser,
	updateUser,
	queryUsername,
	getUserByID
}