const express = require('express')
const questionCtlr = express.Router()
const { Question, Quiz } = require('../models')

questionCtlr.get('/', async (req, res) => {
	const questions = await Question.findAll({
		include: Quiz
	})
	res.json(questions)
})

questionCtlr.get('/new', async (req, res) => {
	res.render('questions/create')
})

questionCtlr.post('/', async (req, res) => {
	const { quizId, question } = req.body
	const questions = await Question.create({ quizId, question} )
	
	res.json(questions)
})

questionCtlr.get('/:id', async (req, res) => {
	const question = await Question.findByPk( Number(req.params.id), {
		include: Quiz
	})
	res.json(question.Quiz)
})

questionCtlr.post('/:id', async (req, res) => {
	var question = await Question.update( req.body, {
	  where: { id: Number(req.params.id) }
	})
	var question = await Question.findByPk( Number(req.params.id) )
	res.json(question)
})

questionCtlr.delete('/:id', async (req, res) => {
	const deleted = await Question.destroy({
		where: { id: Number(req.params.id) }
	})
	res.json(deleted)
})

module.exports = questionCtlr