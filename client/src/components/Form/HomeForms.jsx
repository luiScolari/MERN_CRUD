
export const HomeForms = () => {
  return (
   <>
      <div className="w-full max-w-xs">
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2" for="username">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="arthur@gmail.com"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-md font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </a>
          </div>
        </form>
    </div>
 </>
  )
}
