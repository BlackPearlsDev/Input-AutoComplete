const searchBar = document.getElementById('search'); // on recupere la barre de recherche dans le DOM
const list = document.getElementById('result'); // on recupere la section 'result' dans le DOM
const ulList = document.getElementById('result-list'); // on recupere la 'ul' dans le DOM

searchBar.onkeyup = (e) => {
    let userinput = e.target.value; // texte tape par l'utilisateur dans l'input
    let filterarray = []; // tableau vide pour effacer

    if (searchBar.value.length < 1) {
        list.classList.add('hide');
    }

    if(userinput) { // si la saisie de l'utilisateur ...
        filterarray = choices.filter((data) => {  // correspond -> filtrer valeur(s) du tableau, les passer en minuscules
            return data.val.toLocaleLowerCase().startsWith(userinput.toLocaleLowerCase()); // retourner les termes par rapport a la saisie de l'utilisateur
        });

        filterarray = filterarray.map((data) => { // 
            return data = `<li>${data.name}</li>`; //concatenation elts html + data pour affichage des resultats
        });

        list.classList.add('active'); // pour derouler l'autocomplete
        list.classList.remove('hide'); // on retire la class hide pour monstrer la box de suggestions
        showResult(filterarray); // on invoque showResult et on transmets le tableau filtre

        let allList = list.querySelectorAll('li'); // on stocke dans une variable tout nos 'li' de la liste
        for (let i = 0; i < allList.length; i++) { // on boucle sur les 'li' de notre liste
            allList[i].setAttribute('onclick', 'select(this)'); // on applique un attribut sur tout les 'li' en invoquant la fonction select et on cible 'this' donc l'element cible 
        }
    } else {
        list.classList.remove('active'); // pour faire disparaitre l'autocomplete
    };
};

function select (element) {
    let selectUserInput = element.textContent; // on stock le contenue de l'element dans notre saisie
    searchBar.value = selectUserInput; // on stock dans notre saisie le contenu 'text' de l'element
    searchBar.classList.remove('active'); // pour faire disparaitre l'autocomplete
};

function showResult (list) {
    let listdata; // on initialise les donnees de la liste

    if(!list.length) { // si la liste n'es pas vide
        userinput = searchBar.value; // alors on stock la valeur de notre input
        listdata = `<li>${userinput}</li>`; // et on l'affiche dans un 'li'
    } else {
        listdata = list.join(''); // sinon, cree et renvoie une nouvelle string en concatenant tous les elts du tableau
    }
    ulList.innerHTML = listdata; // on l'affiche dans le DOM
}