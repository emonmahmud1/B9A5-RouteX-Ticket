let countTicket=0;
let grandTotalPrice=0;
const selectTickets= document.getElementsByClassName('ticket');

for (const ticket of selectTickets){
    ticket.addEventListener('click',function(e){
        countTicket+=1;
        // console.log(ticket.innerText);
        ticket.style.backgroundColor = "green";
        ticket.setAttribute('disabled',true);
        // appent table data
        const tbody = document.getElementById('tbody');
        const tr =document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.innerText = ticket.innerText;
        td2.innerText = 'business';
        td3.innerText = 550;
        td3.classList.add('seat-price');
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
        // console.log(tbody);

        // add total 
        let totalPrice = countTicket*550;
        console.log(totalPrice);
        const price =document.getElementById('total-price');
        price.innerText = totalPrice;
        grandTotalPrice = countTicket*550;
        const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = grandTotalPrice
        
//enable coupon code button
        if(countTicket>=4){
            const couponApply = document.getElementById('coupon-apply-Btn');
            couponApply.removeAttribute('disabled');
        }
 
    })
}

// function totalPrice(){
//     const totalPrice =document.getElementsByClassName('seat-price');
//     console.log(totalPrice.innerHtml);

// }

// coupon code 









