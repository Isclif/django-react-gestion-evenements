import {Route, Routes } from "react-router-dom";

import NavBar from "./composants/NavBar";
import AfficherEvenements from "./composants/afficherEvenements";
import CreeEvenement from "./composants/creerEvenement";
import ModifierEvenement from "./composants/modifierEvenement";
import Accueil from "./composants/Accueil";

function App(){
    return (
        <div className="container">
            <NavBar />

            <Routes>
                <Route path="/" element = {<Accueil/>} />
                <Route path="/afficherEvenement" element = {<AfficherEvenements/>} />
                <Route path="/CreerEvenement" element = {<CreeEvenement />} />
                <Route path="/:id/modifier" element = {<ModifierEvenement />} />
            </Routes>
        </div>
    )
}

export default App;