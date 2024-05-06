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

let popup1 = createPopup("#histPopup1");
let popup2 = createPopup("#histPopup2");

document.querySelector("#open-popup1").addEventListener("click", popup1);
document.querySelector("#open-popup2").addEventListener("click", popup2);

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

let popup1s = createValidate("#popUpCon1"); 
document.querySelector("#popUpConfirm1").addEventListener("click", popup1s);

let popup2s = createValidate("#popUpCon2"); 
document.querySelector("#popUpConfirm2").addEventListener("click", popup2s);