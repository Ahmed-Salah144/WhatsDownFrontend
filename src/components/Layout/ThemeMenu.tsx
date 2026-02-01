import Button from "@/components/FormFields/Button";
import useTheme from "next-theme"

export default function ThemeMenu() {
    const {theme , setTheme} = useTheme();
    return (
        <div className="flex justify-between">
            <div className="light">
                <Button label="Green"type="button" onClick={()=> {setTheme("light")}}></Button>
            </div>
            <div className="blue">
                <Button label="Blue"type="button" onClick={()=> {setTheme("blue")}}></Button>
            </div>
            <div className="red">
                <Button label="Red"type="button" onClick={()=> {setTheme("red")}}></Button>
            </div>
            <div className="dark">
                <Button label="Dark"type="button" onClick={()=> {setTheme("dark")}}></Button>
            </div>
        </div>
    );
}