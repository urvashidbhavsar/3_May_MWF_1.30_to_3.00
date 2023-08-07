// ================= click event =========================
function formCheck() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let addr = document.getElementById("addr").value;
    let city = document.getElementById("city").value;
    let mob = document.getElementById("mobileno").value;
    let mail = document.getElementById("mail").value;
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
    } else if (mail == "" || mail == null) {
        document.getElementById("msg7").innerText = "Enter Email Id"
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
function checkEmail() {
    let mail = document.getElementById("mail").value;
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    if (regEx.test(mail)) {
        document.getElementById("msg7").innerText = ""
        return false
    } else {
        document.getElementById("msg7").innerText = "Enter Proper Email"
        return false
    }
}
function checkpass() {
    let pass = document.getElementById("pass").value;
    let passex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/
    if (passex.test(pass)) {
        document.getElementById("msg8").innerHTML = ""
        return false;
    } else {
        document.getElementById("msg8").innerHTML = "password has least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
        return false;
    }
}
function confirmPass() {
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    if (cpass != pass) {
        document.getElementById("msg9").innerHTML = "Password and confirm password does not match";
        return false;
    } else {
        document.getElementById("msg9").innerHTML = "";
        return false;
    }
}

function showPass(show, changeIcon) {
    let icon = document.getElementById(changeIcon)
    let ps = document.getElementById(show)
    if (ps.type == "password" || icon.classList.contains("fa-eye") == true) {
        ps.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
    } else {
        ps.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
    }
}