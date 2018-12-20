import "../src/css/main.scss"
import {getData} from "../src/utils";

export default () =>
    <div>
        <h1>Cinder Emscripten </h1>
        {getData().map((itm,idx) => {
            return (
                <div className="demo-item">
                    <a key={idx} href={itm.path}>{itm.name}</a>
                </div>

            )
        })}
    </div>
