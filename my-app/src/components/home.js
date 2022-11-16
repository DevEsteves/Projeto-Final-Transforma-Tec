import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
   
  const [users, setUsers] = useState([{}]);
  var {username} = useParams();
  const objdetails = useRef();
  const avatar = useRef();
  const nome = useRef();
  const bio = useRef();
  
    useEffect(() => {
      fetch(`/api/users/${username}/details`)
      .then(res => res.json())
      .then(users => setUsers(users))
    }, [username])
  
  
  objdetails.current = users.login;
  avatar.current = users.avatar_url;
  nome.current = users.nome;
  bio.current = users.bio;

  return(
      <div className="github-api">
        <h2>User information from Github Api</h2>
        <ul>
          <p>Nome: {nome.current}</p>
          <p>Repositórios públicos: {users.public_repos}</p>
          <p>{bio.current}</p>
          <img src={avatar.current} alt="avatar"></img>
        </ul>
      </div>
  );
    
}

export default Home;