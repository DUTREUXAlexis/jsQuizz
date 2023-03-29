
const getThemes = () => {
    return fetch( '/api/theme')
        .then(response=>
        {
            console.log(response)
            //tester si la reponse est OK
            if(response.ok) {
                return response.json()
            }
            throw new Error("Une erreur est survenue, vérifier votre endPoint.")
        })
        .catch(response =>
        {
            console.log('dsqdsqdq')
        })
}
//rendre disponible cette fonction dans d'autres modules :
getThemes()
  .then((resultat)=>console.log(resultat))
  .catch((resultat) => console.log(resultat))
//export {getThemes}
//