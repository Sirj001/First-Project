import React from 'react'
import './styles1.css'

function new1() {
  return (
    <div>
        <div className='container'>
            <div>
                <p>Name</p>
                <input className='back' type="text" />
            </div>

            <div>
                <p>Email</p>
                <input className='back' type="text" />
            </div>

            <div>
                <p>Password</p>
                <input className='back' type="text" />
            </div>

        </div>
            <div className='btn'>
                <button>Sign Up</button> 
            </div>
    </div>
  )
}

export default new1