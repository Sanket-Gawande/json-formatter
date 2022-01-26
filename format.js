const input = document.querySelector(".input")
const output = document.querySelector(".output")
const key = document.querySelector(".keyo")


function format(){
    try{

        const inputString = JSON.parse(input.value)
        const formatted = JSON.stringify(inputString , "a" , 4);
        output.value = formatted;
        key.innerHTML = "'formatted' : ";
    }
    catch{
        err => console.log(err)
    }
}
    
    
function minify(){
    try{

        const inputString = JSON.parse(input.value)
        const formatted = JSON.stringify(inputString );
        output.value = formatted;
        key.innerHTML = "'minified' : ";
    }
    catch{
        err => console.log(err) 
    }
}