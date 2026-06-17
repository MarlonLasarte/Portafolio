import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import React from 'react';

const Certificates = () => {
  const certifications =[
    {
        id:1,
        title:'Scrum Fundamentals Certified (SFC)',
        issuer:'SCRUMstudy - Scrum and Agile',
        date:'June 2025',
        link:'https://www.scrumstudy.com/certification/verify?type=SFC&number=1083234',
        desc:"Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum; learn about key concepts in Scrum as defined in the SBOK® Guide; and to get a basic understanding of how Scrum framework works in delivering successful projects."
    },
    {
        id:2,
        title:'Blockchain',
        issuer:'Coursera - University at Buffalo',
        date:'June 2025',
        link:'https://coursera.org/share/395b217b2fca743f747d88fc056024fb',
        desc:"Understand smart contracts, blockchain technology, decentralized application and how to think of innovative application models, leveraging the blockchain technology."
    },
    {
        id:3,
        title:'Introduction to MongoDB',
        issuer:'MongoDB',
        date:'November 2025',
        link:'https://learn.mongodb.com/c/5H8nqsjcQHSyn5iLQ6PtDg',
        desc:"Database NoSQL"
    }
    ]  

    return (
    <section className='text-white py-20' id='certificates'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'
                >Achievements</p>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                    Certificados.
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {certifications.map((cert) => (
                    <div key={cert.id} data-aos='zoom-in' className='group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]'>
                        <div className='absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform'>
                            <Award className='text-white' size={24} />
                        </div>
                        <div className='flex items-center gap-4 mb-4 text-xs text-gray-400'>

                            <span className='flex items-center gap-1'>
                                <ShieldCheck size={14} className='text-primary'/>
                                {cert.issuer}
                            </span>
                            <span className='flex items-center gap-1'>
                                <Calendar size={14} />
                                {cert.date}
                            </span>
                        </div>
                        <h3 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
                            {cert.title}
                        </h3>
                        <p className='text-gray-400 text-sm mb-6 line-clamp-6'>
                            {cert.desc}
                        </p>
                        <a href={cert.link} target='_blank' rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1'>
                            View Certificate <ExternalLink size={14}/>
                        </a>





                    </div>


                ))}

            </div>

        </div>

    </section>
  )
}

export default Certificates;