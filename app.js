document.querySelector(".get-jokes").addEventListener("click", getJokes);
document.querySelector(".get-number").addEventListener("click", getNumber);

function getJokes(e){
    const number = document.querySelector('input[type=number]').value;

    fetch(`https://api.icndb.com/jokes/random/${number}`)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        let output = "";
        
        data.value.forEach(joke => {
            output += `<li>${joke.joke}</li>`;
            console.log(output);

            
        });

        document.querySelector(".jokes").innerHTML = output;
    });

    

    e.preventDefault();
}

function fetchNumber(){
    let result;
    let output = "";
    fetch(`http://numbersapi.com/random/?json`)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
    //output = `<li>${data.text}</li>`;
    result = data.text;
    console.log(result);
    return result;
});
}


function getNumber(){
    const numbera = document.querySelector('input[type=number]').value;
    console.log("button clicked");
    let output = fetchNumber();
    console.log("output = ", output);
    for(let counter = 0; numbera < counter; counter++){
        
        document.querySelector(".numbers").innerHTML = output;
        output.preventDefault();
};
}
