type Props = {
    addColumn: () => void;
};
const AddColumn = ({ addColumn }: Props) => {
    return (
        <button
            onClick={addColumn}
            className="mb-8 ml-8 px-3 py-2 bg-teal-700 text-slate-100 text-xs rounded-md"
        >Добавить колонку</button>
    );
};

export default AddColumn;
