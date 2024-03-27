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
        <div className='grid grid-cols-2 gap-5 p-4'>
            {projectsList.map((project, i) => (
                <div key={i} className='flex flex-col p-3 rounded-3xl bg-sky-800'>
                    
                </div>
            ))}
        </div>
    </div>
  );
}
