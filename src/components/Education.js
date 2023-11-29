import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className="center">
        <h2>Education</h2>
        <div>
            <p className='paragraph-container'>Monash University - Bachelor of Electrical and Computer Systems Engineering (Honours)</p>
            <p className='paragraph-container'>Second Class Honours Average | Distinction Average</p>
            <p className='paragraph-container'>WAM: 75.316</p>
            <p>GPA: 3.153</p>
        </div>
        <div>
            <p className='paragraph-container'>Monash University - Bachelor of Advance Computer Science</p>
            <p className='paragraph-container'>Distinction Average</p>
            <p className='paragraph-container'>WAM: 75.316</p>
            <p>GPA: 3.153</p>
        </div>
        <div>
            <p className='paragraph-container'>Fountain Gate Secondary College - Victorian Certificate of Education</p>
            <p>Year 12 Academic Excellence</p>
        </div>
    </div>
  )
}

export default Education