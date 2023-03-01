function getName(head) {
    let name;
    do {
      name = prompt(head);
    } while (name.length < 3);
    return name;
}
  
    const firstName = getName("Adinizi daxil edin");
    const secondName = getName("Soyadinizi daxil edin")
    let money = 1000;

let moneyValue;

while(true){
    const moneyProcess = Number(prompt(`Ad: ${firstName}\nSoyad: ${secondName}\nBalans: ${money} azn\nBalansdan pul cixartmaq ucun 1,Balansi artirmaq ucun 2-e bas\nProqramı dayandırmaq üçün 0-a basın`));

    switch (moneyProcess) {
        case 1:
            moneyValue = trueValue("Çıxartmaq istediyiniz qiymeti yazin");
            takeMoney();
            break;
        case 2:
            moneyValue = trueValue("Artirmaq istediyiniz qiymeti yazin");
            putMoney();
            break;  
        case 0:
            alert("Proqram dayandirildi");
            break;         
        default:
            continue;
    }
    if (moneyProcess === 0) {
        break;
    }
}


function trueValue(head) {
    let moneyValue;
    do {
      moneyValue = prompt(head);
    } while (isNaN(moneyValue) || moneyValue <= 0);
    return Number(moneyValue);
}

  function takeMoney(){
    if (money - moneyValue < 0) {
        alert(`Balansında bu qeder pul yoxdur.\nBalans: ${money} azn`);
        moneyValue = trueValue("Çıxartmaq istediyiniz qiymeti yazin");
        takeMoney();
    } else {
        money = money - moneyValue;
    }
    return money;
}


function putMoney(){
    money = money + moneyValue;
    return money;
}
