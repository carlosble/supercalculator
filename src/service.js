export default function createService(client) {
    const self = {
        onClientError: () => {},
        calculate,
    };

    function calculate (operation) {
            let numbers = operation.split('+');
            let resultValue = Number(numbers[0]) + Number(numbers[1]);
            let operationResult = {
                value: resultValue,
                isSuccessful: true
            };
            client.save(operationResult)
                .catch(() => {
                    return client.save(operationResult);
                })
                .catch(() => {
                    return client.save(operationResult);
                })
                .catch(() => {
                    self.onClientError();
                });
            return operationResult;
    }
    return self;
};
