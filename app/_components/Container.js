import React from 'react'

export default function Container({children}) {
  return (
    <div className="md:max-w-[1640px] lg:px-0 max-w-full px-5 mx-auto">
        {children}

    </div>
  )
}
