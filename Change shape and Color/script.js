container = document.getElementById("shap-container");
circle = document.getElementById("circle");
shape = document.getElementById("shape");
changeColor = document.getElementById("color-btn");
changeShape = document.getElementById("shape-btn");
ISize = document.getElementById("plus-btn");
DSize = document.getElementById("min-btn");

let color = (a,b,c)=>`rgb(${a},${b},${c})`;

changeColor.addEventListener('click',function(){
    let randomR = Math.floor(Math.random()*256);
    let randomG = Math.floor(Math.random()*256);
    let randomB = Math.floor(Math.random()*256);
    circle.style.backgroundColor = color(randomR,randomG,randomB);
})

var height = 250;
ISize.addEventListener('click',function(){
    height += 20;
    circle.style.height = height + "px";
    circle.style.width = height + "px"; 
    
})
DSize.addEventListener('click',function(){
    height -= 20;
    circle.style.height = height + "px";
    circle.style.width = height + "px"; 
})


    let index = 0;  
    changeShape.addEventListener('click',()=>{
    let shapeArr = ["circle2","octagon", "square", "triangle", "rectangle", "daimond"];
    if(index <= shapeArr.length-1){
        shape.setAttribute("id",shapeArr[index]);
        index = (index+1)%shapeArr.length;
    }


})