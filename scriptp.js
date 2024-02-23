//everthing defined here
//targeting play button 
let masterplay=document.getElementById("masterPlay");
//targeting previous button
let previous=document.getElementById("previous");
//targeting play button
let next=document.getElementById("next");
//targeting progress bar
let myprogressbar=document.getElementById("myProgressBar");
//taking audio element
let audioElement= new Audio('songs/1.mp3');

let masterSongName=document.getElementById('masterSongName');
//array for songitems to add info of songs
let songitem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

//songs indivisual info
songitem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByTagName('span')[0].innerHTML=songs[i].songName;
});


//functon for play all pause button
function pauseall(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

const seekbar=()=>{audioElement.addEventListener('timeupdate',(e)=>{
    progress=parseFloat((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    myprogressbar.value=progress;
})}
seekbar();

const change_seekbar=()=>myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
change_seekbar();



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //taking index for target songpath
        let songindex=parseInt(e.target.id);
        //targeting songpath in audioelement
        audioElement.src=`songs/${songindex +1}.mp3`;
        //taking condition for fix some bug like if we pause song by indivisual button then it won't stop
        if(audioElement.played && document.getElementById('masterSongName').innerHTML==songs[e.target.id].songName){
            audioElement.pause();
            pauseall();
            masterplay.classList.add('fa-play-circle');
            masterplay.classList.remove('fa-pause-circle');
            document.getElementById('masterSongName').innerHTML=songs[e.target.id].songName+" ";
        }else{
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            pauseall();
            e.target.classList.add('fa-pause-circle');
            e.target.classList.remove('fa-play-circle');
            document.getElementById('masterSongName').innerHTML=songs[e.target.id].songName;
            seekbar();
            change_seekbar()
        }
    })
})




//main play button play and pause
masterplay.addEventListener('click',()=>{

    //play
    if(audioElement.paused){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    //pause
    else{
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        pauseall();
        
        }
    }
)



