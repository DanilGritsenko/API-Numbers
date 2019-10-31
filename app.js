//document.querySelector(".get-jokes").addEventListener("click", getJokes);
document.querySelector(".get-number").addEventListener("click", fetchRandomNumber);
document.querySelector(".get-number2").addEventListener("click", fetchNumber);

/*function getJokes(e){
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
}*/

function fetchRandomNumber(){
    let result;
    let output = "";
    fetch(`https://numbersapi.com/random/?json`)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
    output = `<li>${data.text}</li>`;
    result = data.text;
    console.log(result);
    document.querySelector(".numbers").innerHTML = output;
    return result;
});
}

function fetchNumber(){
    const number = document.querySelector('input[type=number]').value;
    let result;
    let output = "";
    fetch(`https://numbersapi.com/${number}/?json`)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
    output = `<li>${data.text}</li>`;
    result = data.text;
    console.log(result);
    document.querySelector(".numbers").innerHTML = output;
});
}


function getNumber(){
    
    let result;
    let output = "";
    fetch(`https://numbersapi.com/random/?json`)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
    output = `<li>${data.text}</li>`;
    result = data.text;
    console.log(result);
});
}
