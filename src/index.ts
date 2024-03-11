import TrackMixer from "./scripts/TrackMixer";

const bassURL = require("url:./audios/bass.mp3");
const drumsURL = require("url:./audios/drums.mp3");
const musicURL = require("url:./audios/music.mp3");


window.addEventListener("click", main);
let tracksLoaded = false;


async function main() {
    if (tracksLoaded) return;
    tracksLoaded = true;

    console.log("Loading tracks...");
    const trackMixer = new TrackMixer();

    await trackMixer.loadTrack("drums", bassURL);
    await trackMixer.loadTrack("bass", drumsURL);
    await trackMixer.loadTrack("music", musicURL);

    trackMixer.setVolume("drums", 0);
    trackMixer.setVolume("bass", 0);
    trackMixer.setVolume("music", 0);

    trackMixer.playTrack("drums");
    trackMixer.playTrack("bass");
    trackMixer.playTrack("music");

    document.querySelector("#drums")?.addEventListener("input", (event) => {
        const value = +(event.target as HTMLInputElement).value - 100;
        console.log(value);
        trackMixer.setVolume("drums", value);
    });

    document.querySelector("#bass")?.addEventListener("input", (event) => {
        const value = +(event.target as HTMLInputElement).value - 100;
        console.log(value);
        trackMixer.setVolume("bass", value);
    });

    document.querySelector("#music")?.addEventListener("input", (event) => {
        const value = +(event.target as HTMLInputElement).value - 100;
        console.log(value);
        trackMixer.setVolume("music", value);
    });
}


//      <input type="range" min="1" max="100" value="50" class="slider" id="bass">
//      <input type="range" min="1" max="100" value="50" class="slider" id="drums">
//      <input type="range" min="1" max="100" value="50" class="slider" id="music">