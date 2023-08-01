const buttons = document.querySelectorAll('button')
const spans = document.querySelectorAll('span')

buttons.forEach((button,id)=>{
    button.onclick=()=>{
            spans[id].classList.toggle('block')
        button.textContent=button.textContent==='показать ответ'?'скрыть ответ':'показать ответ'
    }
})