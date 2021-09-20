function printError(Id,Msg){
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm(){
    var name = document.form.name.value;
    var email = document.form.email.value;
    var mobile = document.form.mobile.value;
    var country = document.form.country.value;
    var gender = document.form.gender.value;

    var UsernameErr = EmailErr = mobileErr = countryErr = genderErr = true;

    if(name == "")
    {
        printError("UsernameErr","Please Enter Username");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }
    else{
        var regex = /^[a-zA-Z\-]+$/;
        if(regex.test(name)==false)
        {
            printError("UsernameErr","Please Enter Valid Username")
            var elem=document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
        else{
            printError("UsernameErr","");
            UsernameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }


    if(email == "")
    {
        printError("EmailErr","Please Enter Email Address");
        var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }
    else{
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(regex.test(email)==false){
            printError("EmailErr","Please Enter Valid Email")
            var elem=document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
        else{
            printError("EmailErr","");
            EmailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }


    if(mobile == "")
    {
        printError("mobileErr","Please Enter Mobile Number");
        var elem = document.getElementById("mobile");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }
    else{
        var regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/;
        if(regex.test(mobile)==false){
            printError("mobileErr","Please Enter Valid 10 digit Mobile Number")
            var elem=document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
        else{
            printError("mobileErr","");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }

    if(country == "Select")
    {
        printError("countryErr","Please Select Country");
        var elem = document.getElementById("country");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }
    else{
        printError("countryErr","");
        countryErr = false;
        var elem = document.getElementById("country");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");

        
    }


    if(gender == "")
    {
        printError("genderErr","Please select gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }
    else{
        printError("genderErr","");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");

        
    }
if((UsernameErr || EmailErr || mobileErr || countryErr || genderErr)== true){
    return false;
}

};