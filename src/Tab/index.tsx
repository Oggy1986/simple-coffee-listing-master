interface TabProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

export default function Tab({ label, active, onClick }: TabProps) {
    return (
        <button
            onClick={onClick}
            className={`p-2 font-medium rounded-lg transition-colors duration-200 hover:cursor-pointer  ${
                active ? 'bg-white text-black' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
            }`}
        >
            {label}
        </button>
    );
}
