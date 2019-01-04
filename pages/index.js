import "../src/css/main.scss"
import {getData} from "../src/utils";

export default () =>
    <section id="demos">

        <div id="copy">
            <h1>Cinder Emscripten </h1>
            <h3>These are just a small sampling of what's possible with Cinder and Emscripten</h3>
            <p>Note that some samples may currently require some minor modifications in order to run. PRs to support
                Emscripten are welcome. 
            </p>

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
                let source = "";

                if(itm.meta !== undefined){
                    notes = itm.meta.notes !== undefined ? `(${itm.meta.notes})` : "";
                    source = itm.meta.source !== undefined ? (<a class="sourceLink" href={itm.meta.source} target="_blank">Source</a>) : ""
                }

                return (
                    <div key={idx} className="demo-item">


                        <a href={itm.path} target="_blank">
                            <img src={itm.thumb}/>
                            </a>
                            <br/>
                            <p class="demo-title">{itm.name} - {source}</p>
                        
                        <p>{notes}</p>
                    </div>

                )
            })}
        </div>
    </section>
