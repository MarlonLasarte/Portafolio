import React from 'react'
import mediconnect from '../assets/images/mediconnect.svg';
import safebus from '../assets/images/SafeBus.svg';
import glucemia from '../assets/images/GlucemIA.svg';

const Projects = () => {
  const projects=[
    {
        id:1,
        image: mediconnect,
        title:'MediConnect',
        desc:'Proyecto académico grupal de 4to ciclo de una página web estática, dedicada a responder a la problematica del HandOver en médicos',
        date:'June 2025',
        tech:['HTML','CSS','JS']
        
    },
    {
        id:2,
        image: safebus,
        title:'SafeBus',
        desc:'Proyecto académico grupal de 5to ciclo de una página web que responda a la problematica de inseguridad de los conductores de bus en Lima',
        date:'March 2026',
        tech:['Angular','Java','SQL']
    },
    {
        id:3,
        image: glucemia,
        title:'Glucem-IA',
        desc:'Prototipo desarrollado grupalmente en 29 horas para el reto hackathon UPC-Bagó Perú 2026 que acompaña a adultos con diabetes',
        date:'June 2026',
        tech:['Vite','React']
    },
  ]
  
    return (
        <section className='py-16 bg-gray-900' id='projects'>
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>Proyectos.</h2>
                    <div className='w-45 h-1 bg-primary mx-auto mt-2 rounded-2xl'>
                    </div>                    
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {projects.slice().reverse().map((project) =>(
                        <div key={project.id} className='bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300'> 
                        <img src={project.image} alt={project.title} className='w-full h-52 object-cover hover:opacity-90 transition-opacity duration-300'/>
                        <div className='p-4'>
                            <h3 className='text-lg font-semibold text-white group-hover:text-primary transition-colors'>{project.title}</h3>
                            
                            <p className='text-gray-400 text-sm mt-1'>
                            {project.desc}
                            </p>
                            
                            <h5 className=' font-semibold text-gray-400'>
                                {project.date}
                            </h5>

                            <div className='flex flex-wrap gap-1.5 mt-3'> 
                            {project.tech.map((tec,idx) => (
                                <span key={idx} className='text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded hover:bg-primary hover:text-white transition-colors duration-300'>
                                    {tec}
                                </span>
                            ))}
                            </div>

                        </div>
                        
                        


                        </div>

                    ))}
                </div>


            </div>

        </section>
  )
} 

export default Projects;