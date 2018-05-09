import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

should = chai.should();

console.log('Aqui');

// //Aqui é o bloco principal que executará o nossos testes:
// describe('Livros', function() {
// beforeEach(function(done) {

//     //Sempre depois de executar o nosso teste, iremos limpar a nossa base de dados:
//     Livro.remove({}, function(error) {
//         done();
//     });
// });