function validateprocess() {
    if(document.validate.fullname.value == "")
    {
        alert("please provide your name!");
        document.validate.fullname.focus();
        return false;
    }
    return( true );
 }