export default function IconButton(
    { icon, onClick }: 
    {
        icon: React.ReactNode,
        onClick?: (() => void) | (()=> Promise<void>)
    }
) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="p-1.5 transition-colors text-text duration-200 rounded-lg focus:outline-none hover:text-text/60 hover:bg-secondary" >
            {icon}
        </button>
    );
}
