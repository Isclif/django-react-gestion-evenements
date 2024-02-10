import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const ModifierEvenement = () => {
    const [libele, setLibele] = useState("");
    const [lieu, setLieu] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [debut, setDebut] = useState("");
    const [fin, setFin] = useState("");
    const [categorie, setCategorie] = useState("");
    const [proprietaire, setProprietaire] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    const chargerEvenements = async () => {
        const response = await axios.get(`http://localhost:8000/api/${id}/`)
        console.log(response.data)
        setLibele(response.data.libele);
        setLieu(response.data.lieu);
        setDescription(response.data.description);
        setImage(response.data.logo);
        setDebut(response.data.debut);
        setFin(response.data.fin);
        setCategorie(response.data.categorie);
        setProprietaire(response.data.proprietaire);
    }

    useEffect(() => {
        chargerEvenements();
    }, [])

    const modifierEvenement = async () => {
        let formField = new FormData();

        formField.append('libele', libele);
        formField.append('lieu', lieu);
        formField.append('description', description);
        formField.append('debut', debut);
        formField.append('fin', fin);
        formField.append('categorie', categorie);
        formField.append('proprietaire', proprietaire);
        if(image !== "") {
            formField.append('logo', image);
        }

        await axios({
            method: 'PUT',
            url: `http://localhost:8000/api/${id}/`,
            data: formField,
        }).then((response) => {
            console.log(response.data);
            Swal.fire('Success!', 'Evenement modifier avec succes', 'success');
            navigate('/afficherEvenement');
        })
    }

    return (
        <div>
            <center>
                <h1>Modifier l'evenement</h1>
                <br />
                <img src={image} alt="" width='300px'/>
            </center>
            <br />

            <div className='form-group'>
                    <input
                    type="text" 
                    placeholder='Entrez le nom de votre evenement...'
                    className='form-control form-control-lg'
                    name='libele'
                    value={libele}
                    onChange={(e) => setLibele(e.target.value)}
                    />

                    <br />

                    <input
                    type="text" 
                    placeholder='Entrez le lieu de votre evenement...'
                    className='form-control form-control-lg'
                    name='lieu'
                    value={lieu}
                    onChange={(e) => setLieu(e.target.value)}
                    />
                    
                    <br />

                    <textarea
                     type="text" 
                     placeholder='Entrez la description de votre evenement...'
                     className='form-control form-control-lg'
                     name='description'
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                     />

                    <br />
                    <label>Choisissez l'image de l'evenement : </label>
                    <input
                     type="file" 
                     className='form-control form-control-lg'
                     name='image'
                     onChange={(e) => setImage(e.target.files[0])}
                     required
                     />
                    
                    <br />

                    <label>date de debut de l'evenement : </label>
                    <input
                     type="date" 
                     className='form-control form-control-lg'
                     name='debut'
                     value={debut}
                     onChange={(e) => setDebut(e.target.value)}
                     />

                   <br />

                   <label>date de fin de l'evenement: </label>
                    <input
                     type="date" 
                     className='form-control form-control-lg'
                     name='fin'
                     value={fin}
                     onChange={(e) => setFin(e.target.value)}
                     />

                     <br />
                    <input
                     type="text" 
                     placeholder='Entrez la categorie de votre evenement...'
                     className='form-control form-control-lg'
                     name='categorie'
                     value={categorie}
                     onChange={(e) => setCategorie(e.target.value)}
                     />

                     <br />

                    <input
                     type="text" 
                     placeholder='Entrez le nom du proprietaire de votre evenement...'
                     className='form-control form-control-lg'
                     name='proprietaire'
                     value={proprietaire}
                     onChange={(e) => setProprietaire(e.target.value)}
                     />

                     <br />

                    <center>
                        <button className='btn btn-primary' onClick={modifierEvenement}>Modifier l'evenement</button> &nbsp;
                        <Link to = '/afficherEvenement' className='btn btn-danger'>Annuler</Link>
                    </center>

                    <br />
                    <br />
            </div>
        </div>
    )
}

export default ModifierEvenement;