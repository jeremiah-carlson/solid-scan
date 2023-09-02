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
            name: 'City',
            options: ['Austin','Atlanta','Tennessee', 'Chicago','Baltimore','New Orleans','Boulder']
        },
        {
            name: 'Artist',
            options: ['Lightning Hopkins', 'SRV', 'Eric Clapton', 'Muddy Waters', 'Lemon Jefferson', 'Buddy Guy', 'John Hurt']
        },
        {
            name: 'Ticket',
            options: ['General','Backstage','VIP', 'Staff']
        },
        {
            name: 'Night',
            options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
    ],
    input: {
        labels: ['ticketNo', 'section', 'seat'],
    },
};

export default conf;
