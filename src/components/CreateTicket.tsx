import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTicket } from "../store/tickets/tickets.slice";
import { v4 as uuidv4 } from "uuid";

const CreateTicket = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");
    const [urgency, setUrgency] = useState("");

    const dispatch = useDispatch();

    const createTicket = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const ticket = {
            id: uuidv4(),
            title: title,
            description: desc,
            date: date,
            status: urgency,
        };

        dispatch(addTicket(ticket)); 
        setTitle('')
        setDate('')
        setDesc('')
        setUrgency('')

    };

    return (
        <form onSubmit={createTicket} className="flex flex-col mt-10 gap-2">
            <label htmlFor="title">Заголовок</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-md w-full py-1 px-2
               text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 max-w-xs"
                type="text"
                name="title"
            />
            <label htmlFor="date">Дата</label>
            <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                name="title"
                className="appearance-none border-2 border-gray-200 rounded-md w-full py-1 px-2
               text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 max-w-xs"
            />
            <label htmlFor="desc">Описание</label>
            <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                type="text"
                name="desc"
                className="appearance-none border-2 border-gray-200 rounded-md w-full py-1 px-2
               text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 max-w-xs"
            />
            {/* <label htmlFor="status">Статус готовности</label>
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                name="selectStaus"
                id="status"
                className="appearance-none border-2 border-gray-200 rounded-md w-full py-1 px-2 mb-8
               text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 max-w-xs"
            >
                <option value="">Выберите статус готовности</option>
                <option value="В работе">В работе</option>
                <option value="Новые">Новые</option>

                <option value="Готово">Готово</option>
            </select> */}
            <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                name="selectUrgency"
                id="urgency"
                className="appearance-none border-2 border-gray-200 rounded-md w-full py-1 px-2 mb-8
               text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 max-w-xs"
            >
                <option value="">Срочность</option>
                <option value="Низкий">Низкий</option>
                <option value="Средний">Средний</option>
                <option value="Высокий">Высокий</option>
            </select>
            <button
                type="submit"
                className="border-solid border-2 border-white-500 text-xs rounded-lg px-8 py-2 max-w-fit m-auto"
            >
                Новая задача
            </button>
        </form>
    );
};

export default CreateTicket;
