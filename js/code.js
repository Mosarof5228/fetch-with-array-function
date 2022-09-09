//amader kaj holo kanye rest api namer api take nia
//tar text take amra amader html page a dekhabo.
//html page a akti button thakbe and button a click korle dekhabo.
//amra general function use korte parbona.
//amaderke array function use korte hobe.



const kanYea = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayCode(data));
}

const displayCode = (text) => {
    const placeHolder = document.getElementById("quote");
    placeHolder.innerText = text.quote;
   
}