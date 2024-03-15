const display =(e)=>{
    document.querySelector('.display').innerHTML += e.target.innerHTML

}

const calculate =()=>{ 
    try{
    document.querySelector('.display').innerHTML = eval(document.querySelector('.display').innerHTML)
    }
     catch(error){
         console.log(error);
         document.querySelector('.display').innerHTML=error
     }
}
 
       
 const clear= () => {
    console.log(document.querySelector('.display').innerHTML) 
    document.querySelector('.display').innerHTML=''
    console.log(document.querySelector('.display').innerHTML) 
 }

 

const buttons= document.querySelectorAll('.math') 
buttons.forEach((e)=>e.addEventListener('click',display))
document.querySelector('.calculate').addEventListener('click',calculate)
document.querySelector('#clear').addEventListener('click',clear)
 


 