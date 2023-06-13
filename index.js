function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
}
console.log(saturdayFun());
console.log(saturdayFun("sleep in"));

function mondayWork(activity = "go to the office"){
    return(`This Monday, I will ${activity}.`)
}
console.log(mondayWork());
console.log(mondayWork("buy groceries"));

function wrapAdjective(flair = "*"){
    return function highlight(adjective = "special"){
        return(`You are ${flair}${adjective}${flair}!`)
    }
}
console.log(wrapAdjective())
console.log(wrapAdjective("||")("a dedicated programmer"))

