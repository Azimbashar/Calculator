let string = "";
let input =document.getElementById('in')

let button=document.querySelectorAll('.a');
Array.from(button).forEach((b)=>{

b.addEventListener('click',(e)=> {
  
  if(e.target.innerHTML=='=')
  {
    string=eval(string);
    input.value=string;
    
  }
  
  else if(e.target.innerHTML=='C')
  {
    string="";
    input.value=string;
    
    
  }
  
  else
  {
  string=string+e.target.innerHTML;
  input.value=string;
  }
});
})
