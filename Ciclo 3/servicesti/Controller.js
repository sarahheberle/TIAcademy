const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('olá mundo');
});

//Desafio aula 02: incluir alguns clientes e pedidos.
app.post('/cliente', async(req,res)=>{
    let create=await cliente.create(
        req.body
    )
    res.send('Cliente foi inserido');
})

app.post('/pedido', async(req,res)=>{
    let create=await pedido.create(
        req.body
    )
    res.send('Pedido foi inserido');
})

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    )
    res.send('serviço foi inserido');
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        order:[['nome', 'DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/ofertas', async(req,res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico=>{
        return res.json({
            error: false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
});

//1 visualize todos os clientes
app.get('/listacliente', async(req,res)=>{
    await cliente.findAll({
        order:[['nome','ASC']]
    }).then(function(clientes){
        res.json({clientes})
    });

});

//2 visualize os clientes em ordem de antiguidade
app.get('/ordenarclientes', async(req,res)=>{
    await cliente.findAll({
        order:[['id','ASC']]
    }).then(function(clientes){
        res.json({clientes})
    });

});

//3 visualize todos os pedidos
app.get('/listapedidos', async(req,res)=>{
    await pedido.findAll({
        order:[['id','ASC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });

});

//4 visualize o pedido por ordem a partir do maior valor
app.get('/maiorvalor', async(req,res)=>{
    await pedido.findAll({
        order:[['valor','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });

});

//5 informe quantos clientes estão na nossa base de dados
app.get('/qtdclientes', async(req,res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json(clientes);
    });
  
});

//6 informe a quantidade de pedidos solicitados
app.get('/qtdpedidos', async(req,res)=>{
    await pedido.count('id')
    .then(function(pedidos){
        res.json(pedidos);
    });
  
});

app.get('/atualizaservico', async(req,res)=>{
    await servico.findByPk(1)
    .then(servico=>{
        servico.nome='HTML/CSS/JS';
        servico.descricao='Páginas estáticas e dinâmicas estilizadas';
        servico.save();
        return res.json({servico});
    });
});

app.put('/editarservico', (req,res)=>{
    servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message:"Serviço foi alterado com sucesso"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço"
        });
    });
});

app.get('/servicospedidos', async(req,res)=>{
    await servico.findByPk(1, {
        include:[{all:true}]
    }).then(servico=>{
        return res.json({servico});
    })
})

app.put('/editarpedido', (req,res)=>{
    pedido.update(req.body,{
        where: {ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error: false,
            message:"Pedido modificado com sucesso."
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message: "Não foi possível modificar o pedido."
        })
    })
})

//ex.1

app.get('/listaservicocliente/:id', async (req, res)=>{
     await pedido.findAll({
          where: { ClienteId: [req.params.id] }
     }) .then(function(pedidos){
          res.json(pedidos) 
    }); console.log(pedidos,valor,ClienteId)
 })

//ex.2
app.put('/editarcliente',(req,res)=>{
    cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi alterado com sucesso."
        });
        }).catch(function(erro){
            return res.status(400).json({
            error: true, 
            message: "Erro na alteração do serviço."
        });
    });
});

//ex3
app.put('/editarpedido',(req,res)=>{
    pedido.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
        }).catch(function(erro){
            return res.status(400).json({
            error: true, 
            message: "Erro na alteração do serviço."
        });
    });
});

app.get('/excluircliente', async(req,res)=>{
    cliente.destroy({
        where: {id:1}
    })

})

app.delete('/apagarcliente/:id', (req,res)=>{
    cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi excluido com sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente"
        })
    })
})

//Desafio aula 03
app.get('/gastopedido/:id', async (req, res) => {
    await pedido.sum('valor', {
        where: {
            ClienteId: req.params.id
        }
    }).then((pedido) => {
        return res.json({
            pedido
        })
    });
});

//Desafio aula 04

app.get('/pedidoclienteid/:id', async (req, res) => {
    await pedido.findAll({
        include: [{ all: true }]
    },
        {
            where: {
                ClienteId: req.params.id
            }
        }).then((pedido) => {
            return res.json({ pedido })
       
           
        })
});




let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('servidor ativo');
});