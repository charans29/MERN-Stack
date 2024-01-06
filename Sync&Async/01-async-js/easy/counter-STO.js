

showCount = (i) => {
    console.log(i);
}

myTimer = (i) => {    
    if (++i <= 5){
        setTimeout(() => myTimer(i), 1000);
        showCount(i);
     }
 }

let i = 0;
myTimer(i);


// USING PROMISE

showCount = (j) => {
    console.log(j);
}

delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

myTimer = async(j) => {
    while (++j <= 5) { 
        await delay(1000);
        showCount(j);
    }
}

let j = 0;
myTimer(j);

// PROMISE WITHOUT LAMBDA OR ARROW

function showCount(j){
    console.log(j);
}

function delay(ms){
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function myTimer(j){
    while (++j <= 5) { 
        await delay(1000);
        showCount(j);
    }
}

let j = 0;
myTimer(j);

//PROMISING WITHOUT LOOP

function showCount(j){
    console.log(j);
}

function delay(ms){
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function myTimer(j){
    if (++j <= 5) { 
        await delay(1000);
        showCount(j);
        myTimer(j);
    }
}

let j = 0;
myTimer(j);



// WITH SYNTACTICAL SUGAR

showCount = i => console.log(i);
delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let i = 0;
(async () => {
    while(++i <= 3) {
        await delay(1000);
        showCount(i);
    }
})();

//NORMAL FORM

function showCount(i){
    console.log(i);
 }

function delay(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms)
    });
 }


async function call(i){
    while(++i <= 3) {
        await delay(1000);
        showCount(i);
    }
}

let i = 0;
call(i);

//WITH THEN SYNTAX

showCount = i => {
    console.log(i);
}

delay = ms => new Promise(function(resolve){
    setTimeout(resolve, ms)});

let i = 0;
function myTimer() {
    if (++i <= 3) {
        delay(1000).then(myTimer);
        showCount(i);
    }
}
myTimer();








