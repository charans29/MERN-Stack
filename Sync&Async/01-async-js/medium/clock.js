
getTime = () => { 
    setInterval(() =>{
        time = new Date()
        ampm = time.getHours() >= 12 ? 'PM' : 'AM';
        hours= time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
        console.log(hours+':'+time.getMinutes()+':'+time.getSeconds()+' '+ampm)
    },1000)
}

getTime()
