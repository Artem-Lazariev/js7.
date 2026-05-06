
const gallery = document.getElementById('gallery');
const imageItems = [];
const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
for (let i = 0; i < images.length; i++) {
    const li = document.createElement('li');
    li.classList.add('li');
    const img = document.createElement('img');

    img.src = images[i].url;
    img.alt = images[i].alt;
    img.classList.add('img');
    li.append(img);
    imageItems.push(li);
}

gallery.append(...imageItems);
let counter = 0;
document.getElementById("-1").addEventListener('click', () => {
    counter--;
    document.getElementById("value").innerHTML = counter

})
document.getElementById("+1").addEventListener('click', () => {
    counter++;
    document.getElementById("value").innerHTML = counter
})
document.getElementById("name-input").addEventListener('change', () => { document.getElementById("name-output").innerHTML = document.getElementById("name-input").value })
document.getElementById("validation-input").addEventListener('focusout', () => { document.getElementById("validation-input").classList = document.getElementById("validation-input").value.length >= 6 ? "valid" : "invalid" })
document.getElementById("font-size-control").addEventListener('change', () => { document.getElementById("text").style.fontSize = document.getElementById("font-size-control").value + "px" })