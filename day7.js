import React, { useEffect, useState } from "react"


const Day7= () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <center><div>
      {users.length > 0 && (
        <ul id='om'>
        <h1>BOOK LIST</h1>
          {users.map(user => (
            <ol key={user.id}>{user.name}</ol>
          ))}
        </ul>
      )}
    </div></center>
  );
}

export default Day7;