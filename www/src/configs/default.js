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
            name: 'Country',
            options: ['US', 'CA', 'UK']
        },
        {
            name: 'State',
            options: ['NC', 'CA', 'NB']
        },
    ],
    input: {
        labels: ['fname', 'lname'],
    },
};

export default conf;
