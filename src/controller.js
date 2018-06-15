export default function createController(view, service) {
    return {
        start: () => {
            view.initialize();
        }
    }
};
