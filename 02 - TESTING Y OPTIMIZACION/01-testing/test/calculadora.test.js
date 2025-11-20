//node --test

import test from 'node:test';
import assert from 'node:assert';
import { calculadora } from '../calculadora.js';

test('Conjunto de pruebas suma', (t)=>{
    t.test('Debería sumar correctamente dos números', ()=>{
        // preparacion
        const num1 = 4;
        const num2 = 6;
        const resultadoEsperado = 10;

        // ejecucion
        const resultado = calculadora.sumar(num1, num2);

        // verificacion
        assert.strictEqual(resultado, resultadoEsperado);

        assert.notStrictEqual(resultado, 0, 'La suma no debería dar como resultado 0')
        assert.ok(resultado > 9)
    });

    t.test('Debería responder con un error si se le envia algun argumento no numérico', ()=>{
        const arg1 = 4;
        const arg2 = ['hola']

        assert.throws(
            () => calculadora.sumar(arg1, arg2),
            new Error('Argumentos inválidos')
        )
    })
})