import { langs } from "../../lang/langs";
import "./InitialScreen.css";

const InitialScreen = () => {
    const lang = localStorage["lang"];
    console.log(lang)

    const { 
        initialScreenText, 
        initialScreenHelperText ,
        initialScreenButtonText
    } = langs[lang];

    return (
        <main className="initial-screen">
            <h1>{initialScreenText}</h1>
            <h2>{initialScreenHelperText}</h2>
            <div className="buttons">
                <button>{initialScreenButtonText}</button>
            </div>
        </main>
    )
}

export { InitialScreen }