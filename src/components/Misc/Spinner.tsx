export default function Spinner()
{
    return(
    <div>
        <div className="flex h-screen justify-center items-center">
            <div className="w-16 h-16 border-4 border-primary border-double rounded-full animate-spin border-t-transparent"/>
        </div>
    </div>
    )
}