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
            name: 'Test1__0',
            options: ['1','2','3', '4','5','6','7', '8', '9','10']
        },
        {
            name: 'Test2__0',
            options: ['NC', 'CA', 'NB']
        },
    ],
    input: {
        labels: ['fname', 'lname'],
    },
};

export default conf;
