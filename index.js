if (typeof Proxy === 'undefined') {
    console.error('>>>>> "Proxy" is not defined - proxies must be enabled to use the quicklambda module');
    process.exit(1);
}

'use strict';

function handler(proxy, name) {
    return Proxy.createFunction({
        get: function (proxy2, name2) {
            return Proxy.createFunction({
                get: function (proxy3, name3) {
                    return function (obj) {
                        return obj && obj[name] && obj[name][name2] && obj[name][name2][name3];
                    };
                }
            }, function (obj) { return obj && obj[name] && obj[name][name2]; });
        }
    }, function (obj) {
        return obj && obj[name];
    });
}

module.exports = Proxy.create({
    get: handler
});
