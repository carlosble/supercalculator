import createService from '../src/service';
const pug = require('pug');

/* TODO List:
 *  - single operator
 *      1 + 2 = 3
 *      3 * 3 = 9
 *      4 / 2 = 2
 *      2 - 1 = 1
 *      10 + 300 = 310
 *
 *  - multiple operators
 *      1 + 1 + 1
 *      1 * 1 + 1 - 1
 *
 *  - Errores:
 *      a + 1 => error
 *      1 + + 1 => error
 *      3 / 0 => infinity
 */

describe("the calculator service", function () {
    let service;
    beforeEach(function () {
        document.body.innerHTML = pug.compileFile('./views/main.pug', null)();
        service = createService({});
    });


    it('sum numbers', function () {
        let result = service.calculate("1 + 2");
        expect(result.value).toEqual(3);
        expect(result.isSuccessful).toBeTruthy();
    });

});
