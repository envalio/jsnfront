import React, {useState, useEffect} from 'react';

const api = 'http://127.0.0.1:3030/heroes/'

function List() {
    const [data, setData] = useState(null)
    const [testList] = useState([])

    useEffect(() => {
            fetch(`${api}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error(error))
        
    }, [])
    console.log({data});
  return (
    <ul>
        {data?.length}
        {testList.map(el => //list mapping example
        <li key={el.id}>
            <p>Nick name: {el.nickname}</p>
            <p>Real name: {el.realnage}</p>
            <p>Description: {el.description}</p>
            <p>Super power: {el.superpower}</p>
            <p>Catch phrase: {el.catchphrase}</p>
        </li>)}
    </ul>
  );
}

export default List;