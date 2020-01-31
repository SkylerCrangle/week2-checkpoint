//upgrades object list
let upgrade = {
  shovel: {
    cost: 15,
    addClickPower: 5,
    addResourceValue: 0,

  },
  basket: {
    cost: 1000,
  },
  gnome: {
    cost: 50,
  },
  reindeer: {
    cost: 10000,
  },
}

let totalCount = 0;
let upgradeArr = [];
let clickPower = 1;



//click on image
function clickImg() {
  totalCount += clickPower;
  updateScreen()
}

//update screen
function updateScreen() {
  document.getElementById("count").innerText = (`Mushrooms: ${totalCount}`)
}

//add item/upgrade to list
function addUpgrade(button) {
  upgradeArr.push(upgrade[button]);
  //console.log(upgradeArr);
  calcutateUpgrade()
}


//make changes with upgrades

function calcutateUpgrade() {
  for (let i = 0; i < upgradeArr.length; i++) {
    clickPower += upgradeArr[i].addClickPower;

  }
  return clickPower;
}

//automatic upgrade
