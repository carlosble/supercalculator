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
    let service, client;
    beforeEach(function () {
        document.body.innerHTML = pug.compileFile('./views/main.pug', null)();
        client = {};
        service = createService(client);
    });

    it('sum numbers', function () {
        client.save = (result) => {
            return Promise.resolve(result); // stub
        };
        let result = service.calculate("1 + 2");
        expect(result.value).toEqual(3);
        expect(result.isSuccessful).toBeTruthy();
    });

    it('asks the client to save the result', function () {
        let savedResult = null;
        client.save = (result) => { // spy
            savedResult = result;
            expect(result.value).toEqual(3);
            return Promise.resolve(result);
        };
        service.calculate("1 + 2");

        expect(savedResult).not.toBeNull();
    });

    it('handles errors in client whilst saving', function (done) {
        let retries = 0;
        client.save = () => { // stub y spy
            ++retries;
            return Promise.reject('Connection timed out');
        };
        service.onClientError = () => {
            expect(retries).toEqual(3);
            done();
        };

        service.calculate("1 + 2");
    });
});
