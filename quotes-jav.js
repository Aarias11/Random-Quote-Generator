let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'API_KEY',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

document.getElementById('btn').addEventListener('click', nextQuote)

function nextQuote() {

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(data => {
        console.log(data)
        document.getElementById('quote').innerHTML = `"${data.content}"`
        document.getElementById('author').innerHTML = `- ${data.originator.name}`
    })
	.catch(err => console.error(err));

} 





















// let quote = document.getElementById('quote');
// let author = document.getElementById('author');
// let next = document.getElementById('next');




//  const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'dbf6f80d93msh81cd79abc88ec01p124b8fjsn8506d3f70bc0',
//         'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
//     }
// };


// document.querySelector('#next').addEventListener('click', newQuote)

// function newQuote() {

// fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.querySelector('p').innerHTML = data.content
//         document.querySelector('span').innerHTML = data.originator.name
        
//     })
    
// }

























// let quote = document.getElementById('quote');
// let author = document.getElementById('author');
// let next = document.getElementById('next');


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'dbf6f80d93msh81cd79abc88ec01p124b8fjsn8506d3f70bc0',
// 		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
// 	}
// };


// document.querySelector('#next').addEventListener('click', newQuote)

// function newQuote() {
// fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
// 	.then(response => response.json())
// 	.then(data => {
//         console.log(data.content)
//         document.querySelector('p.quote').innerHTML = data.content
//         document.querySelector('span').innerHTML = data.originator.name
        
        

//     })
// 	.catch(err => console.error(err));
// }





   









    
