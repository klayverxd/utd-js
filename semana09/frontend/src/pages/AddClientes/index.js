import { useState } from 'react'
import { useHistory } from 'react-router'

import api from '../../services/api'

function AddClientes() {
	const history = useHistory()

	const [state, setState] = useState({
		cad_nome: '',
		cad_idade: '',
		cad_email: '',
	})

	const handleState = prop => e => {
		setState({ ...state, [prop]: e.target.value })
	}

	async function handleOnSubmit(e) {
		e.preventDefault()

		const Cliente = {
			nome: state.cad_nome,
			idade: state.cad_idade,
			email: state.cad_email,
		}

		await api.post(`/cliente`, Cliente)

		alert('Usuário adicionado com sucesso.')

		history.push('/')
	}

	return (
		<div className="container">
			<div className="content">
				<div id="cadastro">
					<form onSubmit={handleOnSubmit}>
						<h1>Cadastro</h1>

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
								placeholder="Digite seu idade"
								value={state.cad_idade}
								onChange={handleState('cad_idade')}
							/>
						</p>

						<p>
							<label>Seu email</label>
							<input
								required="required"
								type="text"
								placeholder="Digite seu email"
								value={state.cad_email}
								onChange={handleState('cad_email')}
							/>
						</p>
						<p>
							<input type="submit" value="Cadastrar" />
						</p>
						<p>
							<input
								type="submit"
								onClick={() => history.push('/')}
								value="Ir para Home"
							/>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddClientes
