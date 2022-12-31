import { Container, Typography, Box } from '@mui/material'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import useContextMenu from '../shared/hooks/useContextMenu'
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

interface ICurrentSelection {
  contact: Contact
}

const ContextMenuPage = () => {

  const [contacts, setContacts] = useState(mockPersons)
  const [currentSelection, setCurrentSelection] = useState<ICurrentSelection>()
  const { _onContextMenuClick, closeContextMenu, Menu } = useContextMenu()

  const onDeleteContact = (id: number) => {
    const newContacts = contacts.filter((contact) => contact.id !== id)
    closeContextMenu()
    setContacts(newContacts)
  }

  const onRightClick = (e: React.MouseEvent, contact: any) => {
    e.preventDefault()
    _onContextMenuClick(e)
    setCurrentSelection({ contact })
  }

  return (
    <Container>
      <Typography textAlign='center' component='h1' variant='h3' my={3}>Right click to show context menu</Typography>
      <Box display='flex' flexDirection='column' gap={2} sx={{
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
            onContextMenu={(e) => onRightClick(e, contact)}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#ccc', mr: 1 }} />
              <Box>
                <Typography component='h2' variant='h6'>{contact.name}</Typography>
                <Typography component='p' variant='subtitle1'>{contact.job}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography component='p' variant='subtitle1'>{contact.mobile}</Typography>
            </Box>
          </Box>
        ))}
        {currentSelection && (
          <Menu>
            <ul>
              <li>{currentSelection?.contact.name}</li>
              <li>Pin Contact</li>
              <li>Edit Contact</li>
              <li onClick={() => onDeleteContact(currentSelection.contact.id)}>Delete Contact</li>
            </ul>
          </Menu>
        )}
      </Box>
    </Container>
  )
}

export default ContextMenuPage