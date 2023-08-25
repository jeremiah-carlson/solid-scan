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
            name: 'Category1',
            options: ['option1', 'option2', 'option3']
        },
        {
            name: 'Category2',
            options: ['option1', 'option2']
        },
    ],
    input: {
        labels: ['test1', 'test2'],
    },
};

export default conf;
