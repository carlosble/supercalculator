export default function createView() {
    function initialize() {
        let display = document.getElementById('calculator-display');
        display.innerHTML = '';
        document.getElementById('number-1').addEventListener('click', () => {
            display.innerHTML += '1';
        });
        document.getElementById('number-2').addEventListener('click', () => {
            display.innerHTML += '2';
        });
        document.getElementById('operator-plus').addEventListener('click', () => {
            display.innerHTML += ' + ';
        });
    }

    return {
        initialize,
        subscribeCalculateEvent: (handler) => {},
        renderResult: (result) => {},
        renderError: (error) => {}
    }
};
