module.exports = function createMethods(makeRequest) {
    return {
        // /v2/events
        attach: function attach() {
            return makeRequest('GET', '/events')();
        }
    };
};
