function TodoFilter({ setFilter }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => setFilter("all")}
        className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg"
      >
        Todas
      </button>
      <button
        onClick={() => setFilter("active")}
        className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg"
      >
        Ativas
      </button>
      <button
        onClick={() => setFilter("completed")}
        className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg"
      >
        Concluídas
      </button>
    </div>
  )
}

export default TodoFilter