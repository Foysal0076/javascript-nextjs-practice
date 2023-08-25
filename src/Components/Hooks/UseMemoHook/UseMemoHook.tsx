import UseMemoChild from '@components/Hooks/UseMemoHook/UseMemoChild'
import { useMemo, useState } from 'react'

const slowFunction = (num: number) => {
  console.log('Calling Slow Function')
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2
}

export const UseMemoHook = () => {
  const [value, setValue] = useState(0)
  const [dark, setDark] = useState(false)

  //this will run every time the component re-renders
  // const doubleNumber = slowFunction(value)

  //this will run only when the value changes, it will be cached
  const doubleNumber = useMemo(() => {
    return slowFunction(value)
  }, [value])

  const style = {
    color: dark ? '#fff !important' : '#000',
    backgroundColor: dark ? '#000' : '#fff',
    padding: '1rem',
  }

  const changeTheme = () => {
    setDark((prev) => !prev)
  }

  return (
    <div style={style}>
      <button
        className='py-1 px-2 rounded-md bg-success-400'
        onClick={changeTheme}>
        Toggle theme
      </button>
      <h2>useMemo Hook</h2>
      <input
        type='number'
        value={value}
        className='block my-4'
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button
        className='bg-primary-500 px-4 py-2 text-neutral-0 rounded-md'
        onClick={() => setValue((prev) => prev + 1)}>
        Increment
      </button>
      <UseMemoChild value={doubleNumber} />
    </div>
  )
}
