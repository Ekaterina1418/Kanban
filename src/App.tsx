import "./App.css";
import { DndProvider } from "react-dnd";
import KanbanColumn from "./components/KanbanColumn";
import KanbanTicket from "./components/KanbanTicket";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import TicketStatus from "./components/TicketStatus";
import Button from "./components/Button";
import FlowPanel from "./components/FlowPanel";

function App() {
    const [isShown, setIsShown] = useState(false);

    const [tickets, setTickets] = useState([
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
    ]);


   
    const addTicket = () => {
        console.log('123');
        
        setIsShown(!isShown);
    };

    return (
        <div className="max-w-screen-xl p-8">
           <Button addTicket={() => addTicket()} />
            <div className="flex  flex-wrap gap-6">
                <DndProvider backend={HTML5Backend}>
                    {tickets &&
                        tickets.map((col) => {
                            return (
                                <KanbanColumn key={col.id} title={col.title}>
                                    {col.items.map((ticket) => {
                                        return (
                                            <KanbanTicket
                                                key={ticket.id}
                                                title={ticket.title}
                                                description={ticket.description}
                                            >
                                                <TicketStatus
                                                    status={ticket.status}
                                                />
                                            </KanbanTicket>
                                        );
                                    })}
                                </KanbanColumn>
                            );
                        })}
                </DndProvider>
                {isShown && <FlowPanel />}
            </div>
        </div>
    );
}

export default App;
