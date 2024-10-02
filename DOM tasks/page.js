var MyForm=document.forms[0];
var sbtn=MyForm[3];
var details={};
sbtn.addEventListener("click",handlesubmit);

function handlesubmit(e){
    e.preventDefault();
    for (const element of  MyForm){
        if (element.type=="submit"){
            
        }
    }
}