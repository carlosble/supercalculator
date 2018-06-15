import createView from '../src/view';
import createClient from '../src/client';
const pug = require('pug');


describe("the calculator view", function () {
    beforeEach(function () {
        document.body.innerHTML = pug.compileFile('./views/main.pug', null)();
    });

    it('loads the markup', function () {
        expect(
            document.getElementById('number-1'))
            .not.toBeNull();
    });

    it('renders numbers and operator in the display', function () {
        let display = document.getElementById('calculator-display');
        expect(display.innerHTML.trim()).toEqual('0');
        let view = createView();
        view.initialize();

        document.getElementById('number-1').click();
        document.getElementById('operator-plus').click();
        document.getElementById('number-2').click();

        expect(display.innerHTML.trim()).toEqual("1 + 2");
    });

    it('fires event on equal operator', function () {
        let view = createView();
        view.initialize();
        let eventWasFired = false;
        let operation = null;
        view.subscribeCalculateEvent((event) => {
            eventWasFired = true;
            operation = event.operation;
        });
        document.getElementById('number-1').click();
        document.getElementById('operator-equal').click();

        expect(eventWasFired).toBeTruthy();
        expect(operation).toEqual('1');
    });

});
