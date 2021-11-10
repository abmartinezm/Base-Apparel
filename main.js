var valor =document.getElementById('mail');
const btn=document.querySelector('.clk');
// const key=document.querySelector('#tarjeta');
const err=document.querySelector('.error')
const txt=document.querySelector('.mail')


// key.inputNumero.addEventListener('keyup',(e)=>{
//     let valorInput=e.target.value;

//     key.inputNumero.value=valorInput
//     .replace(/\s/g, '')
//     .replace(/\D/g, '')
//     .replace(/([0-9]{4})/g, '$1 ')
//     .trim();

btn.addEventListener('click',()=>{

    var re=/\S+@\S+\.\S+/;
    if(valor.value.match(re)){
        // alert("valid mail");
        err.classList.remove('active');
        txt.classList.remove('activo')
        valor.value="";
        return true;
        
    }else{
        // alert("not a valid mail");
        err.classList.add('active');
        txt.classList.add('activo')
        console.log("no")
        return false;
    }
})
