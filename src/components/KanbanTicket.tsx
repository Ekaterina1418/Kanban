import { useDrag } from "react-dnd";

type TicketProps = {
  title: string;
  description: string;
  children: React.ReactNode;
}
function KanbanTicket(props:TicketProps) {
  const [{ isDrag }, dragRef] = useDrag({
    type: "ticket",
    item: props,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });



  
  return (
  <>
    {!isDrag &&  (
    <section className="flex flex-col p-4 bg-white rounded-md" ref={dragRef}>
          <h2 className="text-gray-900 text-sm font-bold mb-1">{props.title}</h2>
          <p className="text-gray-500 text-xs mb-4">{props.description}</p>
         {props.children}
      </section>
  )}
     </> 
  );
}

export default KanbanTicket