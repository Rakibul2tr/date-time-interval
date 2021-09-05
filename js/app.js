



setInterval(function(){
    const hours = document.getElementById('hours');
    const minite = document.getElementById('minite');
    const second = document.getElementById('second');    
       
    const days = document.getElementById('day');    
    const month = document.getElementById('month');    
    const yaer = document.getElementById('yaer');

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
   
    const day = date.getUTCDate();
    const months = date.getUTCMonth()
    const years = date.getUTCFullYear();

    if(hour < 10){
        hours.innerText  = '0'+ hour;
    }
    if(minute < 10){
        minite.innerText ='0'+ minute;
    }
    if(seconds < 10){
        second.innerText ='0'+ seconds;
    }
    else{
    hours.innerText  = `${ hour}`;
    minite.innerText = `${minute}`;
    second.innerText = `${seconds}`;
    }

    if( day && months && years < 10){
        days.innerText = `0${day}`;
        month.innerText = `0${months}`;
        yaer.innerText = `${years}`;
    }
    else{
        days.innerText = `${day}`;
        month.innerText = `/${months}`;
        yaer.innerText = `/${years}`;
    }
    
},1000)



     

    

    