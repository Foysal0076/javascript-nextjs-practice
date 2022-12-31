// @ts-nocheck
// @ts-ignore
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// fake data generator
const getItems = (count: number, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }))

/**
 *
 * @param list
 * @param startIndex
 * @param endIndex
 * @returns Reordered list after drag and drop on the same column
 */
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)
  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}
const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
})
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
})

const DragAndReorder = () => {
  const [state, setState] = useState([])
  useEffect(() => {
    setState([getItems(5), getItems(5, 10)])
  }, [])

  function onDragEnd(result) {
    const { source, destination } = result
    const sourceMock = {
      index: 1,
      droppableId: 0,
    }

    // dropped outside the list
    if (!destination) {
      return
    }
    // droppableId is the index of the state list
    const sourceItemContainerId = +source.droppableId
    const destinationItemContainerId = +destination.droppableId

    if (sourceItemContainerId === destinationItemContainerId) {
      // For same column
      const items = reorder(
        state[sourceItemContainerId],
        source.index,
        destination.index
      )
      const newState = [...state]
      newState[sourceItemContainerId] = items
      setState(newState)
    } else {
      // For different column
      const result = move(
        state[sourceItemContainerId],
        state[destinationItemContainerId],
        source,
        destination
      )
      const newState = [...state]
      newState[sourceItemContainerId] = result[sourceItemContainerId]
      newState[destinationItemContainerId] = result[destinationItemContainerId]
      setState(newState)
    }
  }

  return (
    <Box my={4}>
      <Typography component='h1' variant='h2' textAlign='center' mb={3}>
        Drag and Reorder
      </Typography>
      <div>
        <button
          type='button'
          onClick={() => {
            setState([...state, []])
          }}>
          Add new group
        </button>
        <button
          type='button'
          onClick={() => {
            setState([...state, getItems(1)])
          }}>
          Add new item
        </button>
        <div style={{ display: 'flex' }}>
          <DragDropContext onDragEnd={onDragEnd}>
            {state.map((el, ind) => (
              <Droppable key={ind} droppableId={`${ind}`}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}>
                    {el.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                              }}>
                              {item.content}
                              <button
                                type='button'
                                onClick={() => {
                                  const newState = [...state]
                                  newState[ind].splice(index, 1)
                                  setState(
                                    newState.filter((group) => group.length)
                                  )
                                }}>
                                delete
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </DragDropContext>
        </div>
      </div>
    </Box>
  )
}

export default DragAndReorder
