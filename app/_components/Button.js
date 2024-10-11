import React from 'react'

export default function Button( {text, nav, orange}) {
  return (
    <button className={`py-[14px] px-[30px] border  text-white rounded-lg font-[500] relative lg:w-fit`}>
        {text}

    </button>
  )
}
