type AddTicketProps = {
    addTicket:()=> void
}

const Button = ({ addTicket }: AddTicketProps) => {
    return (
        <>
            <button
                onClick={addTicket}
                className="mb-8 px-3 py-2 bg-gray-500 text-slate-100 text-xs rounded-md"
            >
                Добавить задачу
            </button>
        </>
    );
}
export default Button 