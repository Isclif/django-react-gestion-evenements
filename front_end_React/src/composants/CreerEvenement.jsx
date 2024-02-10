import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const CreeEvenement = () => {
    const [libele, setLibele] = useState("");
    const [lieu, setLieu] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [debut, setDebut] = useState("");
    const [fin, setFin] = useState("");
    const [categorie, setCategorie] = useState("");
    const [proprietaire, setProprietaire] = useState("");

    const navigate = useNavigate()

    const ajouterEvenement = async () => {
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
            method: 'post',
            url: 'http://localhost:8000/api/',
            data: formField,
        }).then((response) => {
            console.log(response.data)
            Swal.fire('Success!', 'Evenement creer avec succes', 'success');
            navigate('/afficherEvenement');
        })
    }
    
    return (
        <div className='container'>
            <center><h1>Creer un nouveau evenement</h1></center>
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
                        <button className='btn btn-primary' onClick={ajouterEvenement}>Ajouter l'evenement</button>
                    </center>

                    <br />
                    <br />
            </div>
            
        </div>
    )
}

export default CreeEvenement;