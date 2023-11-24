import { EditButton, DeleteButton, ViewButton } from "./Buttons"
import { ContactProps, Contact } from "../lib/definitions"
import { fetchContacts } from "../lib/data"

export default async function ListContacts() {

    const contacts = await fetchContacts()

    return (
        <div className="w-full bg-slate-200 mt-4 rounded-md grow pb-2 max-h-96 overflow-y-auto">
            <ul>
                {contacts.map((contact: Contact) => (
                    <Contact id={contact.id} name={contact.name} key={contact.id} />
                ))}
            </ul>
        </div>
    )
}

function Contact( { id, name }: ContactProps ) {
    return (
        <li className="flex items-center bg-slate-50 p-2 rounded-md mx-2 mt-2 shadow">
            <p className="grow">{ name }</p>
            <div className="flex">
                <ViewButton id={id} />
                <div className="ml-2">
                    <EditButton id={id} />
                </div>
                <div className="ml-2">
                    <DeleteButton id={id} />
                </div>
            </div>
        </li>
    )
}