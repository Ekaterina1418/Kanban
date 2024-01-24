type ColumnProps = {
    title: string;
    children?: React.ReactNode;
};


function KanbanColumn( props: ColumnProps) {
    return (
        <>
            <div className="flex bg-gray-100 min-w-60 p-4 flex-col gap-4">
                <h2 className="text-gray-500 p-2 bg-white text-sm font-bold">
                    {props.title}
                </h2>
                {props.children}
            </div>
        </>
    );
}

export default KanbanColumn;
