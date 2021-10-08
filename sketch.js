var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
 
  input=createInput();
  input.position(100,200);

  heading=createElement("h4","Enter a alphabet");
  heading.position(100,150);

  textAlign("center");
  textSize(30)
}

function draw() {

  const value=input.value();

  switch(value){
    case 'a':console.log("vowel");
             break;
    case 'e':console.log("vowel");
             break;
    case 'i':console.log("vowel");
             break;
    case 'o':console.log("vowel");
             break;
    case 'u':console.log("vowel");
             break;
    default: console.log("consonant");         
  }
  
}

