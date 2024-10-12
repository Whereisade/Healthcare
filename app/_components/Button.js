import React from 'react'

export default function Button( {text, bordercolo, tcolo}) {
  return (
    <button className={`py-[14px] px-[30px] border ${tcolo} ${bordercolo} rounded-lg font-[500] relative lg:w-fit`}>
        {text}

    </button>
  )
}
