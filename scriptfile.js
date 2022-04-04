

/*alert("User appName is "+ navigator.appName +
        "\nUser agent is "+ navigator.userAgent);


if (document.getElementById && document.createTextNode){
        alert("DOM supported by " + navigator.appName);
}*/


console.log(`Font Awesome Free 0.2.36 by @fontawesome - https://fontawesome.com
License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
`);

//Required Element
function requiredElement() {
    var email = document.getElementById("email").value;

    if(email == "") {
        alert("Please Enter Your Email Adress");
        document.getElementById("email").style.backgroundColor="red";
        document.getElementById("email").focus();
        return false;
    }
}

//Validate Elaement
function validateEmail(champsText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(champsText.value.match(mailformat)){
        document.form.email.focus();
        document.getElementById("email").style.backgroundColor="#b0bfff";
        return true;
    }
    else{
        alert("Please Enter A Valid Email Adress!");
        document.getElementById("email").style.backgroundColor="red";
        document.getElementById("email").style.borderTopRightRadius="5px";
        document.getElementById("email").style.borderBottomRightRadius="5px";
        document.form.email.focus();
        return false;
    }
}

//Validate Form
function validateForm(){
    if (!requiredElement()){
        return false;
    }
    else{
        return true;
        confirm("Toutes les données sont validées !, Voulez-vous les envoyer au serveur?");
    }
}

