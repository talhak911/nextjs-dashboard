"use client"
import Create from "./action"

export default function Page(){
  
    return(
        <div>
    <form action={Create} >
    <div className="flex justify-between mb-4">
        <div className="w-1/2 pr-2">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                First Name
            </label>
            <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
            
                placeholder="First Name"
                name="firstname"
            
            />
        </div>
        <div className="w-1/2 pl-2">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                Last Name
            </label>
            <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              
                placeholder="Last Name"
                name="lastname"
        
            />
        </div>
    </div>


    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
        Gender
    </label>
    <input
        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
       
        placeholder="Gender"
        name="gender"
     
    />

  <select defaultValue="" id="age">
    <option value="" disabled>select one</option>
    <option >18+</option>

  </select>
    <div className="flex justify-between">

        <button
    
            type="submit"
            className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Submit
        </button>
    </div>
</form>
<label htmlFor="age"> Age</label>
</div>)
}