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
            name: 'city',
            options: ['Austin','Atlanta','Tennessee', 'Chicago','Baltimore','New Orleans','Boulder']
        },
        {
            name: 'artist',
            options: ['Lightning Hopkins', 'SRV', 'Eric Clapton', 'Muddy Waters', 'Lemon Jefferson', 'Buddy Guy', 'John Hurt']
        },
        {
            name: 'ticket',
            options: ['General','Backstage','VIP', 'Staff']
        },
        {
            name: 'night',
            options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
    ],
    input: {
        labels: ['ticketNo', 'section', 'seat'],
        constants: {
            'company': 'Ticket CO.',
        },
    },
};

export default conf;
