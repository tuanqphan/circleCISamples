const { getDataFrom, getLayout } = require('./someLibraries');

test('Get json from server.', getJsonTest);
test('Get Layout from server', getLayoutTest);

function getJsonTest() {
    url = 'https://twqb2oref8.execute-api.us-west-1.amazonaws.com/staging/fetchcontent';
    console.log("---------------" + JSON.stringify(getDataFrom(url);
    expect(getDataFrom(url)).toHaveProperty("contents");
}

function getLayoutTest() {
    expect(getLayout("server")).toEqual(
        expect.stringContaining("Layout")
    );
}
