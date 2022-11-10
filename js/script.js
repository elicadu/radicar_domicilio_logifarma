const vist1 = document.getElementById("vist1");
const vist2 = document.getElementById("vist2");
const vist3 = document.getElementById("vist3");
const vist4 = document.getElementById("vist4");
const vist5 = document.getElementById("vist5");
const vist6 = document.getElementById("vist6");
const vist7 = document.getElementById("vist7");
const vist8 = document.getElementById("vist8");
const vist9 = document.getElementById("vist9");
const vist10 = document.getElementById("vist10");


document.getElementById("btn_vist1").addEventListener("click", camb);
function camb() {
    vist1.style.display = "none";
    vist2.style.display = "block";
};
document.getElementById("btn_vist2").addEventListener("click", camb2);
function camb2() {
    vist2.style.display = "none";
    vist3.style.display = "block";
};
document.getElementById("btn_vist3").addEventListener("click", camb3);
function camb3() {
    vist3.style.display = "none";
    vist4.style.display = "block";
};
document.getElementById("btn_vist4").addEventListener("click", camb4);
function camb4() {
    vist4.style.display = "none";
    vist5.style.display = "block";
};
document.getElementById("btn_vist5").addEventListener("click", camb5);
function camb5() {
    vist5.style.display = "none";
    vist6.style.display = "block";
};
document.getElementById("btn_vist6").addEventListener("click", camb6);
function camb6() {
    vist6.style.display = "none";
    vist7.style.display = "block";
};
document.getElementById("btn_vist7").addEventListener("click", camb7);
function camb7() {
    vist7.style.display = "none";
    vist8.style.display = "block";
};
document.getElementById("btn_vist8").addEventListener("click", camb8);
function camb8() {
    vist8.style.display = "none";
    vist9.style.display = "block";
};
document.getElementById("btn_vist9").addEventListener("click", camb9);
function camb9() {
    vist9.style.display = "none";
    vist10.style.display = "block";
};



document.getElementById("btn_2").addEventListener("click", cam);
function cam() {
    vist2.style.display = "none";
    vist1.style.display = "block";
};
document.getElementById("btn_3").addEventListener("click", cam2);
function cam2() {
    vist3.style.display = "none";
    vist2.style.display = "block";
};
document.getElementById("btn_4").addEventListener("click", cam3);
function cam3() {
    vist4.style.display = "none";
    vist3.style.display = "block";
};
document.getElementById("btn_5").addEventListener("click", cam4);
function cam4() {
    vist5.style.display = "none";
    vist4.style.display = "block";
};
document.getElementById("btn_6").addEventListener("click", cam5);
function cam5() {
    vist6.style.display = "none";
    vist5.style.display = "block";
};
document.getElementById("btn_7").addEventListener("click", cam6);
function cam6() {
    vist7.style.display = "none";
    vist6.style.display = "block";
};
document.getElementById("btn_8").addEventListener("click", cam7);
function cam7() {
    vist8.style.display = "none";
    vist7.style.display = "block";
};
document.getElementById("btn_9").addEventListener("click", cam8);
function cam8() {
    vist9.style.display = "none";
    vist8.style.display = "block";
};
document.getElementById("btn_10").addEventListener("click", cam9);
function cam9() {
    vist10.style.display = "none";
    vist9.style.display = "block";
};



var localstream, canvas, video, cxt;

function turnOnCamera() {
    canvas = document.getElementById("canvas");
    cxt = canvas.getContext("2d");
    video = document.getElementById("video");

    if(!navigator.getUserMedia)
        navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || 
    navigator.msGetUserMedia;
    if(!window.URL)
        window.URL = window.webkitURL;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({"video" : true, "audio": false
        }, function(stream) {
            try {
                localstream = stream;
                video.srcObject = stream;
                video.play();
            } catch (error) {
                video.srcObject = null;
            }
        }, function(err){
            swal("Error", err, "error");
        });
    } else {
        swal("Mensaje", "User Media No Disponible" , "error");
        return;
    }
}

function turnOffCamera() {
    video.pause();
    video.srcObject = null;
    localstream.getTracks()[0].stop();
}

$("#radiotfoto").click(function() {
    $("#subirfoto").addClass("none");
    $("#video").removeClass("none");
    turnOnCamera();
    document.getElementById("subirfoto").value = null;
});

$("#radiosfoto").click(function() {
    $("#subirfoto").removeClass("none");
    $("#video").addClass("none");
    turnOffCamera();
});





