
const button = document.querySelector('.container button');
const jokeText =document.querySelector('.container joke p');

button.addEventListener('click', getJoke);

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
