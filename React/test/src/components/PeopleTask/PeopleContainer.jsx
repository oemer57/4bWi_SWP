import React from 'react'
import PersonCard from './PersonCard'

export default function PeopleContainer() {
  return (
    <div>
      <h1>People</h1>
      <div>
        <PersonCard name="Hans" title="CEO" image="https://picsum.photos/200/300" />
      </div>
    </div>
  )
}