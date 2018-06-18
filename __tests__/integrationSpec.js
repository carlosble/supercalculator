import createApp from '../src/factory';
const pug = require('pug');


xdescribe("the calculator", function () {
    let app;
    beforeEach(function () {
        document.body.innerHTML = pug.compileFile('./views/main.pug', null)();
        app = createApp();
        app.start();
    });

    it('calculates operations', function () {
        let display = document.getElementById('calculator-display');
        expect(display).not.toBeNull();

        document.getElementById('number-1').click();
        document.getElementById('operator-plus').click();
        document.getElementById('number-2').click();
        expect(display.innerHTML.trim()).toEqual("1 + 2");
        document.getElementById('operator-equal').click();

        expect(display.innerHTML.trim()).toEqual("3");
    });
});
