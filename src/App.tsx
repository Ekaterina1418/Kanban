import "./App.css";
import { DndProvider } from "react-dnd";
import KanbanColumn from "./components/KanbanColumn";
import KanbanTicket from "./components/KanbanTicket";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import TicketStatus from "./components/TicketStatus";
import Button from "./components/Button";
import FlowPanel from "./components/FlowPanel";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";
import AddColumn from "./components/AddColumn";
import NewColumn from "./components/NewColumn";



function App() {
    const [isShown, setIsShown] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const tickets = useSelector((state: RootState) => state.tickets.tickets);

   
    
    const addTicket = () => {
        setIsShown(true);
    };

    const addColumn = () => {
        setPopUp(true)
  } 


    return (
        <div className="max-w-screen-xl p-8">
            <Button addTicket={() => addTicket()} />
            <AddColumn addColumn={addColumn} />
            {popUp && <NewColumn  />}
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
                {isShown && (
                    <FlowPanel closePanel={() => setIsShown(!isShown)} />
                )}
            </div>
        </div>
    );
}

export default App;
