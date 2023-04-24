const getThemes = () => {
    return fetch( 'http://127.0.0.1:8000/api/theme')
        .then(response=>
        {
            if(response.ok) {
                return response.json()
            }
            throw new Error("Une erreur est survenue, vérifier votre endPoint.")
        })
}
//rendre disponible cette fonction dans d'autres modules :
getThemes()
  .then((resultat)=>displayThemes(resultat))
  .catch(error => console.log(error))


export {getThemes}

const displayThemes = (Themes) => {
    const tr = document.createElement('tr')
    const tbody = document.querySelector('tbody')
    Themes.forEach( theme => {
        const listeDeroulante = document.getElementById('Themes')
        const a = document.createElement('a')
        a.textContent = theme.libelle
        listeDeroulante.appendChild(a)

        tbody.appendChild(tr)
    })

}

displayThemes()