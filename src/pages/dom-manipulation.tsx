// @ts-nocheck
import { useEffect } from 'react'

const DomManipulation = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // const body = document.body
      // const div = document.createElement('div')
      // const h1 = document.createElement('h1')
      // h1.textContent = 'Hello World'
      // div.appendChild(h1)
      // body.append(div)

      const element = document.getElementsByClassName('dom-manipulation')
      const h2 = document.createElement('h2')
      const span1 = document.createElement('span')
      const span2 = document.createElement('span')
      const html =
        '<span>Hello</span><span>World</span> <span>! html content</span>'
      span1.textContent = 'Hello'
      span2.textContent = 'World'
      h2.appendChild(span1)
      h2.appendChild(span2)
      // element.item.bind(element!)(0).appendChild(h2)

      const div = document.createElement('div')
      div.innerHTML = html
      element.item.bind(element!)(0)?.appendChild(div)

      const title = document.querySelector('title')
      if (!title) return
      title.style.color = '#3e8e7e'
      title?.setAttribute('id', '#title')
      console.log(title?.getAttribute('id'))

      // Custom data attribute is accessed via .dataset
      console.log(title?.dataset)
    }
  }, [])

  return (
    <div className='dom-manipulation'>
      <h1 className='title' data-test='This is a custom data attribute'>
        DOM Manipulation
      </h1>
    </div>
  )
}

export default DomManipulation
