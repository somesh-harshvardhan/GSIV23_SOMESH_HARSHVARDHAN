import {redirect} from 'next/navigation';

export default function Home() {
  redirect("/list")  
  return (
    <main>
     Redirecting....
    </main>
  )
}
