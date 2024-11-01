import React from 'react'

export default function Button( {text, bordercolo, tcolo, bcolo}) {
  return (
    <button className={`py-[14px] px-[30px] hover: border ${bcolo} ${tcolo} ${bordercolo} rounded-lg font-[500] relative w-full lg:w-fit`}>
        {text}

    </button>
  )
}
