import { useEffect, useState } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import api from '../../services/api'

function Home() {
	const [registros, setRegistros] = useState([])

	useEffect(() => {
		async function getRegistros() {
			try {
				const response = await api.get(`/clientes`)

				setRegistros(response.data)
			} catch (err) {
				console.log(err)
			}
		}

		getRegistros()
	}, [])

	async function deleteCliente(id) {
		try {
			await api.delete(`cliente/${id}`)

			setRegistros(state => state.filter(registro => registro.id !== id))

			alert('Usuario deletado com sucesso.')
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className="content">
			<h1>Lista de Clientes</h1>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Idade</th>
						<th>Email</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{registros.map(registro => (
						<tr key={registro.id}>
							<td data-label="Id">{registro.id}</td>
							<td data-label="Nome">{registro.nome}</td>
							<td data-label="Idade">{registro.idade}</td>
							<td data-label="Email">{registro.email}</td>
							<td>
								<Link to={`/edit/${encodeURIComponent(registro.id)}`}>
									<button>
										<FaEdit />
									</button>
								</Link>
								<button onClick={() => deleteCliente(registro.id)}>
									<FaTrash />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Link to="/add">Cadastrar novo Cliente</Link>
		</div>
	)
}

export default Home
