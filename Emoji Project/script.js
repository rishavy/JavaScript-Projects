let searchemg = document.getElementById("search");
let displayEmg = document.getElementById("display-emoji");
let filterEmg = document.getElementById("filter-emogi");

filterEmg.addEventListener("click",(e)=>{
    e.preventDefault();
    filterFunction(e.target.id.toLowerCase());
    // console.log(e.target.id);

})
let filterFunction = (value)=>{
    // console.log(value);
    let filteredData = emojiList.filter(e=>{
        if(e.description.indexOf(value) != -1){
            return true;
        }
        
        if(e.aliases.some(e=>e.startsWith(value))){
            return true;
        }
        if(e.tags.some(e=>e.startsWith(value))){
            return true;
        }    
    });
    
    if(value.trim() == ""){
        displayEmoji(emojiList);
    }
    else{
    displayEmoji(filteredData);
    }
}

function displayEmoji(value = emojiList){
    displayEmg.innerHTML = "";
value.forEach(e=>{
   
    let newEmojiContainer = document.createElement("div");

    let emoji_box = document.createElement("span");
    emoji_box.style.width = "30px";
    emoji_box.style.fontSize = "30px";
    emoji_box.innerText = e.emoji;
    emoji_box.classList.add('animate__animated', 'animate__backInDown');
    emoji_box.style.cursor = "pointer";
    
    displayEmg.append(emoji_box)

})

}

window.addEventListener("load", ()=>{displayEmoji(emojiList)});

searchemg.addEventListener('keyup',(event)=>{
    let value = event.target.value;
    filterFunction(value)
})
displayEmg.addEventListener("click",(e)=>{
     navigator.clipboard.writeText(e.target.innerText);
    


     alert("Copied to clipboard");
    console.log( e.target);
})

// displayEmg.addEventListener("click", (e) => {
//   if (e.target.nodeName === "IMG") {
//     let val = e.target.alt;
//     navigator.clipboard.writeText(val);
//     Toastify({
//       text: "Emojee copied",
//       className: "info",
//       close: true,
//       style: {
//         background: "linear-gradient(to right, #00b09b, #96c93d)",
//       },
//     }).showToast();
//   }
// });
