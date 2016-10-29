function sortTickets(ticketsData, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sort(tickets, criteria) {
            switch (criteria) {
                case 'destination':
                    return tickets.sort((t1, t2) => t1.destination.localeCompare(t2.destination));
                case 'price':
                    return tickets.sort((t1, t2) => t1.price - t2.price);
                default:
                    return tickets.sort((t1, t2) => t1.status.localeCompare(t2.status));
            }
        }
    }

    return Ticket.sort(
        ticketsData
            .map(ticketData => {
                ticketData = ticketData.split(/\|/);
                return new Ticket(ticketData[0], Number(ticketData[1]), ticketData[2]);
            }),
        sortCriteria
    );
}


let res = sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);

console.log(res)