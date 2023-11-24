'use client'
import { deleteContact } from "../lib/data"

export function NewButton() {
    return (
        <a href="/dashboard/create" className="px-5 flex items-center text-white shadow-md rounded-lg transition-all duration-200 h-10 max-h-10 bg-green-400 hover:bg-green-500 ml-4">New</a>
    )
}

export function ViewButton({id}: {id:string}) {
    return (
        <a href={`/dashboard/${id}`} className="px-5 flex items-center text-white shadow-md rounded-lg transition-all duration-200 h-10 max-h-10 bg-sky-400 hover:bg-sky-500 ml-4">View</a>
    )
}

export function EditButton( { id }: { id: string } ){
    return (
        <a href={`/dashboard/${id}/edit`} className="px-5 flex items-center text-white shadow-md rounded-lg transition-all duration-200 h-10 max-h-10 bg-yellow-400 hover:bg-yellow-500">Edit</a>
    )
}

export function DeleteButton( { id }: { id: string } ){

    function handleClick(){
        deleteContact(id)
    }

    return (
        <button onClick={handleClick} className="px-5 flex items-center text-white shadow-md rounded-lg transition-all duration-200 h-10 max-h-10 bg-red-400 hover:bg-red-500">Delete</button>
    )
}

export function BackButton(){

    return (
        <a href="/dashboard" className={`px-5 flex items-center text-black hover:text-slate-500 transition-all duration-200 h-10 max-h-10 mb-10`}>Go to dashboard</a>
    )
}

export function SubmitButton(){
    return (
        <button type="submit" className="px-5 flex items-center text-white shadow-md rounded-lg transition-all duration-200 h-10 max-h-10 bg-sky-400 hover:bg-sky-500 w-full mt-6 justify-center">Submit</button>
    )
}