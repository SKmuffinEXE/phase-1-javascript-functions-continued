// Your code here
function saturdayFun(activity, start = 'This Saturday, I want to'){
    const defAct = 'roller-skate';
    if(activity === undefined){
        activity= defAct
    }
    return `${start} ${activity}!`
}

//result  msg = `This Saturday, I want to ${activity}!`;

 function mondayWork(activity, start = 'This Monday, I will'){
    const defAct = 'go to the office';
    if(activity === undefined){
        activity= defAct
    }
    return `${start} ${activity}.`
 }

function wrapAdjective(special = '*', start = "You are") {

    const innerFunction = function (end){
        return `${start} ${special}${end}${special}!` 
    }
    return innerFunction;
}

// wrapAdjective("%")("a dedicated programmer"); 
//=> "You are %a dedicated programmer%!"