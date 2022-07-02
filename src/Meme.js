import React from 'react';

export default function Meme(){
    return(
            <main>
                <div className='form'>
                    <input className='form-input' placeholder='Top text' type='text' />
                    <input className='form-input' placeholder='Bottom text' type='text' />
                <button className='form-button'>Get a new meme image  🖼</button>
                </div>
            </main>
    );
}
