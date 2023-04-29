import { ChangeEvent, useState } from "react"
const App = (): JSX.Element => {

  const [term, setTerm] = useState('');

  const onInputChange = (e: ChangeEvent <HTMLInputElement> ) => {
    setTerm(e.target.value)
    console.log(term)
  }
  // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

  return (
    <main className="flex justify-center items-center
     bg-gradient-to-br from-sky-400 
     via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="w-full md:max-w-
      [500px] p-4 flex flex-col text-center
      items-center justify-center md:px-10
      lg:p-24 h-full lg:h-[500px] bg-white
      bg-opacity-20 backdrop-blur-lg rounded
      drop-shadow-lg text-zinc-700 ">
      <h1 className="text-4xl 
      font-thin">Weather<span className="font-black">Forecast</span></h1>
      <p className="text-sm mt-2">Введите название города в котором
       вы хотите узнать погоду и выберите его из списка</p>
      
        <div className="flex mt-10 md:mt-4">
          <input type="text" 
          value={term}
          onChange={onInputChange}
          className="bg-zinc-100 appearance-none border-2 border-white rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-zinc-100"></input>
          
          <button className="rounded-r-md border-2 border-zinc-100
          hover:border-zinc-500 hover:text-zinc-500  text-zinc-1
          px-2 py-1 cursor-pointer">
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
