let sliderNumber=1;
let maxSlide=4;
    let temp=0;
let output=document.getElementById("output");

function previousSlide(){
    if(sliderNumber>1){
    sliderNumber = sliderNumber-1;
    //condition
    
    console.log(sliderNumber);
    output.src="images/"+sliderNumber+".png";
    output.classList.add("animate");
    setTimeout(()=>{
     output.classList.remove("animate");
    },2000);
    document.getElementById("right-arrow").removeAttribute("disabled",true);
    
    }
    if(sliderNumber==1){
        document.getElementById("left-arrow").setAttribute("disabled",true);
    }

}

function nextSlide(){

    if(sliderNumber<4){
    sliderNumber = sliderNumber+1;
    //condition
    
    console.log(sliderNumber);
    output.src="images/"+sliderNumber+".png";
    output.classList.add("animate");
    setTimeout(()=>{
        output.classList.remove("animate");
    },2000);

    document.getElementById("left-arrow").removeAttribute("disabled",true);

    }
    if(sliderNumber==4){
        document.getElementById("right-arrow").setAttribute("disabled",true);
    }
    

}

