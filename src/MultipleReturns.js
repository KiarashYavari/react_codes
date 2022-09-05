import React, {useState, UseEffect, useEffect} from 'react'

const MultipleReturns = () => {
  const url = 'https://api.github.com/users/defunkt';
  const [Error, isError] = useState(false);
  const [user, setUser] = useState('defualt user');
  const [loading, isLoading] = useState(true);

  useEffect(()=>{
    //fetch data
    //set isLoading to false
    fetch(url)
    .then((resp)=> {
        if(resp.status >= 200 && resp.status <= 299){
            return resp.json()
        }
        else{
            isLoading(false);
            isError(true);
            throw new Error(resp.statusText);
        }
    })
    .then((user)=>{
        const {login} = user;
        setUser(login);
        isLoading(false);
    })
    .catch((Error)=>console.log(Error));

  }, []);

  if(loading){
    return(
        <div className="container">
            <h2 className="mrt-heading2">is loading...</h2>
        </div>
    )
  }

  else if(Error){
    return(
        <div className="container">
            <h2 className="mrt-heading2">Error</h2>
        </div>
    )
  }

  return (
    <div className="container">
        <h2 className="mrt-heading2">{user}</h2>
    </div>
  )
}

export default MultipleReturns