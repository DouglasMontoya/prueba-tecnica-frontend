import { EditButton, DeleteButton, BackButton } from '@/app/components/Buttons';
import { fetchContactById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const contact = await fetchContactById(id)

    return (
        <div>
            <BackButton />
            <div>
                <div className='flex flex-col justify-center'>
                    <p className='text-4xl text-center mb-4'>{contact ? contact[0].name : ''}</p>
                    <p className='text-2xl text-center'>{contact ? contact[0].phone : ''}</p>
                    <p className='text-2xl text-center'>{contact ? contact[0].email : ''}</p>
                </div>
                <div className='flex justify-center mt-8'>
                    <div className='ml-2'><EditButton id={contact ? contact[0].id : ''} /></div>
                    <div className='ml-2'><DeleteButton id={id} /></div>
                </div>
            </div>
        </div>
    )
}