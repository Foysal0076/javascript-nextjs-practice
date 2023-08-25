import { memo } from 'react'

type Props = {
  value: number
}
const UseMemoChild = ({ value }: Props) => {
  console.log('UseMemoChild component re-rendered')
  return <h3 className='text-primary-500 p-4'>{value}</h3>
}

export default memo(UseMemoChild)
