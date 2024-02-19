let grandTotalPrice=0;
let select =[];
const selectTickets= document.getElementsByClassName('ticket');

for (const ticket of selectTickets){
    ticket.addEventListener('click',function(event){
        
        const indexText= event.target.innerText
      
        if(select.length<4){
        if (!select.includes(ticket.innerText)){
            select.push(ticket.innerText);
            ticket.style.backgroundColor = "#1DD100";

            const tbody = document.getElementById('tbody');
            const tr =document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            td1.innerText = ticket.innerText;
            td2.innerText = 'Economoy';
            td3.innerText = 550;
            td3.classList.add('seat-price');
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);

        }
        else{
            const index= select.indexOf(indexText);
            console.log(index);
            select.splice(index, 1);
            ticket.style.backgroundColor= '';
            const tbody = document.getElementById('tbody');
         
            tbody.deleteRow(index);
          
            
        }
    }
    else if(select.length==4){
        if (select.includes(indexText)){
            const index= select.indexOf(indexText);
            console.log(index);
            select.splice(index, 1);
            ticket.style.backgroundColor= '';
            const tbody = document.getElementById('tbody');
         
            tbody.deleteRow(index);

        }
        else{
            alert('limit exceeded');
        }
            
          
            
        
    }
  
        const totalPrice = select.length * 550;
        
        const price =document.getElementById('total-price');
        price.innerText = totalPrice;

        grandTotalPrice = select.length *550;
        const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = grandTotalPrice

        //coupon field enable 
        if(select.length>=4){
            const couponField = document.getElementById('coupon-field');
            couponField.removeAttribute('disabled');
            couponField.removeAttribute('title');

        }
        else{
            const couponField = document.getElementById('coupon-field');
            document.getElementById('coupon-apply-Btn').setAttribute('disabled', 'disabled');
            couponField.setAttribute('disabled', 'disabled');
            couponField.setAttribute('title','Please select at least one seat to apply the coupon');
          

        }
        // next button enable disable
        const nextButton = document.getElementById('next-button');
        if (nextBtnEnableCondition()) {
            nextButton.removeAttribute('disabled');
        } else {
            nextButton.setAttribute('disabled', 'disabled');
        }
       
        
        // seat count
        const seatCount = document.getElementById('seat-count');

        seatCount.innerText = select.length;
        // left seat count
        const seatLeft = document.getElementById('seat-left');
        seatLeft.innerText = 40-select.length;

 
    })
}


// next button enable fuction 
 const phoneNumber= document.getElementById('phone-number');
 const nextButton = document.getElementById('next-button');
function nextBtnEnableCondition() {

    return phoneNumber.value !== '' && select.length>0;
}

phoneNumber.addEventListener('keyup', function() {
    if (nextBtnEnableCondition()) {
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.setAttribute('disabled', 'disabled');
    }
});


// key coupon

document.getElementById('coupon-field').addEventListener('keyup',function(event){
    const coupon1 = document.getElementById('coupon1').innerText;
    const coupon2 = document.getElementById('coupon2').innerText;
    const couponApply= document.getElementById('coupon-apply-Btn')
    const textFieldValue = event.target.value
    console.log(textFieldValue);

    if((coupon1===textFieldValue || coupon2===textFieldValue) && select.length>0){
        couponApply.removeAttribute('disabled');
       
    }
    
    else{
        
        couponApply.setAttribute('disabled', 'disabled');
    }

});


// coupon code 

document.getElementById('coupon-apply-Btn').addEventListener('click',function(event){

    const coupon1 = document.getElementById('coupon1').innerText;
    const coupon2 = document.getElementById('coupon2').innerText;
    const couponText = document.getElementById('coupon-field').value;

    
    if(coupon1===couponText){
        const price =document.getElementById('total-price').innerText;
        const discount = document.getElementById('discount');
        
        const totalPrice = parseInt(price);
        
        const discoutPrice = totalPrice*0.15;
        discount.innerText = discoutPrice;
        grandTotalPrice = grandTotalPrice-discoutPrice;
        const grandPrice = document.getElementById('grand-price');

        grandPrice.innerText = grandTotalPrice;
        const node =  event.target.parentNode
        node.classList.add('hidden');

        discount.parentNode.parentNode.classList.remove('hidden');
        discount.parentNode.parentNode.classList.add('flex');
    

    }
    else if(coupon2===couponText){
        const discount = document.getElementById('discount');
        const price =document.getElementById('total-price').innerText;
        const totalPrice = parseInt(price);
        const discoutPrice = totalPrice*0.20;
        discount.innerText = discoutPrice;
        grandTotalPrice = grandTotalPrice-discoutPrice;        
        const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = grandTotalPrice;
        const node =  event.target.parentNode
         node.classList.add('hidden');
         
        discount.parentNode.parentNode.classList.remove('hidden');
        discount.parentNode.parentNode.classList.add('flex');
        
    }
    else{
        alert('your coupon code is invalid')
    }
  
});

// modal button click

document.getElementById('btn-modal').addEventListener('click', function() {
    window.location.reload();
});















