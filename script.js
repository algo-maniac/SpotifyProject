console.log('Hello');
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let gif = document.getElementById('gif');
let playbar = document.getElementById('playbar');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let playicons = document.getElementsByClassName('playicons');
let array = Array.from(playicons);

//Songs array containing names and paths

let songs = [
    { Name: "It's Always Blue", songpath: "/songs/1.mp3" },
    { Name: "Trap", songpath: "/songs/2.mp3" },
    { Name: "They Mad", songpath: "/songs/3.mp3" },
    { Name: "Plug Walk", songpath: "/songs/4.mp3" },
    { Name: "Heroes Tonight", songpath: "/songs/5.mp3" },
    { Name: "Heroes Tonight(Instrumental)", songpath: "/songs/6.mp3" },
    { Name: "Back It Up", songpath: "/songs/7.mp3" },

];


// Events to play the song at the seakbar  


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


//Calculating and Creating the progress of the seakbar

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
    playbar.value = progress;
})

playbar.addEventListener('change', () => {
    audioElement.currentTime = playbar.value * audioElement.duration / 100;
})



//Initialize all the pause buttons with play buttons

let songIndex = 0;
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playicons')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


//Playing each song from the song list 


array.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        let SongName = document.getElementById('SongName');
        SongName.innerText = songs[songIndex - 1].Name;
    })

})


// Creating next and previous songs from the list


previous.addEventListener('click', (e) => {
    if (songIndex == 1) {
        songIndex = 7;
    }
    else {
        songIndex--;
    }
    makeAllPlays();
    let element = array[songIndex - 1];
    element.classList.remove('fa-play-circle');
    element.classList.add('fa-pause-circle');
    // e.target.classList.remove('fa-play-circle');
    // e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    let SongName = document.getElementById('SongName');
    SongName.innerText = songs[songIndex - 1].Name;

})

next.addEventListener('click', (e) => {
    if (songIndex == 7) {
        songIndex = 1;
    }
    else {
        songIndex++;
    }
    makeAllPlays();
    let element = array[songIndex - 1];
    element.classList.remove('fa-play-circle');
    element.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    let SongName = document.getElementById('SongName');
    SongName.innerText = songs[songIndex - 1].Name;

})