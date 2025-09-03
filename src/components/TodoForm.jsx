import { useState } from "react"

function TodoForm({ addTodo }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa..."
        className="px-4 py-2 rounded-lg text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
      >
        Adicionar
      </button>
    </form>
  )
}

export default TodoForm