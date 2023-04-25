const getThemes = () => {
    return fetch('http://127.0.0.1:8000/api/themes', { mode: 'no-cors' })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Une erreur est survenue, vérifier votre endPoint.");
        });
};

const displayThemes = (themes) => {
    const tbody = document.querySelector('tbody');
    const select = document.getElementById('Themes');

    themes.forEach(theme => {
        // Ajouter une ligne au corps de tableau
        const tr = document.createElement('tr');
        const tdTitre = document.createElement('td');
        tdTitre.textContent = theme.Titre;
        console.log(tdTitre.textContent)
        tr.appendChild(tdTitre);
        tbody.appendChild(tr);

        // Ajouter une option à la liste déroulante
        const option = document.createElement('option');
        option.textContent = theme.Titre;
        select.appendChild(option);
    });
};

getThemes()
    .then(resultat => displayThemes(resultat))
    .catch(error => console.log(error));