import React from 'react'

export default function Container({children}) {
  return (
    <div className="lg:max-w-[1840px] md:px-0 max-w-full px-5 mx-auto">
      {children}
    </div>
  );
}
