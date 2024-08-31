let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let i = Math.floor(Math.random()*16)+1
    let j = Math.floor(Math.random()*16)+1
    if(i==j){
        console.log("please try again")
    }
    else {
        stageEl.textContent = fighters[i] + "VS " + fighters [j]
    }
    
})


