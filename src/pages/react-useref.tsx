import { useRef, useState } from 'react'

const ReactUseRef = () => {
  const countRef = useRef(0)
  const [count, setCount] = useState(0)

  const handleClick = () => {
    countRef.current += 1
  }

  const updateRef = () => {
    setCount(countRef.current)
  }

  console.log('countRef.current', countRef.current)

  return (
    <>
      <button onClick={handleClick}>
        you clicked {countRef.current} times
      </button>
      <button onClick={updateRef}>update: count {count}</button>
    </>
  )
}

export default ReactUseRef
