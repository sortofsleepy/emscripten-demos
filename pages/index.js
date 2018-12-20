import "../src/css/main.scss"
import {getData} from "../src/utils";

export default () =>
    <section id="demos">

        <h1>Cinder Emscripten </h1>

        <div id="demo-items">

            {getData().map((itm,idx) => {
                let notes = "";
                console.log(itm.notes)
                if(itm.notes !== ""){
                    notes = `(${itm.notes})`;
                }

                return (
                    <div key={idx} className="demo-item">


                        <a href={itm.path} target="_blank">
                            <img src={itm.thumb}/>
                            <br/>
                            <p>{itm.name} {notes}</p>

                        </a>
                    </div>

                )
            })}
        </div>
    </section>
