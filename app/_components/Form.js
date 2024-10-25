
export default function Form() {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12 w-full max-w-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                   Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Olowe Ade"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="adesimi@email.com"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone-number"
                  placeholder="+234 812456789"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="text"
                  id="last-time"
                  placeholder="11:00am to 1:pm"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
  
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message..."
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
  