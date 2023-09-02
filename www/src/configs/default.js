const conf = {
    output: {
        origin: origin,
        path: 'scan/output',
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
            options: ['NC', 'CA', 'NB']
        },
    ],
    input: {
        labels: ['fname', 'lname'],
    },
};

export default conf;
