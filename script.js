const currencySelectorFromTheTop = document.querySelector("#select-up")
const selectorValue = document.querySelector(`#select-low`)
const buttonConvert = document.querySelector(`.convert`)
const inputSumValue=document.querySelector(`.input-sum-value`)
const valueUp=document.querySelector(`.value-up`)
const valueLow=document.querySelector(`.value-low`)
const boxResult=document.querySelector(`.result-box`)

let imgLogo = []
let newList = []
function currencySelector() {
    if (currencySelectorFromTheTop.value == "real") return (valueOfTheRealBrl)
    if (currencySelectorFromTheTop.value == "euro") return (valueOfTheEuroEur)
    if (currencySelectorFromTheTop.value == "dolar") return (valueOfTheDolarEua)
}

function currencySelectorValue(currencyValue) {
    const table = currencySelector()
    table.filter(item => { if (item.name == currencyValue) newList = item.value })
    table.filter(item => { if (item.name == currencyValue) imgLogo = item })
    
}


function currencyConverter() {

    const tableOfItems = currencySelector()
     
    currencySelectorValue(selectorValue.value)

   tableOfItems.forEach(item =>{
    
        boxResult.innerHTML=`
    <ul class="Converting-box">
       <li >
           <img class="img-up" src="${item.img}" alt="img Currency">
           <P >${item.tableName}</P>
           <p class="value-up"> ${new Intl.NumberFormat(item.format,{
            style:`currency`,
            currency:item.model
           }).format(inputSumValue.value)}</p>

         <img class="arrow" src="./img/seta4.jpg" alt="arrow">

            <img class="img-low" src="${imgLogo.src}" alt="img Currency">
            <P >${imgLogo.coinName}</P>
            <p class="value-low"> ${new Intl.NumberFormat(imgLogo.format,{
                style:`currency`,
                currency:imgLogo.model
               }).format(newList * inputSumValue.value)} </p>
       </li>
    </ul>`
    
})
}
currencySelectorFromTheTop.addEventListener("change", currencyConverter,)
buttonConvert.addEventListener(`click`, currencyConverter)
selectorValue.addEventListener("change", currencyConverter)
