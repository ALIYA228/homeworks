const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')

const regExp = /\w@gmail.com$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerText = "OK"
        gmailResult.style.color = "green"
    }else{
        gmailResult.innerText = "NOT OK"
        gmailResult.style.color = "red"
    }
}
//
// const childBlock = document.querySelector('.child_block')
//
// let position = 0
//
// const moveBlock = () => {
//     if(position < 449){
//         position++
//         childBlock.style.left = `${position}px`
//         setTimeout(moveBlock, 1)
//     }
// }

//MOVE BLOCK

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0
const maxOffsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxOffsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const moveBlock = () => {
    if (positionX<maxOffsetWidth && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    } else if (positionX>=maxOffsetWidth && positionY < maxOffsetHeight){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    } else if (positionX>= 0 && positionY<= maxOffsetHeight) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    } else if (positionX<= 0  && positionY > 0){

        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    }
}
moveBlock()

const seconds = document.querySelector('#seconds')
const startTimer = document.querySelector('#start')
const stopTimer = document.querySelector('#stop')
const resetTimer = document.querySelector('#reset')
let second = 0
let interval

const stopWatch = () => {
    second++
    seconds.innerHTML = second
}

startTimer.onclick = () => {
    if (!interval){
        interval = setInterval(stopWatch, 1000)
    }
}
stopTimer.onclick = () => {
    clearInterval(interval)
    interval = null
}
resetTimer.onclick = ()  => {
    clearInterval(interval)
    interval = null
    second = 0
    seconds.innerHTML = '0'

}





