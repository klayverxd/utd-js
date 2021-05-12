import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/index'
import EditClientes from './pages/EditClientes/index'
import AddClientes from './pages/AddClientes/index'

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/edit" component={EditClientes} />
				<Route path="/add" component={AddClientes} />
			</Switch>
		</Router>
	)
}
