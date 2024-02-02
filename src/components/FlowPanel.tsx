import CreateTicket from './CreateTicket';

type Props = {
    closePanel: () => void;
};

const FlowPanel = ({ closePanel }: Props) => {
    return (
        <>
            <div className="top-0 right-0 w-[25vw] bg-blue-600  p-10   text-white fixed h-full z-40">
                <button
                    className={`flex text-[30px] text-white items-center cursor-pointer fixed right-[30px] top-3  z-40 ease-in-out duration-300
                           
                    }`}
                    onClick={() => closePanel()}
                >
                    x
                </button>

                <CreateTicket /> 
            </div>
        </>
    );
};

export default FlowPanel;
