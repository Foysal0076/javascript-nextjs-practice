import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useOnClickOutside } from './useOnClickOutside'
import { Box } from '@mui/material'

type Position = {
  x: number
  y: number
}
 
const useContextMenu = (handler?: any) => {

  const [offSet, setOffSet] = useState({ xAxis: 150, yAxis: 150 })

  const [showContextMenu, setShowContextMenu] = useState<boolean>(false)
  const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  // const [menuWidth, setMenuWidth] = useState(200)
  const contextMenuRef = useRef(null)
  // console.log('menuWidth', menuWidth)

  // useLayoutEffect(() => {
  //   if (contextMenuRef?.current) {
  //     const boundingRect = contextMenuRef.current.getBoundingClientRect()
  //     const menuContainerWidth = boundingRect.right - boundingRect.left
  //     setMenuWidth(menuContainerWidth)
  //   }
  // })

  // useEffect(() => {
  //   console.log('called')
  //   setOffSet({ xAxis: menuWidth, yAxis: 150 })
  // }, [menuWidth])

  const _onContextMenuClick = (event) => {
    const clickX = event.clientX
    const clickY = event.clientY
    const screenH = window.innerHeight
    const screenW = window.innerWidth
    const right = screenW - clickX > offSet.xAxis
    const left = !right
    const top = screenH - clickY > offSet.yAxis
    const bottom = !top
    let x, y
    if (right) {
      x = clickX + 5
    }
    if (left) {
      x = clickX - offSet.xAxis + 15
    }
    if (top) {
      y = clickY - 15
    }
    if (bottom) {
      y = clickY - offSet.yAxis - 5
    }
    handler && handler(event)
    setContextMenuPosition({ x, y })
    setShowContextMenu(true)
  }

  const closeContextMenu = () => {
    setShowContextMenu(false)
  }


  const Menu = useMemo(() => {
    const MenuComponent = ({ children }) => {
      console.log('called')
      return (
        <Box
          ref={contextMenuRef}
          sx={{
            display: showContextMenu ? 'block' : 'none',
            background: (theme) => theme.palette.background.paper,
            position: 'absolute',
            borderRadius: '4px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            top: contextMenuPosition.y,
            left: contextMenuPosition.x,
            "& ul": {
              listStyle: 'none',
              margin: 0,
              padding: '10px',
              '& li': {
                padding: '5px 0',
                '&:hover': {
                  backgroundColor: '#dedede',
                  cursor: 'pointer'
                }
              }
            },
          }}>
          {children}
        </Box>
      )
    }
    return MenuComponent
  }, [showContextMenu, contextMenuPosition])

  //This will hide the context menu when clicked outside of it
  useOnClickOutside(contextMenuRef, () => setShowContextMenu(false))

  return { _onContextMenuClick, closeContextMenu, Menu }
}

export default useContextMenu