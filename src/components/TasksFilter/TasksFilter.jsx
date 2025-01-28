export default function TasksFilter({ setDone }) {
  return (
    <>
      <button type='button' onClick={() => setDone('All')}>
        All
      </button>
      <button type='button' onClick={() => setDone('Active')}>
        Active
      </button>
      <button type='button' onClick={() => setDone('Completed')}>
        Completed
      </button>
    </>
  )
}
