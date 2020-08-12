
//Numero uno: parentNode

let miElemento1 = document.getElementById('a').parentNode;
console.log('parentNode ', miElemento1);

//Numero dos: firstChild y lastChild
let miElemento2 = document.getElementById('padre').firstChild;
console.log('firstChild ', miElemento2);
let miElementoDos = document.getElementById('padre').lastChild;
console.log('lastChild ', miElementoDos);

//Numero tres: previousElementSibling

let miElemento3 = document.getElementById('b').previousElementSibling;
console.log('previousElementSibling ', miElemento3);

//Numero cuatro: nextElementSibling

let miElemento4 = document.getElementById('b').nextElementSibling;
console.log('nextElementSibling ', miElemento4);

//Metodo appendChild

//insertBefore

//obtenemos el id
let miElemento = document.getElementById('padre');
//creamos un parrafo nuevo que va a decir "Blue side"
let parrafoNuevo = document.createElement('p').appendChild(document.createTextNode('Blue Side'));
//insertamos el parrafo nuevo antes que el segundo parrafo del HTML
let parrafo2 = document.getElementById('padre').getElementsByTagName('p')[1];
document.getElementById('padre').insertBefore(parrafoNuevo, parrafo2);

console.log('parrafo que se agregó ', parrafoNuevo);



//insertAfter

// function insertAfter(d,e){ 
//    let d = 'Even if it, in my arms';
//    let e = 'Blue Side';
//    if(e.nextSibling){ 
//        d.parentNode.insertBefore(e,d.nextSibling); 
//    } else { 
//        d.parentNode.appendChild(e); 
//    }
//}
