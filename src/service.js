export default function createService(client) {
    return {
        calculate: (operation) => {
            let numbers = operation.split('+');
            let resultValue = Number(numbers[0]) + Number(numbers[1]);
            return {
                value: resultValue,
                isSuccessful: true
            }
        }
    }
};
