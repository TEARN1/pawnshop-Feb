var Img = document.querySelectorAll("img");

// cover Details Stock Functions buttons
var coverDetailsSoldBtn = document.querySelectorAll("coverDetailsSoldBtn");
var coverDetailsLayBy = document.querySelectorAll("coverDetailsLayBy");
var coverDetailsDamaged = document.querySelectorAll("coverDetailsDamaged");
var coverDetailsDeleted = document.querySelectorAll("coverDetailsDeleted");

// AddItem popup closing function
function closeBtn() {
    document.getElementById("AddItemSectionWall").style.display = "none";
}

// AddItem popup openning function
function AddItem() {
    document.getElementById("AddItemSectionWall").style.display = "block";
}

// Management Codes
function Manager() {


    function ManagerPasswords() {
        var ManagerPasswords = document.getElementById("ManagerPasswords").value;
        
        while (ManagerPasswords) {
            if (ManagerPasswords === " ") {
                document.getElementById("ManagerPasswords").style.border = "red"
            }

            if(ManagerPasswords === "Asemahle"){
                document.getElementById("loginPage").style.display = "none"
            }
        }



    }

    document.getElementById("ManagerPasswords").style.display = "block";
    document.getElementById("AdminPasswords").style.display = "none";
    document.getElementById("StaffPasswords").style.display = "none";


    document.getElementById("MenuStockAtHand").style.display = "none";
    document.getElementById("MenuLayByStock").style.display = "none";
    document.getElementById("MenuDamagedStock").style.display = "none";
    document.getElementById("MenuSoldStock").style.display = "none";
    document.getElementById("MenuDeletedItems").style.display = "none";
}

//  Admin codes
function Admin() {
    document.getElementById("AdminPasswords").style.display = "block";
    document.getElementById("ManagerPasswords").style.display = "none";
    document.getElementById("ManagerPasswords").style.display = "none";

    document.getElementById("MenuTransactions").style.display = "none";
}



// Stuff codes
function Staff() {
    document.getElementById("StaffPasswords").style.display = "block";
    document.getElementById("AdminPasswords").style.display = "none";
    document.getElementById("ManagerPasswords").style.display = "none";

    document.getElementById("MenuDamagedStock").style.display = "none";
    document.getElementById("MenuSoldStock").style.display = "none";
    document.getElementById("MenuDeletedItems").style.display = "none";
}





// customer view onclick to open the software
function CustomerView() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("MenuLayByStock").style.display = "none";
    document.getElementById("MenuDamagedStock").style.display = "none";
    document.getElementById("MenuSoldStock").style.display = "none";
    document.getElementById("MenuDeletedItems").style.display = "none";
    document.getElementById("AddItem").style.display = "none";
    document.getElementById("MenuTransactions").style.display = "none";
}