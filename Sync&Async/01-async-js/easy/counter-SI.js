




showCount = (i) => {
    console.log(i);
}

let i = 0, intervalid;
intervalid = setInterval(() => {
    showCount(++i);
    if(i >= 5)
      clearInterval(intervalid)
}, 1000);

//   OR WITHOUT ARROW

function showCount(i){
    console.log(i);
}

let j = 0, jintervalid;
jintervalid = setInterval(function(){
    showCount(++j);
    if (j >= 5) {
        clearInterval(jintervalid);
        jintervalid = null;
    }
}, 1000);