// ================= click event =========================
function formCheck() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let addr = document.getElementById("addr").value;
    let city = document.getElementById("city").value;
    let mob = document.getElementById("mobileno").value;
    if (fname == "" || fname == null) {
        document.getElementById("msg1").innerText = "Enter Firstname";
        return false;
    } else if (lname == "" || lname == null) {
        document.getElementById("msg2").innerText = "Enter Lastname";
        return false
    } else if (male == false && female == false) {
        document.getElementById("msg3").innerText = "Select Gender"
        return false;
    } else if (addr == "" || addr == null) {
        document.getElementById("msg4").innerText = "Enter Address";
        return false;
    } else if (city == "-1") {
        document.getElementById("msg5").innerText = "Select city"
        return false
    } else if (mob == "" || mob == null) {
        document.getElementById("msg6").innerText = "Enter Mobile No"
        return false
    }
}

// ================ blur event ==================
// parameterized function
function blankCheck(blnk, msg) {
    if (blnk.value == "" || blnk.value == null) {
        document.getElementById(msg).innerText = "Enter value!!!"
        return false;
    }
}
function SelectChecked(selcheck, msg) {
    if (selcheck.checked == false) {
        document.getElementById(msg).innerText = "Select value!!!"
        return false;
    } else {
        document.getElementById(msg).innerText = ""
        return false;
    }
}
function selectop(selOp, msg) {
    if (selOp.value == "-1") {
        document.getElementById(msg).innerText = "Select value!!!"
        return false;
    } else {
        document.getElementById(msg).innerText = ""
        return false;
    }
}

// =================== keyboard event ================
// name validation
function nameValid(namechk, msg) {
    let regEx = /^[a-zA-Z]*$/;
    if (!(regEx.test(namechk.value)) || (namechk.value.length < 2)) {
        document.getElementById(msg).innerText = "Invalid name!"
        return false;
    } else {
        document.getElementById(msg).innerText = ""
        return false;
    }
}
function addressCheck(addrlen, msg) {
    if (addrlen.value.length < 30) {
        document.getElementById(msg).innerText = "Address has minimum 30 characters";
        return false
    } else {
        document.getElementById(msg).innerText = "";
        return false
    }
}
function mobileCheck(mob, msg) {
    let regex = /^[0-9]*$/;
    let start = /^[6-9]/
    if (!(regex.test(mob.value)) || !(start.test(mob.value))) {
        document.getElementById(msg).innerText = "Invalid Number"
        return false
    } else if (mob.value.length < 10) {
        document.getElementById(msg).innerText = "Enter Proper Number"
        return false
    } else {
        document.getElementById(msg).innerText = ""
        return false
    }
}