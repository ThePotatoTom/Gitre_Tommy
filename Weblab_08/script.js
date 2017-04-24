function validate() {
    var x = document.forms.input.username.value;
    var atPos = x.indexOf("@")
    var dotPos = x.lastIndexOf(".")
    var y = document.forms.input.password.value;
    var passcode = y;


    //we need.... username@webAddress.extension
    //if, then the following...
        //@ is not in the string
        //@ is in the wrong place
        //there is no .com, .gov, or any other extension
        //final dot is in the right place

    if (atPos < 1 || dotPos < atPos+2 || dotPos + 2 > x.length)
        alert("this is not a valid email address.");
    if (passcode.length < 6)
        alert("your password needs to be 6 characters long");
    else
        alert("success")
}



