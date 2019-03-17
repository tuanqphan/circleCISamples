const { XMLHttpRequest } = require("xmlhttprequest");

function getDataFrom(endpoint) {
    const Http = new XMLHttpRequest();

    Http.open("GET", endpoint, false );
    Http.send();

    if (Http.readyState === 4 && Http.status === 200) {
        console.log(Http.responseText);
        return JSON.parse(Http.responseText);
    }
}

function getLayout(server) {
    return "Layout1";
}

module.exports = {
    getDataFrom: getDataFrom,
    getLayout: getLayout,
}