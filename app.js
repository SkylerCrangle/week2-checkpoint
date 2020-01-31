//upgrades object list

let upgrade = {
  shovel: {
    cost: 15,
    addClickPower: 5,
    addResourceValue: 0,
    quantity: 0,

  },
  basket: {
    cost: 750,
    addClickPower: 0,
    addResourceValue: 0,
    quantity: 0
  },
  gnome: {
    cost: 500,
    addClickPower: 0,
    addResourceValue: 0,
    quantity: 0
  },
  reindeer: {
    cost: 10000,
    addClickPower: 0,
    addResourceValue: 0,
    quantity: 0
  },
}

let totalCount = 0;
let upgradeArr = [];
let clickPower = 1;
updateScreen()


//click on image
function clickImg() {
  totalCount += clickPower;
  updateScreen()
}

//update screen
function updateScreen() {
  disableButtons()
  document.getElementById("count").innerText = (`Mushrooms: ${totalCount}`)
  document.getElementById("youritems").innerText = (`Shovels: ${upgrade.shovel.quantity} +${clickPower - 1}click power. Gnomes: ${upgrade.gnome.quantity} helping find ${upgrade.gnome.quantity} mushrooms every 3 seconds`)
}

function disableButtons() {
  //shovel
  if (totalCount < upgrade.shovel.cost) {
    document.getElementById("idShovel").style.pointerEvents = "none"
    document.getElementById("idShovel").classList.remove("btn-success")
    document.getElementById("idShovel").classList.add("btn-secondary")
  }
  else if (totalCount >= upgrade.shovel.cost) {
    document.getElementById("idShovel").style.pointerEvents = "all"
    document.getElementById("idShovel").classList.remove("btn-secondary")
    document.getElementById("idShovel").classList.add("btn-success")
  }
  //basket
  if (totalCount < upgrade.basket.cost) {
    document.getElementById("idBasket").style.pointerEvents = "none"
    document.getElementById("idBasket").classList.remove("btn-success")
    document.getElementById("idBasket").classList.add("btn-secondary")
  }
  else if (totalCount >= upgrade.basket.cost) {
    document.getElementById("idBasket").style.pointerEvents = "all"
    document.getElementById("idBasket").classList.remove("btn-secondary")
    document.getElementById("idBasket").classList.add("btn-success")
  }
  //gnome
  if (totalCount < upgrade.gnome.cost) {
    document.getElementById("idGnome").style.pointerEvents = "none"
    document.getElementById("idGnome").classList.remove("btn-success")
    document.getElementById("idGnome").classList.add("btn-secondary")
  }
  else if (totalCount >= upgrade.gnome.cost) {
    document.getElementById("idGnome").style.pointerEvents = "all"
    document.getElementById("idGnome").classList.remove("btn-secondary")
    document.getElementById("idGnome").classList.add("btn-success")
  }
  //reindeer
  if (totalCount < upgrade.reindeer.cost) {
    document.getElementById("idReindeer").style.pointerEvents = "none"
    document.getElementById("idReindeer").classList.remove("btn-success")
    document.getElementById("idReindeer").classList.add("btn-secondary")
  }
  else if (totalCount >= upgrade.reindeer.cost) {
    document.getElementById("idReindeer").style.pointerEvents = "all"
    document.getElementById("idReindeer").classList.remove("btn-secondary")
    document.getElementById("idReindeer").classList.add("btn-success")
  }

}

function btnShovel() {
  upgrade.shovel.quantity++
  upgradeArr.push(upgrade["shovel"]);
  totalCount -= upgrade.shovel.cost;
  calcutateUpgrade()
  updateScreen()
}

function btnGnome() {
  upgrade.gnome.quantity++
  updateScreen()
  setInterval(autoFriends, 3000)
}

function autoFriends() {
  totalCount += 1 * upgrade.gnome.quantity
  updateScreen()
}


//make changes with upgrades

function calcutateUpgrade() {
  for (let i = 0; i < upgradeArr.length; i++) {
    clickPower += upgradeArr[i].addClickPower;

  }
  return clickPower;
}

//automatic upgrade
