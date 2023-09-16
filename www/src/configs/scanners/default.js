const conf = {
    debug: true,
    output: {
        origin: "http://localhost:8080/",
        path: 'qrscan',
    },
    delims: {
        settings: '@@',
        mainInput: '-'
    },
    categories: [
        {
            name: 'test1',
            alias: 'Test Category / Numbers',
            options: ['1','2','3', '4','5','6','7', '8', '9','10']
        },
        {
            name: 'test2',
            alias: 'Test Category / Letters',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        },
    ],
    input: {
        labels: ['val1', 'val2'],
        constants: {

        },
    },
};

export default conf;
