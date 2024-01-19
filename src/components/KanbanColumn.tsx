function KanbanColumn({title}:{title:string}) {
    return (
        <div className="flex bg-gray-200 min-w-60 p-4">
            <h2 className="text-gray-500 p-2 bg-white text-sm font-bold ">{title} </h2>
        </div>
    );
}

export default KanbanColumn;
