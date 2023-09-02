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
            name: 'Test1',
            options: ['1','2','3', '4','5','6','7', '8', '9','10']
        },
        {
            name: 'Test2',
            options: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        },
    ],
    input: {
        labels: ['val1', 'val2'],
    },
};

export default conf;
