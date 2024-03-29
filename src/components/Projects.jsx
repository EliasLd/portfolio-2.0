import React, { useState, useEffect } from 'react';

export default function Projects() {
    //State pour stocker les projets
  const [projectsList, setProjectsList] = useState([]);

    //Permet de fetch les projets et utilise le state pour les stocker
  useEffect(() => {
    fetch('/projects.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          console.error('Erreur de récupération des projets')
        }
        return res.json();
      })
      .then((data) => {
        setProjectsList(data);
      })
      .catch((error) => {
        console.error('Error de récupération des projets : ', error);
      });
  }, []);

  return (
    <div className='flex justify-center mt-10'>
        <div className='grid grid-cols-2 p-4 gap-5'>
            {projectsList.map((project, i) => (
              <div key={i} >
                  {/* will add projects details */}
              </div>
            ))}
        </div>
    </div>
  );
}
