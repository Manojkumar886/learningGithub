var delta=["Vijay","Manoj","Uma","Bhuvana","Hamsaraj","Vimal","Akash","Saran"]

const inserting=()=>{
    const tmp=document.getElementById("users")
    delta.push(tmp.value)
    alert("your values is added successfully"+tmp.value)
}

const viewpoint=()=>{
    var hi=""
    delta.map((data)=>
    {   
        hi+="<tr><td>"+data+"</td></tr>"
    })
    var team=document.getElementById("presents")
    //document.write("<table align='center' style='padding: 10px 10px 10px 10px; border-radius: 10px;box-shadow: 5px 5px 5px blue;'><thead><tr><th>Elements</th></tr></thead><tbody>"+delta.map((data)=>{document.write("<tr><td>"+data+"</td></tr>")})+"</tbody></table>")
    team.innerHTML="<table align='center' style='padding: 1px 11px 10px 10px; border-radius: 10px;box-shadow: 5px 5px 5px blue;'><thead><tr><th>Elements</th></tr></thead><tbody>"+hi+"</tbody></table>"
}

let updating=()=>
{
    let temp=document.getElementById('users').value;
    const newone=prompt('Tell us what update/replace'+delta[temp]);
    delta[temp]=newone;
   
}

let deleting=()=>
{
    let tmp=document.getElementById('users').value;
    delta=delta.filter((data)=>
    {
        return data!==tmp;
    })    
}


let inerting1=()=>
{
    let temp=document.getElementById('users');
    delta.push(temp.value);
    alert("has been added successfully"+temp.value)
}


let deletin1=()=>
{
    let temp=document.getElementById('users').value
    delta=delta.filter((data)=>
    {
        return data!==temp
    })
    viewpoint();
}





