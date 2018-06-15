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
        document.getElementById('operator-equal').addEventListener('click', fireCalculateEvent);
    }

    let subscribers = [];

    function subscribe(subscriber){
        subscribers.push(subscriber);
    }
    function fireCalculateEvent(){
        subscribers.forEach((subscriber) => {
            subscriber({
                operation: "1"
            })
        });
    }

    return {
        initialize,
        subscribeCalculateEvent: subscribe,
        renderResult: (result) => {},
        renderError: (error) => {}
    }
};
