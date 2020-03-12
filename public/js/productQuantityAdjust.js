const docPlus = document.getElementById('plus')
const docMinus = document.getElementById('minus')



if (docPlus) {
  docPlus.addEventListener('click', event => {
    event.preventDefault();

    let priceValue = parseFloat(document.getElementById('priceValue').value);
    let quantity = parseFloat(document.getElementById('quantity').value);
    let priceHidden = parseFloat(document.getElementById('priceHidden').value);

    priceValue += priceHidden;
    quantity += 1;
    document.getElementById('quantity').value = quantity;
    document.getElementById('priceValue').value = priceValue.toFixed(2);
    document.getElementById('total').innerHTML = quantity;
  });
}

if (docMinus) {
  docMinus.addEventListener('click', event => {
    event.preventDefault();

    let priceValue = parseFloat(document.getElementById('priceValue').value);
    let quantity = parseFloat(document.getElementById('quantity').value);
    let priceHidden = parseFloat(document.getElementById('priceHidden').value);

    if (quantity === 1) {
      quantity = 1;
      priceValue = priceHidden;
      return;
    } else {
      priceValue -= priceHidden;
      quantity -= 1;
      document.getElementById('quantity').value = quantity;
      document.getElementById('priceValue').value = priceValue.toFixed(2);
      document.getElementById('total').innerHTML = quantity;
    }
  });
}
