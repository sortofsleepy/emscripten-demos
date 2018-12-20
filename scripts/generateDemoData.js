const fs = require("fs");
const path = require("path")

let demos = fs.readdirSync(path.resolve("static/demos"));

let demoData = demos.map(demo => {


    // convert folder names to proper titles using the "-" as the
    // split section.
    let splitName = demo.split("-");

    let finalName = splitName.map(word => {
        word = word.split("");
        word[0] = word[0].toUpperCase();

        word = word.join("");

        return word;
    })

    finalName = finalName.join(" ");

    let notes = "";
    if(fs.existsSync(`static/demos/${demo}/notes.json`)) {
        notes = JSON.parse(fs.readFileSync(`static/demos/${demo}/notes.json`, "utf8")).notes;
    }

    return {
        name:finalName,
        path:`/static/demos/${demo}/index.html`,
        thumb:`/static/demos/${demo}/thumb.jpg`,
        notes:notes

    };
});

fs.writeFile("./src/data.js",`export default ${JSON.stringify(demoData)}`,(err) => {
    if(err){
        throw err;
    }
});