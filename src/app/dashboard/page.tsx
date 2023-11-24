import { NewButton } from "../components/Buttons";
import ListContacts from "../components/ListContacts";

export default function Page() {
    return (
        <>
            <div className="flex h-10">
                <input type="text" name="in-search" id="in-search" className="border rounded-lg w-full px-2 h-full focus:border-blue-500 border-gray-300" placeholder="John D..." />
                <NewButton />
            </div>
            <ListContacts />
        </>
    )
}