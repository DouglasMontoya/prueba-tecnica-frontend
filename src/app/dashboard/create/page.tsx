import { BackButton } from "@/app/components/Buttons"
import Form from "@/app/components/Form"

export default function Page(){

    return (
        <>
            <BackButton />
            <Form action='create'/>
        </>
    )
}