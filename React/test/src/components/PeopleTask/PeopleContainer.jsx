import React, { useEffect, useState } from 'react';
import PersonCard from './PersonCard';
import { Filter } from 'node.io/vendor/validator';

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch("https://67b892fc699a8a7baef48def.mockapi.io/Person").then(
      (res) => res.json().then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      })
    );
  }, []);

  const filterPeople = (filter) => {
    let filtered = people.filter(person => person.name.includes(filter));
    setFilteredPeople(filtered);
  }

  return (
    <div>
      <div>
        <input className="border p-4 m-4 bg-gray-200" placeholder='Search...' type="text" onChange={(el) => {
          console.log(el.target.value);
          filterPeople(el.target.value)

        }} />
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {filteredPeople.map(person => {
          return <PersonCard name={person.name} imageUri={person.avatar} title={person.jobtitle} />
        })}
      </div>
    </div>
  )
}