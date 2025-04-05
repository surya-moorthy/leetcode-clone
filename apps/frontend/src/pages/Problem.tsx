import app from "./utils/firebase";


export default function Problem() {
  return (
    <div className='text-4xl font-serif font-bold underline'>{app.name}</div>
  )
}
