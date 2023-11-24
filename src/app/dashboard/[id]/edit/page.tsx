import { BackButton } from "@/app/components/Buttons"
import Form from "@/app/components/Form"
import { fetchContactById } from "@/app/lib/data";


export default async function Page({ params }: { params: { id: string } }){
    const id = params.id;
    const contact = await fetchContactById(id)

    return (
        <>
            <BackButton />
            <Form contact={contact[0]} action="edit" />
        </>
    )
}