// PHONE BLOCK

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996[2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }

}

// TAB SLIDER---------------------------------------------------

const tabContentBlock = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelector('.tab_content_items')
const tabContentItem = document.querySelectorAll('.tab_content_item')
let index = 0

const hideTabs = () => {
    tabContentBlock.forEach((content) => {
        content.style.display = "none"
    })
    tabContentItem.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')}
    )
}


const showTabs = (index = 0) => {
    tabContentBlock[index].style.display = "block"
    tabContentItem[index].classList.add('tab_content_item_active')
}
hideTabs()
showTabs(index)

tabContentItems.onclick = (event)  => {
    if (event.target.classList.contains("tab_content_item")){
        tabContentItem.forEach((tab, tabIndex) => {
            if (event.target === tab){
                hideTabs()
                index = tabIndex
                showTabs(index)
            }
        })
    }
}

// const autoSlider = () => {
//     hideTabs()
//     index = (index + 1) % tabContentItem.length
//     showTabs(index)
// }
// setInterval(autoSlider, 3000)



//CONVERTER
const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const eurInput = document.querySelector('#eur')

const converter = (element, firstElement, secondElement, currency) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            switch (currency){
                case 'som':
                    firstElement.value = (element.value / data.usd).toFixed(2)
                    secondElement.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    firstElement.value = (element.value * data.usd).toFixed(2)
                    secondElement.value = (element.value * 0.92).toFixed(2)
                    break
                case 'eur':
                    firstElement.value = (element.value / data.eur).toFixed(2)
                    secondElement.value = (element.value * 1.08).toFixed(2)
                    break
            }
        }
    }
}

converter(somInput, usdInput, eurInput, "som")
converter(usdInput, somInput, eurInput, 'usd')
converter(eurInput, somInput, usdInput, 'eur')