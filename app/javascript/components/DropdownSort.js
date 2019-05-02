import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'
// <Input icon='search' iconPosition='left' className='search' />

const tagOptions = [
  {
    key: 'Newest',
    text: 'Newest',
    value: 'sortingNewest',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Oldest',
    text: 'Oldest',
    value: 'sortingOldest',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Least Votes',
    text: 'Least Liked',
    value: 'sortingLeastLikes',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    key: 'Most Votes',
    text: 'Most Liked',
    value: 'sortingMostLikes',
    label: { color: 'green', empty: true, circular: true },
  }
]

const DropdownSort = (props) => (
  <Dropdown text='Sort Confessions' style={{color: "white"}} multiple icon='filter'>
    <Dropdown.Menu>
      <Dropdown.Divider />
      <Dropdown.Header icon='tags' content='Sort Confessions' />
      <Dropdown.Menu scrolling>
        {tagOptions.map(option => (
          <Dropdown.Item key={option.value} onClick={props[option.value]} {...option}/>
        ))}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownSort
