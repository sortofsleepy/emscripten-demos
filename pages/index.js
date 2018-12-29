import "../src/css/main.scss"
import {getData} from "../src/utils";

export default () =>
    <section id="demos">

        <div id="copy">
            <h1>Cinder Emscripten </h1>
            <h3>These are just a small sampling of what's possible with Cinder and Emscripten</h3>

            <br/>
            <p>More information:</p>

            <ul>
                <li><a href="https://libcinder.org/docs/guides/emscripten/index.html">Emscripten Guide</a></li>
                <li><a href="http://libcinder.org" target="_blanke">Cinder</a></li>
            </ul>
        </div>
        <div id="demo-items">

            {getData().map((itm,idx) => {
                let notes = "";
                if(itm.notes !== ""){
                    notes = `(${itm.notes})`;
                }

                return (
                    <div key={idx} className="demo-item">


                        <a href={itm.path} target="_blank">
                            <img src={itm.thumb}/>
                            <br/>
                            <p>{itm.name}</p>
                        </a>
                        <p>{notes}</p>
                    </div>

                )
            })}
        </div>
    </section>
