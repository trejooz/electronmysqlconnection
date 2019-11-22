const marca = sequelize.define('marca', {
  brand : {
    type: Sequelize.STRING
  },
})

marca.sync( )
marca.create({
  brand : 'Leonovo'

})

marca.findAll().then((marca) => {
marca.forEach(marca  => {
  console.log('brand: ' + marca.brand);
});
}).catch((err) => {
console.log('error al conectar ' + err );
})
