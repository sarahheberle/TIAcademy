import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './pages/Home/';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente'
import { Menu } from './components/Menu.js';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import { Servico } from './pages/Servico/Servico';
import { Cadastrar } from './pages/Servico/Cadastrar';
import { Editar } from './pages/Servico/Editar';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { Cliente } from './pages/Cliente/Cliente';
import { CadastrarCliente } from './pages/Cliente/CadastrarCliente';
import { EditarCliente } from './pages/Cliente/EditarCliente';
import { Pedido } from './pages/Pedido/Pedido';
import { CadastrarPedido } from './pages/Pedido/CadastrarPedido';
import { EditarPedido } from './pages/Pedido/EditarPedido';


function App() {
  return (
    <div> 
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cliente/:id" component={Cliente}/>
          <Route path="/pedido/:id" component={Pedido}/>
          <Route path="/cadastrarservico" component={Cadastrar}/>
          <Route path="/cadastrarcliente" component={CadastrarCliente}/>
          <Route path="/cadastrarpedido" component={CadastrarPedido}/>
          <Route path="/editarservico/:id" component={Editar}/>
          <Route path="/editarcliente/:id" component={EditarCliente}/>
          <Route path="/editarpedido/:id" component={EditarPedido}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
