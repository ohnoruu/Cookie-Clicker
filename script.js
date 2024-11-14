let credits = 0;
let credPerClick = 1;

let upgrade1Purchased = false;
let upgrade2Purchased = false;
let upgrade3Purchased = false;
let upgrade4Purchased = false;

const upgrade1Price = 75;
const upgrade2Price = 15000;
const upgrade3Price = 200000;
const upgrade4Price = 1000000;

const level1Click = 50;
const level2Click = 100;
const level3Click = 1000;
const level4Click = 10000;

const fish = document.getElementById('fish');
const credDisplay = document.getElementById('num-fish');
const upgrade1 = document.getElementById('upgrade-1');
const upgrade2 = document.getElementById('upgrade-2');
const upgrade3 = document.getElementById('upgrade-3');
const upgrade4 = document.getElementById('upgrade-3');

fish.addEventListener('click', onClick);
upgrade1.addEventListener('click', upgradeClicked(1));
upgrade2.addEventListener('click', upgradeClicked(2));
upgrade3.addEventListener('click', upgradeClicked(3));
upgrade4.addEventListener('click', upgradeClicked(4));

function onClick(){
    credits += credPerClick;
    console.log(credits);
    credDisplay.textContent = credits.toString();
}

function upgradeClicked(upgradeNum){
    if (upgradeNum == 1){
        if (credits >= upgrade1Price){
            if (upgrade1Purchased == false){
                purchase(1);
            } else {
                alert("You have already purchased this upgrade");
            }
        } else {
            alert("Not enough credits.");
        }
    }
    if (upgradeNum == 2){
        if (credits >= upgrade2Price){
            if (upgrade2Purchased == false){
                purchase(2);
            } else {
                alert("You have already purchased this upgrade");
            }
        } else {
            alert("Not enough credits.");
        }
    }
    if (upgradeNum == 3){
        if (credits >= upgrade3Price){
            if (upgrade3Purchased == false){
                purchase(3);
            } else {
                alert("You have already purchased this upgrade");
            }
        } else {
            alert("Not enough credits.");
        }
    }
    if (upgradeNum == 4){
        if (credits >= upgrade4Price){
            if (upgrade4Purchased == false){
                purchase(4);
            } else {
                alert("You have already purchased this upgrade");
            }
        } else {
            alert("Not enough credits.");
        }
    }
}

function purchase(upgradeNum){
    if (upgradeNum == 1){
        credits -= upgrade1Price;
        credPerClick = level1Click;
        upgrade1Purchased = true;
    }
    if (upgradeNum == 2){
        credits -= upgrade2Price;
        credPerClick = level2Click;
        upgrade1Purchased = true;
        upgrade2Purchased = true;
    }
    if (upgradeNum == 3){
        credits -= upgrade3Price;
        credPerClick = level3Click;
        upgrade1Purchased = true;
        upgrade2Purchased = true;
        upgrade3Purchased = true;
    }
    if (upgradeNum == 4){
        credits -= upgrade4Price;
        credPerClick = level4Click;
        upgrade1Purchased = true;
        upgrade2Purchased = true;
        upgrade3Purchased = true;
        upgrade4Purchased = true;
    }
}