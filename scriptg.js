
let masterSongName=document.getElementById('masterSongName');

let gif=document.getElementById('gif');

let gifi=document.getElementsByClassName('gif');

let myProgressBar=document.getElementById("myProgressBar");

let masterplay=document.getElementById("masterPlay");

let audioElement=new Audio('songs/1.mp3');

let songitems=document.getElementsByClassName("songItem");

let songs = [
    {no:1,songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {no:2,songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {no:3,songName: "DEAF KEV - Invincible [NCS Release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {no:4,songName: "Different Heaven [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {no:5,songName: "Janji-Heroes-Tonight-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {no:6,songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {no:7,songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {no:8,songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {no:9,songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {no:10,songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

var songIndex=0;
Array.from(songitems).forEach((element,i)=>{
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName;
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('number').innerHTML=songs[i].no;
});

Array.from(songitems).forEach((element)=>{
    element.addEventListener('dblclick',(e)=>{
        songIndex=e.target.id;
        songIndex=Number.parseInt(songIndex)
        audioElement.src=`songs/${songIndex+1}.mp3`
        audioElement.play();
        masterSongName.innerHTML=songs[songIndex].songName;
        Array.from(gifi).forEach((element)=>{
            element.style.display="none";
        })
        gifi[songIndex].style.display="block";
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        
    })
});


masterplay.addEventListener('click',()=>{
    if(audioElement.paused){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
        gifi[songIndex].style.display="block";
    }
    else{
        audioElement.pause();
        masterplay.classList.add("fa-play-circle");
        masterplay.classList.remove("fa-pause-circle");
        gif.style.opacity=0;
        Array.from(gifi).forEach((element)=>{
            element.style.display="none";
        })
        gifi[songIndex].style.display="none";
    }
})




audioElement.addEventListener('timeupdate',()=>{
    progress=Number.parseFloat(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('click',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})