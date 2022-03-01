const input = document.querySelector(".input")
const output = document.querySelector(".output")
const key = document.querySelector(".keyo")

// format code
function format(){
    try{

        const inputString = JSON.parse(input.value)
        const formatted = JSON.stringify(inputString , "a" , 4);
        output.value = formatted;
        key.innerHTML = "'formatted' : ";
    }
    catch{
        err => console.log(err)
        output.value = "Invalid json"
    }
}


// function to minify code
    
function minify(){
    try{

        const inputString = JSON.parse(input.value)
        const formatted = JSON.stringify(inputString );
        output.value = formatted;
        key.innerHTML = "'minified' : ";
    }
    catch{
        err => console.log(err) 
        output.value = "Invalid json"
    }
}


// format code on enter
input.onkeydown = (e) => {
e.key === "Enter" ? format() : ""
}