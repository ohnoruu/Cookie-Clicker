let credits = 0;
let credPerClick = 1;
let highScore = 0;

let upgrade1Purchased = false;
let upgrade2Purchased = false;
let upgrade3Purchased = false;
let upgrade4Purchased = false;

const upgrade1Price = 75;
const upgrade2Price = 15000;
const upgrade3Price = 200000;
const upgrade4Price = 1000000;

let autoClickerPrice = 3500;
let numAutoClickers = 0;
let autoClickerInterval;

const level1Click = 50;
const level2Click = 1000;
const level3Click = 5000;
const level4Click = 10000;

const rankNames = [
    //Beginner ranks 0-1000
    "Pond Paddler", //0-50
    "Minnow Catcher", //51-100
    "Rod Rookie", //101-500
    "Shore Angler", //501-1000
    
    //Intermediate ranks 2000-10000
    "River Fisher",
    "Lure Specialist",
    "Ocean Trawler",
    "Reel Prodigy",

    //Advanced ranks 10001-1000000
    "Hook Virtuoso",
    "Master Angler",
    "Fishing Captain",
    "Deep Sea Explorer",

    //Elite ranks 1000001-10000000+
    "Kraken Catcher",
    "Legendary Fisher",
    "Ocean Conquerer",
    "Poseidon's Chosen"
]

const fish = document.getElementById('fish');
const credDisplay = document.getElementById('num-fish');
const upgrade1 = document.getElementById('upgrade-1');
const upgrade2 = document.getElementById('upgrade-2');
const upgrade3 = document.getElementById('upgrade-3');
const upgrade4 = document.getElementById('upgrade-4');
const rankDisplay = document.getElementById('rank');
const autoClickerButton = document.getElementById('autoclicker');
const autoClickerPriceDisplay = document.getElementById('autoclicker-price');
const numAutoClickersDisplay = document.getElementById('num-autoclickers');

fish.addEventListener('click', onClick);

upgrade1.addEventListener('click',() => upgradeClicked(1));
upgrade2.addEventListener('click', () => upgradeClicked(2));
upgrade3.addEventListener('click', () => upgradeClicked(3));
upgrade4.addEventListener('click', () => upgradeClicked(4));

autoClickerButton.addEventListener('click', purchaseAutoClicker);

function onClick(){
    credits += credPerClick;
    highScore = Math.max(credits, highScore);
    updateRank(highScore);
    console.log(credits);
    updateCredits();
}

function updateCredits(){
    credDisplay.textContent = credits.toString();
}

function autoClicker(){
    if (numAutoClickers > 0){
        clearInterval(autoClickerInterval);
        autoClickerInterval = setInterval(onClick, 1000 / numAutoClickers);
    }
}

function purchaseAutoClicker(){
    if (credits >= autoClickerPrice){
        credits -= autoClickerPrice;
        numAutoClickers++;
        autoClickerPrice = Math.floor(autoClickerPrice*1.5);
        updateCredits();
        autoClicker();
        autoClickerPriceDisplay.textContent = `Price: ${autoClickerPrice} fish`;
        numAutoClickersDisplay.textContent = `Number autoclickers: ${numAutoClickers}`;
    } else {
        alert("Not enough credits.");
    }
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
    updateCredits();
}

function updateRank(highScore){
    let rank;
    switch (true){
        //Beginner Ranks
        case (highScore >= 0 && highScore <= 50):
            rank = rankNames[0];
            break;
        case (highScore >= 51 && highScore <= 100):
            rank = rankNames[1];
            break;
        case (highScore >= 101 && highScore <= 500):
            rank = rankNames[2];
            break;
        case (highScore >= 501 && highScore <= 1000):
            rank = rankNames[3];
            break;

        //Intermediate Ranks
        case (highScore >= 1001 && highScore <= 2000):
            updateFish("tropical");
            rank = rankNames[4];
            break;
        case (highScore >= 2001 && highScore <= 5000):
            rank = rankNames[5];
            break;
        case (highScore >= 5001 && highScore <= 8000):
            rank = rankNames[6];
            break;
        case (highScore >= 8001 && highScore <= 10000):
            rank = rankNames[7];
            break;

        //Advanced Ranks
        case (highScore >= 10001 && highScore <= 20000):
            updateFish("shark");
            rank = rankNames[8];
            break;
        case (highScore >= 20001 && highScore <= 50000):
            rank = rankNames[9];
            break;
        case (highScore >= 50001 && highScore <= 100000):
            rank = rankNames[10];
            break;
        case (highScore >= 100001 && highScore <= 1000000):
            rank = rankNames[11];
            break;

        //Elite Ranks
        case (highScore >= 1000001 && highScore <= 2000000):
            updateFish("whale");
            rank = rankNames[12];
            break;
        case (highScore >= 2000001 && highScore <= 5000000):
            rank = rankNames[13];
            break;
        case (highScore >= 5000001 && highScore <= 10000000):
            rank = rankNames[14];
            break;
        case (highScore >= 10000001):
            rank = rankNames[15];
            break;
    }
    rankDisplay.textContent = rank;
}

function updateFish(typeFish){
    if (typeFish == "tropical"){
        fish.src="img/tropical-fish.png";
        console.log("tropical fish");
    }
    if (typeFish == "shark"){
        fish.src="img/shark.png";
        console.log("shark");
    }
    if (typeFish == "whale"){
        fish.src="img/whale.png";
        console.log("whale");
    }
}