'use client'

import { Contact } from "../lib/definitions"
import { useState } from "react"
import { createContact, updateContact } from "@/app/lib/data"
import { SubmitButton } from "./Buttons"

export default function Form( { contact, action }: { contact?: Contact, action: string } ) {
    const [name, setName] = useState(contact ? contact.name : '')
    const [phone, setPhone] = useState(contact ? contact.phone : '')
    const [email, setEmail] = useState(contact ? contact.email : '')
    const id = contact ? contact.id : ''

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if (action === 'create') {
            createContact({name, phone, email})
        }else if(action === 'edit'){
            updateContact({id, name, phone, email})
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="max-w-xs mx-auto">
                <div className="mb-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="border rounded-md w-full px-2 focus:border-blue-500 border-gray-300 h-10" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" id="phone" className="border rounded-md w-full px-2 focus:border-blue-500 border-gray-300 h-10" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="border rounded-md w-full px-2 focus:border-blue-500 border-gray-300 h-10" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <SubmitButton />
            </div>
        </form>
    )
}