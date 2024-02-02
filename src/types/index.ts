export interface ITicket {
    id: number;
    title: string;
    description: string;
    status: string;
}

export interface ITickets {
    id: number;
    title: string;
    items: Array<ITicket>;
}

export interface ITicketsStore {
    tickets: Array<ITickets>;
}
