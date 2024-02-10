import React from 'react';
import { Link } from 'react-router-dom';

const Accueil = () => {
    return (
        <div>
            <br />
            <center>
                <h2 className="display-5 link-body-emphasis mb-1">Bienvenu sur cette application de gestion des evenements</h2>
                <br />
                <Link to = '/afficherEvenement' className='btn btn-primary'>Afficher les evenements</Link>
            
            </center>
                <br />
                <p>
                    <b>ENONCÉ</b><br />
                    Un événement est un fait qui se produit à un moment donné et s’éttend sur une durée donnée (généralement quelques jours), rassemblant sur un site plusieurs acteurs ayant un besoin de croissance commun à tous.
                </p>
                <p>

                    <b>CARRACTÉRISTIQUE</b><br />
                    Un événement à les propriétés suivante : <br />
                    un identifiant unique : clé primaire de la table,
                    libellé : le nom de l’événement,
                    lieu : l’endroit ou se déroulement l’événement,
                    description: une description de l’événement,
                    logo: une image représentative de l’événement,
                    debut: la date de début de l’événement,
                    fin: la date clôture de l’événement,
                    categorie : la catégorie dans laquelle se place l’événement,
                    propriétaire: le créateur de l’événement ( peut être une entité physique ou morale).

                </p>
        </div>
    )
}

export default Accueil;