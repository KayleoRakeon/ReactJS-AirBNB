
// 1 - Créer et utiliser un composant Appartment 
// qui aura pour props : Un disponibilité, un nom, un prix (nombre), une note (nombre)

import Appartement from './Appartement'
import Header from './Header'

// 3 - Créer un tableau comportant
// les données des appartement pour ne
// pas avoir à recopier tous les appels

const appartements = [
  {
    key: 0,
    isAvailable: true,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
    name: "Large Architect flat - Hypercentral 70m2",
    price: 45,
    note: 4,
  },

  {
    key: 1,
    isAvailable: false,
    image: "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
    name: "Studio Luxe - Champs ElyséesLarge Architect flat - Hypercentral 70m2",
    price: 55,
    note: 5,
  },

  {
    key: 2,
    isAvailable: true,
    image: "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg",
    name: "Studio de caractère, Bastille",
    price: 36,
    note: 3,
  },

  {
    key: 3,
    isAvailable: true,
    image: "https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg",
    name: "Beau studio à 100m du Moulin Rouge",
    price: 25,
    note: 1,
  }
]

const App = () => (
  <div>
    {/* // 2 - Créer 2 nouveaux composants : 
    // > Un composant Header
    // > Un composant Searchbar dans le composant Header
    // Puis les afficher dans notre composant App */}
    <Header title="Water BNB" />
    { appartements.map(appart => <Appartement {...appart} />)}
  </div>
)

export default App

// 2 - Créer 2 nouveaux composants : 
// > Un composant Header
// > Un composant Searchbar dans le composant Header
// Puis les afficher dans notre composant App
