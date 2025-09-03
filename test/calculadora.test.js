const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');
describe('Testes da Função de Soma', function() {
    it('Deve calcular a soma de dois números positivos', function() {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(10, 20);

        // Compara o resultado com o valor que vc espera
        expect(resultadoDaSoma).to.equal(30);
    });

    it('Deve calcular a soma de um número positivo e um negativo', function() {
         // Coleta o resultado da função
         const resultadoDaSoma = somarDoisNumeros(50, -15);

         // Compara o resultado com o valor que vc espera
         expect(resultadoDaSoma).to.equal(35);
    });
 });