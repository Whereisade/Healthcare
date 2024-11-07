

export default function AppointmentForm() {
  return (
    <div className="md:h-[722px] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12 w-full max-w-xl">
        <form className="space-y-6" action="https://formsubmit.co/fawazadewuyi23@gmail.com" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="Name"
                placeholder="Ayo Balogun"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="Number"
                placeholder="+234 812456789"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="Time" className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                placeholder=""
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
          </div>

         
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea

              id="message"
              type="text"
              rows="4"
              name="message"
              placeholder="Type your message..."
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book an appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
