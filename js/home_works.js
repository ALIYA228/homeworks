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

const childBlock = document.querySelector('.child_block')

let position = 0

const moveBlock = () => {
    if(position < 449){
        position++
        childBlock.style.left = `${position}px`
        setTimeout(moveBlock, 1)
    }
}

moveBlock()