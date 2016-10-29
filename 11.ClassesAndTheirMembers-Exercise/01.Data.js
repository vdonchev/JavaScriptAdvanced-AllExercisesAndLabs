class Data {
    constructor(method, uri, version, message, response = undefined, fulfilled = false) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfilled;
    }
}