export default function Button(
    {
        label,
        type = "submit",
        onClick,
    }:
    {
        label: string,
        type?: "submit" | "reset" | "button",
        onClick?:  (()=> Promise<void>) | (() => void)
    }
)
{
    return (
          <button type = {type} onClick={!!onClick? onClick : undefined}
        className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-primary to-secondary/30 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-secondary/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true">
        {label}
    </button>
    )
}