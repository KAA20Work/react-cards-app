import React, { useEffect, useState } from 'react';
import { Card, CardProps } from './components/Card';

function App() {

  const [users, setUsers] = useState<Array<CardProps>>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => setUsers(json));
  })
  
  return (
    <ul className="cards">
      {
        users?.map((obj) => <Card {...obj} />)
      }
    </ul>
  );
}

export default App;
