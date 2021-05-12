import api from '../../services/api'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function EditCliente() {
	const { id } = useParams()
	const history = useHistory()

	const [state, setState] = useState({
		cad_nome: '',
		cad_idade: '',
		cad_email: '',
	})

	const handleState = prop => e => {
		setState({ ...state, [prop]: e.target.value })
	}

	useEffect(() => {
		async function updateRegistro() {
			const response = await api.get(`/cliente/${id}`)

			setState({
				cad_nome: response.data.nome,
				cad_idade: response.data.idade,
				cad_email: response.data.email,
			})
		}

		updateRegistro()
	}, [id])

	async function handleOnSubmit(e) {
		e.preventDefault()

		const Cliente = {
			id: id,
			nome: state.cad_nome,
			idade: state.cad_idade,
			email: state.cad_email,
		}

		await api.put(`/cliente`, Cliente).then(console.log(Cliente))

		alert('usuário alterado com sucesso.')

		history.push('/')
	}

	return (
		<div className="container">
			<div className="content">
				<div id="cadastro">
					<form onSubmit={handleOnSubmit}>
						<h1>Alterar cadastro</h1>

						<p>
							<label>Id</label>
							<input type="number" value={id} readOnly />
						</p>

						<p>
							<label>Seu nome</label>
							<input
								required="required"
								type="text"
								placeholder="Digite seu nome"
								value={state.cad_nome}
								onChange={handleState('cad_nome')}
							/>
						</p>

						<p>
							<label>Sua idade</label>
							<input
								required="required"
								type="text"
								placeholder="Digite seu endereço"
								value={state.cad_idade}
								onChange={handleState('cad_idade')}
							/>
						</p>

						<p>
							<label>Seu email</label>
							<input
								required="required"
								type="text"
								placeholder="Digite sua idade"
								value={state.cad_email}
								onChange={handleState('cad_email')}
							/>
						</p>
						<p>
							<input type="submit" value="Alterar" />
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}
