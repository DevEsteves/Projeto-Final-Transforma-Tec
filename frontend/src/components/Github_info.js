import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Github_info = () => {
   
  const [users, setUsers] = useState([{}]);
  const [inputValue, setInputValue] = useState('');

  function fetchData(){
    fetch(`api/users/${inputValue}/details`)
    .then(res => res.json())
    .then(users => setUsers(users))
  }

  return(
      <div className="github-api">
        <h2>User informations from Github Api</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
       <button onClick={fetchData}>Retrieve</button>
        <ul>
          <p><b>Nome:</b> {users.nome}</p>
          <p><b>Repositórios públicos:</b> {users.public_repos}</p>
          <p>{users.bio}</p>
          {users.avatar_url ? <img src={users.avatar_url} alt="avatar" width={300} height={300}></img> : <b>Waiting for input</b> }
        </ul>
      </div>
  );
    
}

export default Github_info;