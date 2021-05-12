import { Component } from 'react'
import api from '../../services/api'

export default class EditCliente extends Component {
	state = {
		id: this.props.match.params.id,
		cad_nome: '',
		cad_idade: '',
		cad_email: '',
	}

	componentDidMount = async e => {
		const response = await api.get(`/cliente/${this.state.id}`)

		this.setState({
			cad_nome: response.data.nome,
			cad_idade: response.data.idade,
			cad_email: response.data.email,
		})

		console.log(response)
	}

	handleNomeChange = e => {
		this.setState({ cad_nome: e.target.value })
	}

	handleIdadeChange = e => {
		this.setState({ cad_idade: e.target.value })
	}

	handleEmailChange = e => {
		this.setState({ cad_email: e.target.value })
	}

	handleOnSubmit = async e => {
		const { id, cad_nome, cad_idade, cad_email } = this.state
		e.preventDefault()

		const Cliente = {
			id: id,
			nome: cad_nome,
			idade: cad_idade,
			email: cad_email,
		}

		await api.put(`/cliente`, Cliente).then(console.log(Cliente))

		alert('usuário alterado com sucesso.')
	}

	render() {
		const { id, cad_nome, cad_idade, cad_email } = this.state

		return (
			<div className="container">
				<div className="content">
					<div id="cadastro">
						<form onSubmit={this.handleOnSubmit}>
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
									value={cad_nome}
									onChange={this.handleNomeChange}
								/>
							</p>

							<p>
								<label>Sua idade</label>
								<input
									required="required"
									type="text"
									placeholder="Digite seu endereço"
									value={cad_idade}
									onChange={this.handleIdadeChange}
								/>
							</p>

							<p>
								<label>Seu email</label>
								<input
									required="required"
									type="text"
									placeholder="Digite sua idade"
									value={cad_email}
									onChange={this.handleEmailChange}
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
}
