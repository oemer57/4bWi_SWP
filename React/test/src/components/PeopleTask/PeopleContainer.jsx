import React, { useEffect, useState } from 'react';
import PersonCard from './PersonCard';

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://67b892fc699a8a7baef48def.mockapi.io/Person").then(
      (res) => res.json().then((data) => {
        setPeople(data);
      })
    );
  }, []);

  return (
    <div>
      <h1>People</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {people.map(person => {
          return <PersonCard name={person.name} imageUri={person.avatar} title={person.jobtitle} />
        })}
      </div>
    </div>
  )
}