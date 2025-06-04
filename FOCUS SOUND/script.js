let distrackNumber = 0;

document.getElementById("phoneBTN").addEventListener("click", function () {
  distrackNumber++;
  document.getElementById("phone").innerHTML = distrackNumber;
  if(distrackNumber % 5 === 0) {alert("pause")}
});

let fireplace = document.getElementById("fireplace");
let somine = document.getElementById("somine");

fireplace.addEventListener("click", function() {
    if (somine.paused) { somine.play();
        fireplace.className = "fa-solid fa-music"
        

    } else {
        somine.pause()
     fireplace.className = "fa-solid fa-fire"
    }
});

let firtina = document.getElementById("firtina");
let thunder = document.getElementById("thunder");

firtina.addEventListener("click", function() {
    if (thunder.paused) {
        thunder.play();
        firtina.className = "fa-solid fa-music"
    }
    else { 
        thunder.pause()
     firtina.className = "fa-solid fa-cloud-bolt"
    }
});

let dalga = document.getElementById("dalga");
let waves = document.getElementById("waves");

dalga.addEventListener("click", function() {
    if (waves.paused) {waves.play() ;
        dalga.className = "fa-solid fa-music"

    }
    else {
waves.pause()
dalga.className = "fa-solid fa-house-tsunami"
    }
});

let ruzgar = document.getElementById("ruzgar");
let wind = document.getElementById("wind");

ruzgar.addEventListener("click", function() {
    if (wind.paused) {wind.play(); 
     ruzgar.className = "fa-solid fa-music"
    }
    else {
        wind.pause()
         ruzgar.className = "fa-solid fa-wind"
    }
})

let dove = document.getElementById("dove");
let bird = document.getElementById("bird");

dove.addEventListener("click", function() {
    if (bird.paused) {bird.play();
        dove.className = "fa-solid fa-music"
    }
    else {
        bird.pause()
        dove.className = "fa-solid fa-dove"
    }
})
let grass = document.getElementById("grass");
let leaf = document.getElementById("leaf");

grass.addEventListener("click", function() {
    if (leaf.paused) {leaf.play();
        grass.className = "fa-solid fa-music"
    }
    else {
        leaf.pause()
        grass.className = "fa-solid fa-leaf"
    }
})


const inputVolume = document.getElementById("input-volume");
inputVolume.addEventListener("input", function() {
    somine.volume = inputVolume.value / 100;
    thunder.volume = inputVolume.value / 100;
    waves.volume = inputVolume.value / 100;
    wind.volume = inputVolume.value / 100;
    bird.volume = inputVolume.value / 100;
    leaf.volume = inputVolume.value / 100;
}
)
