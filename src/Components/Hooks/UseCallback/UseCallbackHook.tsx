import ItemsList from '@components/Hooks/UseCallback/ItemsList'
import { useCallback, useState } from 'react'

export const UseCallbackHook = () => {
  const [value, setValue] = useState(0)
  const [dark, setDark] = useState(false)

  //this will run every time the component re-renders
  // const getItems = (incrementor: number) => {
  //   return [value, value + incrementor, value + incrementor * 2]
  // }

  //this will run only when the value changes, it will be cached
  const getItems = useCallback(
    (incrementor: number) => {
      return [value, value + incrementor, value + incrementor * 2]
    },
    [value]
  )

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
      <h2>useCallback Hook</h2>
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
      <ItemsList getItems={getItems} />
    </div>
  )
}
