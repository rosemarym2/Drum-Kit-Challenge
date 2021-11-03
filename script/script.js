const aKey = document.getElementById("aKey");
const sKey = document.getElementById("sKey");
const dKey = document.getElementById("dKey");
const fKey = document.getElementById("fKey");
const gKey = document.getElementById("gKey");
const hKey = document.getElementById("hKey");
const jKey = document.getElementById("jKey");
const kKey = document.getElementById("kKey");
const lKey = document.getElementById("lKey");


/*broken code-const keys = [`a`,`s`,`d`,`f`,`g`,`h`,`j`,`k`,`l`];
const drumSounds = [`boom`,`clap`,`hihat`,`kick`,`openhat`,`ride`,`snare`,`tink`,`tom`];

    document.addEventListener(`keydown`, (event) => {
        for (let i=0; i < drumSounds.length; i++) {
        if (keys.includes(event.key)){
            let sounds = drumSounds[keys.indexOf(event.key)];
            document.getElementById(`<p>${drumSounds}</p>`).pause();
            document.getElementById(`<p>${drumSounds}</p>`).currentTime = 0;
            document.getElementById(`<p>${drumSounds}</p>`).play();   
        }
    }
    });*/


aKey.addEventListener("click", () => {
    document.getElementById("boom").pause();
    document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();
})
sKey.addEventListener("click", () => {
    document.getElementById("clap").pause();
    document.getElementById("clap").currentTime = 0;
    document.getElementById("clap").play();
})
dKey.addEventListener("click", () => {
    document.getElementById("hihat").pause();
    document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
})
fKey.addEventListener("click", () => {
    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
})
gKey.addEventListener("click", () => {
    document.getElementById("openhat").pause();
    document.getElementById("openhat").currentTime = 0;
    document.getElementById("openhat").play();
})
hKey.addEventListener("click", () => {
    document.getElementById("ride").pause();
    document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
})
jKey.addEventListener("click", () => {
    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
})
kKey.addEventListener("click", () => {
    document.getElementById("tink").pause();
    document.getElementById("tink").currentTime = 0;
    document.getElementById("tink").play();
})
lKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
})
document.addEventListener("keydown", (event) => {
    if (event.key == "a") {
        document.getElementById("boom").pause();
        document.getElementById("boom").currentTime = 0;
        document.getElementById("boom").play();
    } else if (event.key == "s") {
        document.getElementById("clap").pause();
        document.getElementById("clap").currentTime = 0;
        document.getElementById("clap").play();
    } else if (event.key == "d") {
        document.getElementById("hihat").pause();
        document.getElementById("hihat").currentTime = 0;
        document.getElementById("hihat").play();
    } else if (event.key == "f") {
        document.getElementById("kick").pause();
        document.getElementById("kick").currentTime = 0;
        document.getElementById("kick").play();
    } else if (event.key == "g") {
        document.getElementById("openhat").pause();
        document.getElementById("openhat").currentTime = 0;
        document.getElementById("openhat").play();
    } else if (event.key == "h") {
        document.getElementById("ride").pause();
        document.getElementById("ride").currentTime = 0;
        document.getElementById("ride").play();
    }else if (event.key == "j") {
        document.getElementById("snare").pause();
        document.getElementById("snare").currentTime = 0;
        document.getElementById("snare").play();
    }else if (event.key == "k") {
        document.getElementById("tink").pause();
        document.getElementById("tink").currentTime = 0;
        document.getElementById("tink").play();
    }else if (event.key == "l") {
        document.getElementById("tom").pause();
        document.getElementById("tom").currentTime = 0;
        document.getElementById("tom").play();
    }
}); 

/*const findp =(key)

document.addEventListener ("keydown", (event)=>{
    let p = findp(event.key);
    if (p) p.classList.add("highlight");
});*/