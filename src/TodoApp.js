import { useState } from 'react'
import { Link } from 'react-router-dom'

const TodoApp = () => {
  const [input, setInput] = useState('')
  const [itemTodo, setItemTodo] = useState([])

  const addButton = (e) => {
    e.preventDefault()
    setItemTodo([...itemTodo, input])
    setInput('')
  }

  function removeTodo(index) {
    let remove = [...itemTodo]
    remove.splice(index, 1)
    setItemTodo(remove)
  }

  function clearAllTodo() {
    setItemTodo([])
  }

  console.log(input)
  console.log(itemTodo)

  return (
    <div className="m-40 flex flex-col items-center justify-center gap-6">
      <div className="flex gap-4 text-xl">
        <Link to="/">HOME</Link>
        <Link to="/MusicStore">MUSIC STORE</Link>
      </div>
      <div className="m-12 flex flex-col items-center justify-center gap-6">
        <h1 className="text-6xl text-white font-semibold ">TODO APP</h1>
        <form className="flex gap-4">
          <input
            className="w-[300px] h-10 p-2 rounded-lg border border-black"
            placeholder="Sawasdee"
            onChange={(event) => {
              setInput(event.target.value)
            }}
            value={input}
          />
          <button
            className="h-10 w-20 bg-red-200 rounded-lg border border-black"
            onClick={addButton}
          >
            ADD
          </button>
        </form>
        <ul className="w-[400px] flex-col text-center">
          {itemTodo.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-4 text-xl font-extralight"
              >
                <li className="w-full  bg-slate-300 m-2 rounded-md">{item}</li>
                <button
                  className="w-[27px] h-[27px] bg-slate-300 rounded-md flex items-center justify-center"
                  onClick={() => {
                    removeTodo(index)
                  }}
                >
                  x
                </button>
              </div>
            )
          })}
        </ul>
        <button
          className="text-xl w-40 h-10 bg-red-300 border border-black rounded-md"
          onClick={clearAllTodo}
        >
          CLEAR
        </button>
      </div>
    </div>
  )
}

export default TodoApp
