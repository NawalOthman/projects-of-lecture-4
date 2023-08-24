// alert("JS from out file")
// document.getElementById("a").click()

function changeLink()
{
    var a = document.getElementById("aaa");
    // console.log(a);
    a.setAttribute("href", "www.facebook.com");
}

function Play(note)
{
    var audio=new Audio("./notes/note"+note+".wav")
    audio.play();
}

// function Play(note){
//     var audio;
//     if(note=="do"){
//     audio = new Audio("./notes/note1.wav");
//     audio.play();}
//     else if(note=="re")
//     {
//         audio = new Audio("./notes/note2.wav");
//         audio.play();
//     }
//     else if(note=="mi")
//     {
//         audio = new Audio("./notes/note3.wav");
//         audio.play();
//     }
//     else if(note=="fa")
//     {
//         audio = new Audio("./notes/note4.wav");
//         audio.play();
//     }
//     else if(note=="se")
//     {
//         audio = new Audio("./notes/note5.wav");
//         audio.play();
//     }
//     else if(note=="la")
//     {
//         audio = new Audio("./notes/note6.wav");
//         audio.play();
//     }
//     else if(note=="si")
//     {
//         audio = new Audio("./notes/note7.wav");
//         audio.play();
//     }
//     else
//     alert("Errore enter")

    
//     audio.play()
// }