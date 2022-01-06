// assign values to the identifers.
const button = document.querySelector('.container button');
const jokeText =document.querySelector('.container joke p');
// when click getJoke function happens.
button.addEventListener('click', getJoke);
//async ensures that the function returns a promise
//await works only inside async function. await waits until that promise settles and returns its result.
async function getJoke(){
    const jokeData=await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
   });
    const jokeObj= await jokeData.json();
    document.getElementById('joke').innerText = jokeObj.joke;
    console.log(jokeObj);
};
//wait until the jokes being fetched successfully, then assign jokes into jason, print out the jokes. 
