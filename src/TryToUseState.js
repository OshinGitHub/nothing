import { useState } from 'react'

const TryToUseState = () => {
  const [input, setInput] = useState('')
  const [itemTodo, setItemTodo] = useState([])

  const inputBox = (event) => {
    setInput(event.target.value)
  }
  const addButton = (e) => {
    e.preventDefault()
    setItemTodo([...itemTodo, input])
    setInput('')
  }
  console.log(input)
  console.log(itemTodo)
  return (
    <div className="m-40 flex flex-col items-center justify-center gap-6">
      <h1 className="text-6xl text-white font-semibold ">TODO APP</h1>
      <form className="flex gap-4">
        <input
          className="w-[300px] h-10 p-2 rounded-lg border border-black"
          placeholder="Sawasdee"
          onChange={inputBox}
          value={input}
        />
        <button
          className="h-10 w-20 bg-red-200 rounded-lg border border-black"
          onClick={addButton}
        >
          ADD
        </button>
      </form>
      <ul className="w-[390px] flex-col text-center gap-3">
        {itemTodo.map((item) => {
          return <li className="text-2xl">{item}</li>
        })}
      </ul>
      <button className="text-xl w-40 h-10 bg-red-300 rounded-md">CLEAR</button>
    </div>
  )
}

export default TryToUseState
