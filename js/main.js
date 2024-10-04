import showModal, {showModalBlock, showModalBlockConfirm} from './src/modal.js'

function foo() {
    setTimeout(() => console.log('Two'), 100);
    return 0
}

async function Exercice1() {
    console.log(" --- Exercice 1 --- ");

    const iframe = document.getElementById('myIframe');
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    // Вставляем HTML-код в iframe
    doc.body.innerHTML = `
        <h1>Bienvenue sur ma page</h1>
        <p>Ceci est un paragraphe.</p>
    `;

    // Находим параграф и изменяем его содержимое
    const paragraphe = doc.querySelector('p');
    console.log("Параграф перед изменением:", paragraphe.textContent);

    paragraphe.textContent = "Paragraphe modifié via JavaScript.";
    console.log("Параграф после изменения:", paragraphe.textContent);

    await showModalBlockConfirm("continuer");
}
async function Exercice2() {
    console.log(" --- Exercice 2 --- ");

    const iframe = document.getElementById('myIframe');
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    // Вставляем HTML-код в iframe
    doc.body.innerHTML = `
        <div id="conteneur"></div>
    `;

    // Создаем новый элемент <p>
    const nouveauParagraphe = doc.createElement('p');
    nouveauParagraphe.textContent = "Ceci est un nouveau paragraphe";
    console.log("Создан новый элемент:", nouveauParagraphe.textContent);

    // Добавляем новый элемент в контейнер
    const conteneur = doc.getElementById('conteneur');
    conteneur.appendChild(nouveauParagraphe);
    console.log("Элемент добавлен в контейнер.");

    await showModalBlockConfirm("continuer");
}

async function Exercice3() {
    console.log(" --- Exercice 3 --- ");

    const iframe = document.getElementById('myIframe');
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    doc.head.innerHTML = `
      <style>  
        .box {
        width: 100px;
        height: 100px;
        background-color: lightblue;
        }

        .highlight {
        border: 2px solid red;
        }
      </style>
    `;
     // Вставляем HTML-код в iframe
     doc.body.innerHTML = `
         <div class="box"></div>
    `;
   
    const box = doc.querySelector('.box');
    console.log("Класс до добавления highlight:", box.className);
    box.classList.add('highlight');
    console.log("Класс после добавления highlight:", box.className);

    await showModalBlockConfirm("continuer");
}
async function Exercice4() {
    console.log(" --- Exercice 4 --- ");

    const iframe = document.getElementById('myIframe');
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    // Вставляем CSS-стили в iframe
    doc.head.innerHTML = `
      <style>
        #conteneur {
          border: 1px solid black;
          padding: 10px;
        }
      </style>
    `;

    // Вставляем HTML-код в iframe
    doc.body.innerHTML = `
        <div id="conteneur">
          <p>Paragraphe à remplacer</p>
        </div>
    `;

    // Создаем новый элемент div
    const nouveauDiv = doc.createElement('div');
    nouveauDiv.textContent = 'Nouveau contenu';

    // Находим существующий параграф
    const paragraphe = doc.querySelector('#conteneur p');
    console.log("Параграф перед заменой:", paragraphe.textContent);

    // Заменяем параграф на новый div
    doc.getElementById('conteneur').replaceChild(nouveauDiv, paragraphe);
    console.log("Параграф заменен на новый элемент:", nouveauDiv.textContent);

    await showModalBlockConfirm("continuer");
}
async function Exercice5() {
    console.log(" --- Exercice 5 --- ");

    const iframe = document.getElementById('myIframe');
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    // Вставляем HTML-код в iframe
    doc.body.innerHTML = `
        <ul id="liste">
            <li>Élément 1</li>
            <li>Élément 2</li>
            <li>Élément 3</li>
        </ul>
    `;

    // Создаем новый элемент <li>
    const nouvelElement = doc.createElement('li');
    nouvelElement.textContent = "Élément 1.5";
    console.log("Создан новый элемент:", nouvelElement.textContent);

    // Находим список и элемент после которого нужно вставить новый элемент
    const liste = doc.getElementById('liste');
    const element2 = liste.children[1]; // Это "Élément 2"

    // Вставляем новый элемент перед "Élément 2"
    liste.insertBefore(nouvelElement, element2);
    console.log("Новый элемент добавлен между 'Élément 1' и 'Élément 2'.");

    await showModalBlockConfirm("continuer");
}
async function Exercice6() {
    console.log(" --- Exercice 6 --- ");

    const iframe = document.getElementById('myIframe');
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    // Вставляем HTML-код в iframe
    doc.body.innerHTML = `
        <ul id="liste">
            <li>Élément 1</li>
            <li>Élément 2</li>
            <li>Élément 3</li>
        </ul>
    `;

    // Находим элемент "Élément 2"
    const element2 = doc.querySelector('li:nth-child(2)'); // Это "Élément 2"
    console.log("Элемент перед удалением:", element2.textContent);

    // Удаляем элемент
    if (element2) {
        element2.remove();
        console.log("Элемент 'Élément 2' удален.");
    }

    await showModalBlockConfirm("continuer");
}


async function executeExercises() {
    await Exercice1();
    await Exercice2();
    await Exercice3();
    await Exercice4();
    await Exercice5();
    await Exercice6();
}

// Запуск основной функции
executeExercises(); 