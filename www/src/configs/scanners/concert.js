const conf = {
    debug: false,
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
            name: 'city',
            options: ['Austin','Atlanta','Tennessee', 'Chicago','Baltimore','New Orleans','Boulder', 'NYC']
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
            queueId: 'concert',
            company: 'Ticket CO.',
        },
    },
};

export default conf;
