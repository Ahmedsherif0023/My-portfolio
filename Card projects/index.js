let names = ['ahmed' , 'ali' , 'gamal' , 'abdo'];
let ages = ['18 years old' , '20 years old' , '19 years old' , '17 years old']
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
function element(name,ages){
    //creatint elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');
    //adding content 
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(ages);
    img.src = 'images/1.png';
    title.appendChild(head);
    age.appendChild(ageContent);

//styling the card
    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';

//image styling to be 100% of the div
    img.style.width = '100%';

//appending title , age and img to the card
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
//appending the card to the container
    container.appendChild(card);
}
for(let i=0 ; i < 4 ; i++)
{
element(names[i] , ages[i]);

}