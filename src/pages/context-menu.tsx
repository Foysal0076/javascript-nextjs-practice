import { Container, Typography, Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from '../shared/hooks/useOnClickOutside'

const mockPersons = [
  {
    id: 1,
    name: 'John Doe',
    age: 32,
    job: 'Developer',
    mobile: '5467567890',
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 30,
    job: 'Designer',
    mobile: '3456754890',
  },
  {
    id: 3,
    name: 'Sam Smith',
    age: 25,
    job: 'Developer',
    mobile: '0424567890',
  },
  {
    id: 4,
    name: 'Peter Pan',
    age: 40,
    job: 'Designer',
    mobile: '9834567890',
  },
  {
    id: 5,
    name: 'Don Vosco',
    age: 32,
    job: 'Developer',
    mobile: '7464567890',
  },
  {
    id: 6,
    name: 'John Doe',
    age: 32,
    job: 'Developer',
    mobile: '5467567890',
  },
  {
    id: 7,
    name: 'Jane Doe',
    age: 30,
    job: 'Designer',
    mobile: '3456754890',
  },
  {
    id: 8,
    name: 'Sam Smith',
    age: 25,
    job: 'Developer',
    mobile: '0424567890',
  },
  {
    id: 9,
    name: 'Peter Pan',
    age: 40,
    job: 'Designer',
    mobile: '9834567890',
  },
  {
    id: 10,
    name: 'Don Vosco',
    age: 32,
    job: 'Developer',
    mobile: '7464567890',
  },
]

type Contact = typeof mockPersons[0]
type Position = {
  x: number
  y: number
}

interface ICurrentSelection {
  position: Position
  contact: Contact
}

type Props = {
  show: boolean
  children: React.ReactNode
  top: number
  left: number
  contextMenuRef: React.RefObject<HTMLElement>
}

const ContextMenu = React.forwardRef(
  ({ show, top, left, children, contextMenuRef }: Props) => {
    const _ref = useRef(null)
    const divRef = contextMenuRef ?? _ref

    return (
      <Box
        ref={divRef}
        sx={{
          display: show ? 'block' : 'none',
          background: (theme) => theme.palette.background.paper,
          position: 'absolute',
          borderRadius: '4px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          top,
          left,
          '& ul': {
            listStyle: 'none',
            margin: 0,
            padding: '10px',
            '& li': {
              padding: '5px 0',
              '&:hover': {
                backgroundColor: '#dedede',
                cursor: 'pointer',
              },
            },
          },
        }}>
        {children}
      </Box>
    )
  }
)
ContextMenu.displayName = 'ContextMenu'

const offSet = {
  xAxis: 150,
  yAxis: 150,
}

const ContextMenuPage = () => {
  const [contacts, setContacts] = useState(mockPersons)
  const [currentSelection, setCurrentSelection] = useState<ICurrentSelection>()
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false)

  const onDeleteContact = (id: number) => {
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts)
    setShowContextMenu(false)
  }

  const contextMenuRef = useRef<HTMLElement | null>(null)

  // useEffect(() => {
  //   if (contextMenuRef?.current) {
  //     const el = contextMenuRef.current.getBoundingClientRect()
  //   }
  // }, [contextMenuRef])

  const _onContextMenuClick = (e: React.MouseEvent, contact: any) => {
    e.preventDefault()
    const clickX = e.clientX
    const clickY = e.clientY
    const screenH = window.innerHeight
    const screenW = window.innerWidth
    const right = screenW - clickX > offSet.xAxis
    const left = !right
    const top = screenH - clickY > offSet.yAxis
    const bottom = !top
    let x = 0
    let y = 0
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
    const position = { x, y }
    setCurrentSelection({ position, contact })
    setShowContextMenu(true)
    console.log({ screenH, screenW, right, left, top, bottom, x, y })
  }

  useOnClickOutside(contextMenuRef, () => setShowContextMenu(false))

  return (
    <Container>
      <Typography textAlign='center' component='h1' variant='h3' my={3}>
        Right click to show context menu
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        sx={{
          background: (theme) => theme.palette.background.paper,
        }}>
        {contacts.map((contact) => (
          <Box
            key={contact.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 1,
              border: '1px solid #ccc',
              borderRadius: '4px',
              position: 'relative',
            }}
            onContextMenu={(e) => _onContextMenuClick(e, contact)}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: '#ccc',
                  mr: 1,
                }}
              />
              <Box>
                <Typography component='h2' variant='h6'>
                  {contact.name}
                </Typography>
                <Typography component='p' variant='subtitle1'>
                  {contact.job}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography component='p' variant='subtitle1'>
                {contact.mobile}
              </Typography>
            </Box>
          </Box>
        ))}
        {currentSelection && (
          <ContextMenu
            contextMenuRef={contextMenuRef}
            show={showContextMenu}
            top={currentSelection?.position.y}
            left={currentSelection?.position.x}>
            <ul>
              <li onClick={() => onDeleteContact(currentSelection.contact.id)}>
                Delete Message
              </li>
              <li>Pin Message Pin Message Pin Message</li>
              <li>Edit Message</li>
              <li>{currentSelection?.contact.name}</li>
            </ul>
          </ContextMenu>
        )}
      </Box>
    </Container>
  )
}

export default ContextMenuPage
