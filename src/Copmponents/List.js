import React, {useState, useEffect} from 'react';

const api = '/heroes/'

function List() {
    const [data, setData] = useState(null)

    useEffect(() => {
            fetch(`${api}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error(error))
        
    }, [])


    if(!data) {
      return (
        <div>Loading...</div>
      )
    }

    if(!data.length) {
      return (
        <div>No result!</div>
      )
    }

  return (
    <ul>
        {data.length}
        {data.map(el => (
          <li key={el.id}>
            <p>Nick name: {el.nickname}</p>
            {/* <p>Real name: {el.realnage}</p>
            <p>Description: {el.description}</p>
            <p>Super power: {el.superpower}</p>
            <p>Catch phrase: {el.catchphrase}</p> */}
          </li>
        )
        )}
    </ul>
  );
}

export default List;