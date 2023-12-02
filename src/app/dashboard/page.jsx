import { redirect } from "next/navigation"

export default function page() {
    console.log('object')
    redirect('/');
    
    return (
        <div>

        </div>
    )
}
