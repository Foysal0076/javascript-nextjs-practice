import { memo, useEffect, useState } from 'react'

const ItemsList = ({
  getItems,
}: {
  getItems: (incrementor: number) => number[]
}) => {
  const [numbers, setNumbers] = useState<number[]>([])

  useEffect(() => {
    console.log('updating')
    setNumbers(getItems(5))
  }, [getItems])

  console.log('Item List re-rendered')

  return (
    <div>
      {numbers.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
export default memo(ItemsList)
