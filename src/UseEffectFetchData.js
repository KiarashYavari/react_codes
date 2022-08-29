import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const UseEffectFetchData = () => {
  const api_url = 'https://api.github.com/users';
  // fetch url data
  // put them in a list 
  const [users, setUsers] = useState([]);

  const get_users = async () => {
        const response = await fetch(api_url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
  };

  useEffect(() => {
    get_users();
  }, []);
  
  return (
        <section className='container'>
            <h2 className='row' id="git-title">github users</h2>
            <ul className="row">
                {users.map((user)=> {
                    const {login, avatar_url, id, html_url} = user;
                    return(
                        <li key={id} className="col user-element">
                            <img className='profile-images' src={avatar_url} alt={login} />
                            <div className='git-name'><h6>{login}</h6></div>
                            <div className='git-name'><a href={html_url}>profile</a></div>
                        </li>
                    );
                    
                })}
                
            </ul>
        </section>
  )
}

export default UseEffectFetchData