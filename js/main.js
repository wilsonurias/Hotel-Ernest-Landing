document.querySelector('#master').addEventListener('mouseover', priceMaster)
document.querySelector('#lux').addEventListener('mouseover', priceLux)
document.querySelector('#eco').addEventListener('mouseover', priceEco)


function priceMaster() {
    document.querySelector('#luxury').innerText = 'Master Suite'
    document.querySelector('#price').innerText = '$399 / DAY'
}

function priceLux() {
    document.querySelector('#luxury').innerText = 'Luxury'
    document.querySelector('#price').innerText = '$199 / DAY'
}

function priceEco() {
    document.querySelector('#luxury').innerText = 'Economy'
    document.querySelector('#price').innerText = '$99 / DAY'
}