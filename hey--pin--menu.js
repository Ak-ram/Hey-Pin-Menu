let ticket = document.getElementsByClassName('ticket');

ticket[ticket.length-1].addEventListener('click',(e)=>{
    // ticket[ticket.length-1].parentNode.addEventListener('click',(e)=>{e.stopPropagation()})
    for(let i=0; i< ticket.length; i++){
        ticket[i].addEventListener('click',(e)=>{e.stopPropagation()})
        ticket[i].style.transform=`translate3d(${i*10}px,-${i*60}px,${i*1.2}px) rotate(${i * 1.9 + 3}deg) scale(${1 + i*.01})`;
        ticket[i].classList.add('ticket-effect');
}
})

document.addEventListener('click',(e)=>{
       for(let i=0; i< ticket.length; i++){
        ticket[i].style.transform=`none`;
        ticket[i].classList.remove('ticket-effect');
}
})