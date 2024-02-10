import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';

const AfficherEvenements = () => {

    const [evenements, steEvenement] = useState([])
    const navigate = useNavigate();

    const getEvenement = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        steEvenement(response.data);
    }

    useEffect(() => {
        getEvenement();
    }, [])

    const supprimerEvenement = async (id) => {
        await axios.delete(`http://localhost:8000/api/${id}/`);
        Swal.fire('Success!', 'Evenement supprimer avec succes', 'success');
        navigate('/');
    }

    return (
        <div>
            <h1>Listes des Evenements<Link to='/CreerEvenement' className='btn btn-primary float-end'>Ajouter</Link></h1>
            <br />
            {
                evenements.map((evenement, index) => (
                    <div key={index}>
                        <hr className="featurette-divider" />
                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading fw-normal lh-1">Libele : {evenement.libele} <span className="text-body-secondary"> a {evenement.lieu}</span></h2>
                                <p className="lead">Description : {evenement.description}</p>
                                <p>Date de debut : {evenement.debut}</p>
                                <p>Date de fin : {evenement.fin}</p>
                                <p>Categorie : {evenement.categorie}</p>
                                <p>Proprietaire : {evenement.proprietaire}</p>
                            </div>
                            <div className="col-md-5">
                                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img" src={evenement.logo} aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                            </div>
                        </div>
                        <br />
                        <Link to={`/${evenement.id}/modifier`} className='btn btn-primary'>Modifier</Link> &nbsp;
                        <Link onClick={() => supprimerEvenement(evenement.id)} className='btn btn-danger'>Supprimer</Link>
                        <br />
                        <br />
                            
                    </div>

                ))
            }
        </div>
    )
}

export default AfficherEvenements;