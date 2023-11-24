'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
require('dotenv').config()

/**
 * Función para obtener todos los contactos del backend.
 * 
 * Esta función realiza una solicitud GET al endpoint del backend especificado en la variable de entorno `URL_BACKEND`.
 * 
 * @returns {Promise} Una promesa que se resuelve con la lista de contactos obtenida del backend.
 * 
 * @throws {Error} Si ocurre un error durante la solicitud al backend, se lanza un error.
 */
export async function fetchContacts() {
    try {
        const res = await fetch(
            `${process.env.URL_BACKEND}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }
        )

        if (!res.ok) {
            throw new Error('Error al obtener los datos');
        }

        const contacts = await res.json()

        return contacts
    } catch (error) {
        console.error(error)
        throw error
    }
}

/**
 * Función para obtener un contacto específico por su ID del backend.
 * 
 * Esta función realiza una solicitud GET al endpoint del backend especificado en la variable de entorno `URL_BACKEND`, 
 * añadiendo el ID del contacto al final de la URL.
 * 
 * @param {string} id - El ID del contacto que se desea obtener.
 * 
 * @returns {Promise} Una promesa que se resuelve con el contacto obtenido del backend.
 * 
 * @throws {Error} Si ocurre un error durante la solicitud al backend, se lanza un error.
 */
export async function fetchContactById(id: string) {
    try {
        const res = await fetch(
            `${process.env.URL_BACKEND}/${id}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }
        )

        if (!res.ok) {
            throw new Error('Error al obtener los datos');
        }

        const contact = await res.json()

        return contact
    } catch (error) {
        console.error(error)
        throw error
    }
}

/**
 * Función para eliminar un contacto específico por su ID del backend.
 * 
 * Esta función realiza una solicitud DELETE al endpoint del backend especificado en la variable de entorno `URL_BACKEND`, 
 * añadiendo el ID del contacto al final de la URL.
 * 
 * @param {string} id - El ID del contacto que se desea eliminar.
 * 
 * @throws {Error} Si ocurre un error durante la solicitud al backend, se lanza un error.
 */
export async function deleteContact(id: string) {
    try {
        const res = await fetch(
            `${process.env.URL_BACKEND}/${id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            }
        )

        if (!res.ok) {
            throw new Error('Error al obtener los datos');
        }

    } catch (error) {
        console.error(error)
        throw error
    }

    revalidatePath('/dashboard')
    redirect('/dashboard')
}

/**
 * Función para crear un nuevo contacto en el backend.
 * 
 * Esta función realiza una solicitud POST al endpoint del backend especificado en la variable de entorno `URL_BACKEND`, 
 * enviando los datos del nuevo contacto en el cuerpo de la solicitud.
 * 
 * @param {Object} contact - El contacto que se desea crear.
 * @param {string} contact.name - El nombre del contacto.
 * @param {string} contact.phone - El teléfono del contacto.
 * @param {string} contact.email - El correo electrónico del contacto.
 * 
 * @throws {Error} Si ocurre un error durante la solicitud al backend, se lanza un error.
 */
export async function createContact({ name, phone, email }: { name: string, phone: string, email: string }) {
    try {
        const res = await fetch(
            `${process.env.URL_BACKEND}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    phone,
                    email
                })
            }
        )

        if (!res.ok) {
            throw new Error('Error al obtener los datos');
        }

    } catch (error) {
        console.error(error)
        throw error
    }

    revalidatePath('/dashboard')
    revalidatePath('/dashboard/create')
    redirect('/dashboard')
}

/**
 * Función para actualizar un contacto existente en el backend.
 * 
 * Esta función realiza una solicitud PUT al endpoint del backend especificado en la variable de entorno `URL_BACKEND`, 
 * añadiendo el ID del contacto al final de la URL y enviando los datos actualizados del contacto en el cuerpo de la solicitud.
 * 
 * @param {Object} contact - El contacto que se desea actualizar.
 * @param {string} contact.id - El ID del contacto.
 * @param {string} contact.name - El nombre del contacto.
 * @param {string} contact.phone - El teléfono del contacto.
 * @param {string} contact.email - El correo electrónico del contacto.
 * 
 * @throws {Error} Si ocurre un error durante la solicitud al backend, se lanza un error.
 */
export async function updateContact({ id, name, phone, email }: { id: string, name: string, phone: string, email: string }) {
    try {
        const res = await fetch(
            `${process.env.URL_BACKEND}/${id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    phone,
                    email
                })
            }
        )

        if (!res.ok) {
            throw new Error('Error al obtener los datos');
        }

    } catch (error) {
        console.error(error)
        throw error
    }

    revalidatePath('/dashboard')
    revalidatePath(`/dashboard/${id}/edit`)
    redirect('/dashboard')
}
