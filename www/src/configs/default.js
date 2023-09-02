const conf = {
    output: {
        origin: origin,
        path: 'scan/output/',
    },
    delims: {
        settings: '@@',
        mainInput: '-'
    },
    categories: [
        {
            name: 'test1',
            options: ['1','2','3', '4','5','6','7', '8', '9','10']
        },
        {
            name: 'test2',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        },
    ],
    input: {
        labels: ['val1', 'val2'],
        constants: {

        },
    },
};

export default conf;
