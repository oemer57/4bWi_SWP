import React from 'react'
import Card from './Card'

export default function CardContainer() {
    return (
        <div className='grid grid-cols-2'>

            <Card avatar="public/avatar.png" name={"John Doe"} jobtitle={"Architect & Engineer"} />
            <Card avatar="public/avatar.png" name={"John Doe"} jobtitle={"Architect & Engineer"} />
            <Card avatar="public/avatar.png" name={"John Doe"} jobtitle={"Architect & Engineer"} />
            <Card avatar="public/avatar.png" name={"John Doe"} jobtitle={"Architect & Engineer"} />
            <Card avatar="public/avatar.png" name={"John Doe"} jobtitle={"Architect & Engineer"} />


        </div>
    )
}
