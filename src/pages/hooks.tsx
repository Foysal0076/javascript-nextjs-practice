import { UseCallbackHook } from '@components/Hooks/UseCallback'
import { UseMemoHook } from '@components/Hooks/UseMemoHook'

const HooksPage = () => {
  return (
    <div className='container py-20 flex flex-col gap-8 md:gap-12'>
      <UseMemoHook />
      <UseCallbackHook />
    </div>
  )
}

export default HooksPage
