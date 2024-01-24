function TicketStatus({ status }: { status: string }) {
    let color, bgColor;
    if (status === "Низкий") {
        color = "text-green-600";
        bgColor = " bg-green-300";
    }
    if (status === "Средний") {
        color = "text-yellow-600";
        bgColor = " bg-yellow-300";
    }
    if (status === "Высокий") {
        color = "text-red-600";
        bgColor = " bg-red-300";
    }
    return (
        <div className={`px-2 max-w-fit rounded-md ${bgColor}`}>
            <p className={`font-bold text-xs ${color}`}>{status}</p>
        </div>
    );
}

export default TicketStatus;
