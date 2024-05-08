
function createPopup(id){
    let histpopNode = document.querySelector(id);
    let histOverlay = histpopNode.querySelector(".histOverlay");
    let CancelBtn = histpopNode.querySelector(".CancelBtn");
    let dltBtnPops = histpopNode.querySelector(".dltBtnPops");
    let openConfirm = histpopNode.querySelector(".YesBtn");

    function openPopup(){
        histpopNode.classList.add("active");
        histOverlay.style.display = "block";
        // histOverlay.style.pointerEvents = "auto";
    }

    function closePopup(){
        histpopNode.classList.remove("active");
        histOverlay.style.display = "none";
        // histOverlay.style.pointerEvents = "none";
    }

    histOverlay.addEventListener("click", closePopup);
    CancelBtn.addEventListener("click", closePopup);
    dltBtnPops.addEventListener("click", closePopup);

    if (openConfirm) {
        openConfirm.addEventListener("click", function() {
            closePopup(); 
            openCon(); 
        });
    }

    return openPopup;
}

//Today
let popup1 = createPopup("#histPopup1");
// let popup2 = createPopup("#histPopup2");

// //Yesterday
// let popup3 = createPopup("#histPopup3");
// let popup10 = createPopup("#histPopup10");

// //Earlier
// let popup4 = createPopup("#histPopup4");
// let popup5 = createPopup("#histPopup5");
// let popup6 = createPopup("#histPopup6");
// let popup7 = createPopup("#histPopup7");
// let popup8 = createPopup("#histPopup8");
// let popup9 = createPopup("#histPopup9");

//Today
document.querySelector("#open-popup1").addEventListener("click", popup1);
// document.querySelector("#open-popup2").addEventListener("click", popup2);

// //Yesterday
// document.querySelector("#open-popup3").addEventListener("click", popup3);
// document.querySelector("#open-popup10").addEventListener("click", popup10);

// //Earlier
// document.querySelector("#open-popup4").addEventListener("click", popup4);
// document.querySelector("#open-popup5").addEventListener("click", popup5);
// document.querySelector("#open-popup6").addEventListener("click", popup6);
// document.querySelector("#open-popup7").addEventListener("click", popup7);
// document.querySelector("#open-popup8").addEventListener("click", popup8);
// document.querySelector("#open-popup9").addEventListener("click", popup9);

function createValidate(id){
    let confirmpopNode = document.querySelector(id);
    let confirmOverlay = confirmpopNode.querySelector(".histOverlay");
    let dltBtnPops = confirmpopNode.querySelector(".dltBtnPops");

    function popConfirm(){
        confirmpopNode.classList.add("active");
        confirmOverlay.style.display = "block";
    }

    function closeConfirm(){
        confirmpopNode.classList.remove("active");
        confirmOverlay.style.display = "none";
    }

    confirmOverlay.addEventListener("click", closeConfirm); 
    dltBtnPops.addEventListener("click", closeConfirm);

    return popConfirm;
}

//Today
let popup1s = createValidate("#popUpCon1"); 
// let popup2s = createValidate("#popUpCon2"); 

// //Yesterday
// let popup3s = createValidate("#popUpCon3"); 
// let popup10s = createValidate("#popUpCon10"); 

// //Earlier
// let popup4s = createValidate("#popUpCon4"); 
// let popup5s = createValidate("#popUpCon5"); 
// let popup6s = createValidate("#popUpCon6"); 
// let popup7s = createValidate("#popUpCon7"); 
// let popup8s = createValidate("#popUpCon8"); 
// let popup9s = createValidate("#popUpCon9"); 

//Today
document.querySelector("#popUpConfirm1").addEventListener("click", popup1s);
// document.querySelector("#popUpConfirm2").addEventListener("click", popup2s);

// //Yesterday
// document.querySelector("#popUpConfirm3").addEventListener("click", popup3s);
// document.querySelector("#popUpConfirm10").addEventListener("click", popup10s);

// //Earlier
// document.querySelector("#popUpConfirm4").addEventListener("click", popup4s);
// document.querySelector("#popUpConfirm5").addEventListener("click", popup5s);
// document.querySelector("#popUpConfirm6").addEventListener("click", popup6s);
// document.querySelector("#popUpConfirm7").addEventListener("click", popup7s);
// document.querySelector("#popUpConfirm8").addEventListener("click", popup8s);
// document.querySelector("#popUpConfirm9").addEventListener("click", popup9s);

var countData = 0;
var empty = 0;

const hisShowHide = function(block) {
    let SubJudul1 = document.getElementById('SubJudul1');
    if (block.style.display === 'none') {
        block.style.display = 'block';
    } else {
        block.style.display = 'none';
    }
    countData++;
    empty++;
    if(countData == 2){
        SubJudul1.remove();
        countData = 0;
    }
}

const hisShowHide2 = function(block) {
    let SubJudul1 = document.getElementById('SubJudul2');
    if (block.style.display === 'none'){
        block.style.display = 'block';
    } else {
        block.style.display = 'none';
    }
    countData++;
    empty++;
    if(countData == 2){
        SubJudul2.remove();
        countData = 0;
    }
}

const hisShowHide3 = function(block) {
    let SubJudul1 = document.getElementById('SubJudul3');
    if (block.style.display === 'none'){
        block.style.display = 'block';
    } else {
        block.style.display = 'none';
    }
    countData++;
    empty++;
    if(countData == 6){
        SubJudul3.remove();
        countData = 0;
    }
}