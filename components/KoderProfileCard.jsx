import React from 'react'
import Image from 'next/image'
import profilePic from '../assets/images/Nayeli.png'
import classNames from 'classnames'

export default function KoderProfileCard() {
  return (
    <div className="flex items-center h-screen w-full justify-center">
    
    <div className="w-40">
        <div className="bg-black text-white shadow-xl rounded-lg py-6 -m-3">
            <div className="photo-wrapper px-7">
                <Image className="w-4 h-4 rounded-full" src={profilePic} alt="Nayeli.png"/>
            </div>
            <div className="p-2">
                <h3 className="text-center text-xl text-white font-medium leading-8">Nayeli Gutiérrez</h3>
                <div className="text-center text-gray-400 text-xs font-semibold">
                </div>
                
                    <tr className="block">
                        <td className="block text-center px-2 py-2">@gutierreznaye</td>
                    </tr>
                    <tr className="block">
                    
                        <td className="block text-center px-2 py-2">Ciudad de México</td>
                    </tr>
                    <tr className="block">
                        <td class="block text-center px-2 py-2">Generacion 13 JavaScript</td>
                    </tr>
                
            </div>
        </div>
    </div>
    
    </div>
    
)
}
