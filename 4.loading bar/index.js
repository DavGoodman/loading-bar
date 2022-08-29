const loadBar = document.querySelector(".loading-bar-front")
const percCount = document.querySelector(".counter")

async function Load(){
    for (let i=1; i<101; i++){
        loadBar.style.width = `${i}%`
        percCount.innerHTML = `${i}%`
        await sleep(10);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

Load()