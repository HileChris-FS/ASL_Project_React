import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom"

const Quiz = () => {
	const [quiz, setQuiz] = useState({Questions: []})
	const params = useParams()
	useEffect(() => {
		async function fetchQuiz() {
			const q = await axios(`http://localhost:3000/quizzes/${params.id}`, {
				headers: {
					token: localStorage.token
				}
			})
	  		setQuiz(q.data)
		}
		fetchQuiz()
	}, []);
	return (
		<form id="quiz">
			<h2>{quiz.name} Quiz</h2>
			<ul>
				{quiz.Questions.map(q => (
					<li>
						<h3>{q.question}</h3>
								{q.Choices.map(c => (
									<div>
										<ul>
										<li>
											<input type="radio" name={'question_' + q.id} required />
											<label>{c.a}</label>
										</li>
										<li>
											<input type="radio" name={'question_' + q.id} required />
											<label>{c.b}</label>
										</li>
										<li>
											<input type="radio" name={'question_' + q.id} required />
											<label>{c.c}</label>
										</li>
										<li>
											<input type="radio" name={'question_' + q.id} required />
											<label>{c.d}</label>
										</li>
										</ul>
									</div>
								))}
					</li>
				))}
			</ul>
			<button type="submit">Submit Quiz</button>
		</form>
	)
}

export default Quiz