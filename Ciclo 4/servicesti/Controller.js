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

    

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        })
    }

    await servico.create(
        req.body
        
    )
    
    res.send('serviço foi inserido');
    await aguardar(3000);
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

app.delete('/apagarservico/:id', (req,res)=>{
    servico.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi excluido com sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o Serviço"
        })
    })
})

app.get('/cliente/:id', async(req,res)=>{
    cliente.findByPk(req.params.id)
    .then(cliente=>{
        return res.json({
            error: false,
            cliente
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
});

app.post('/cadastrarcliente', async(req,res)=>{
   

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        })
    }

    await cliente.create(
        req.body
        
    )
    
    res.send('cliente foi inserido');
    await aguardar(3000);
});

app.put('/editarcliente', (req,res)=>{
    cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message:"cliente foi alterado com sucesso"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do cliente"
        });
    });
});

//Rotas Pedido para front

app.get('/pedido/:id', async(req,res)=>{
    pedido.findByPk(req.params.id,  {
        include:[{
            all:true
        }]
    })
    .then(pedido=>{
        return res.json({
            error: false,
            pedido
        });
    }).catch(function(erro){
            return res.status(400).json({
            error: true,
            message: "Código não cadastrado!"
        });
    });
});

app.post('/cadastrarpedido', async(req,res)=>{
   

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        })
    }

    await pedido.create(
        req.body
        
    )
    
    res.send('Pedido foi inserido');
    await aguardar(3000);
});

app.delete('/apagarpedido/:id', (req,res)=>{
    pedido.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "pedido foi excluido com sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o pedido"
        })
    })
})





let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('servidor ativo');
});