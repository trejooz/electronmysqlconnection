const Sequelize = require('sequelize')

var db_config = {
  host : 'localhost',
  user : 'root',
  password : 'root',
  port : '8889',
  database: 'cruzazul'
}

var sequelize = new Sequelize('mysql://'+db_config.user+':'+db_config.password
+'@'+db_config.host+':'+db_config.port+'/'+db_config.database+'')

sequelize.authenticate().then(()=> {
console.log('database: ' + db_config.database + 'conectado')
}).catch((err)=>{
console.log('error al conectar ' + err );
})
