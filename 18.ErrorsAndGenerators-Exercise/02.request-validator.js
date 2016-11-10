function validateRequest(obj) {
    const METHODS = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!obj.hasOwnProperty('method') || !METHODS.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!obj.hasOwnProperty('uri') || !/^([A-Za-z0-9.]+)$|^(\*)$/g.test(obj.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    const VERSIONS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (!obj.hasOwnProperty('version') || !VERSIONS.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!obj.hasOwnProperty('message') || !/^[^<>\\&'"]*$/g.test(obj.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return obj;
}

// Example:
console.log(validateRequest({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    })
);