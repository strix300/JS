const firstName = document.getElementById('inpname');
const inpbutton = document.getElementById('buttonhigh');
const serverUrl = 'https://api.genderize.io';
const out = document.getElementById('output');


async function sendresp(){
    const url = `${serverUrl}?name=${firstName.value}`;   
    let response = await fetch(url);
    let commits = await response.json();
    out.textContent = commits.name + " " + commits.gender;
}

inpbutton.addEventListener('click', sendresp);