const submitRate = (btnHandler) => {
    btnHandler.addEventListener('click', ()=>{          
        try{
            const radioValue = document.querySelector('input[name="rate"]:checked').value;
            alert("Dziękujemy, że oceniłeś produkt na " + radioValue);
        }catch{
            alert("Error");
        }        
    })
}

export default submitRate;