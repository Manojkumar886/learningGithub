let Active=()=>
{
    let a=document.forms['irctc'].fno.value;
    let b=document.forms['irctc'].pin1.value;
    let c=document.forms['irctc'].Svalue.value;
    let d=document.forms['irctc'].email1.value;
    

    let acting=true;

    if(d.length<=0)
    {
        document.getElementById("edetails").innerHTML="emailid Should'nt empty";
        acting=false;
    }
    else if(!((/^(?=.*[0-9])(?=.+[@.])[A-za-z0-9@.]+$/).test(d)))
    {   
        document.getElementById("edetails").innerHTML="emailid used by @ . charcter";
        acting=false;
    }
    
    if(c.length<=0)
    {
        document.getElementById("sdetails").innerHTML="StreetName Should'nt empty";
        acting=false;
    }
    else if(!((/^[A-Za-z]+$/).test(c)))
    {
        document.getElementById("sdetails").innerHTML="StreetName should't any numbers"
        acting=false;
    }
    if(a.length<=0)
    {
        document.getElementById("Fdetails").innerHTML="Flat/Door/BlockNO should't empty"
        acting=false;
    }
    if(b.length<=0)
    {
        document.getElementById("pin").innerHTML="Pincode should't empty"
        acting=false;
    }
    else if(!((/^[0-9]+$/).test(b)))
    //else if(Number.isNaN(b))
    {
        document.getElementById("pin").innerHTML="Pincode should't any alphabets"
        acting=false;
    }
    return acting
}