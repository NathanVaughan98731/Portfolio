import React from 'react'
import './BouncingWaveHeading.css'

const BouncingWaveHeading = () => {
    const firstName = "Nathan";
    const lastName = "Vaughan";
  
    return (
        <h1 className="bouncing-wave-heading blocky">
            {firstName.split('').map((char, index) => (
                <span key={index} className={`bounce-${index + 1}`}>
                    {char}
                </span>
            ))}
            <div> </div>
            {lastName.split('').map((char, index) => (
                <span key={index} className={`bounce-${index + 6}`}>
                    {char}
                </span>
            ))}
        </h1>
    );
}

export default BouncingWaveHeading