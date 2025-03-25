import React from 'react'

function SectionWithTitle({title, children}) {
  return (
    <section className="w-full p-5 bg-amber-100 block">
        <h2 className='mb-4 text-2xl font-bold'>{title}</h2>
        {children}
    </section>
  )
}

export default SectionWithTitle