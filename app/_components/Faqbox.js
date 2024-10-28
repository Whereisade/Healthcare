'use client';
import { faqs } from './Faqdata';

import { useState } from 'react';

export default function Faqbox({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="border border-gray-300 rounded-lg p-4 cursor-pointer bg-white hover:bg-gray-50 transition duration-300"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <span className="text-xl">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}

