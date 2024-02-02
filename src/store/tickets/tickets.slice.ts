import { createSlice } from "@reduxjs/toolkit";
import { ITicketsStore } from "../../types";

const initialState: ITicketsStore = {
    tickets: [
        {
            id: 1,
            title: "В работе",
            items: [
                {
                    id: 1,
                    title: "Исправить баг",
                    description: "Более подробно...",
                    status: "Высокий",
                },
            ],
        },
        {
            id: 2,
            title: "Новые",
            items: [
                {
                    id: 14,
                    title: "Добавить файл",
                    description: "Более подробно...",
                    status: "Низкий",
                },
            ],
        },
        {
            id: 3,
            title: "Готово",
            items: [
                {
                    id: 19,
                    title: "Сделать коммит",
                    description: "Более подробно...",
                    status: "Средний",
                },
            ],
        },
    ],
};

const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
     
    reducers: {
        addTicket: (state,actions) => {
            state.tickets.map(i => {
                if (i.id === 2) {
                    
                    i.items.push(actions.payload)
                }
           })
        }
    }
});

export const { addTicket } = ticketsSlice.actions
export default ticketsSlice.reducer