import React, {useState, useEffect} from 'react'

import './Home.css'
import UserCard from '../../components/cards/UserCard';
import Tooltip from '../../components/tooltips/Tooltip';
// import Tooltip from '../../components/tooltips/Tooltip';

const Home = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Inside useEffect hook, Having no dependency array!!");
  })

  useEffect(() => {
    console.log("Inside useEffect hook, Having empty dependency array!!");
  }, [])

  useEffect(() => {
    console.log("Inside useEffect hook, Having an state variable 'count' dependency array!!");
  }, [count])

  const handleCounter = (add) => {
    if (add) {
      setCount(prev => prev+1);
    } else {
      setCount(prev => prev-1);
    }
  }


  // ---------------------------------------------------------------------------------------------------------------

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    mobile: '',
  })

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`Name: ${userData.name}\nEmail: ${userData.email}\nMobile no: ${userData.mobile}\n\nSubmitted successfuly!!`);
    setUserData({
      name: '',
      email: '',
      mobile: '',
    })
  }


  // ---------------------------------------------------------------------------------------------------------------


  const [showTooltip, setShowTooltip] = useState(false);

  const handleShow = (val) => {
    if (val) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  }





  // ---------------------------------------------------------------------------------------------------------------

  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () => {
    const fetchedUsers = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'GET'
    });

    const allUsers = await fetchedUsers.json();
    setUsers(allUsers);
  }

  return (
    <div className='page'>
      <div className="home-app counter-app">
        <h2>Counter (Demo of onClick)</h2>
        <h3 className="value">{count}</h3>
        <div className="btns">
          <div onClick={() => handleCounter(true)} className="plus counter-btn">+</div>
          <div onClick={() => handleCounter(false)} className="minus counter-btn">-</div>
        </div>
      </div>
      <br /><br />
      <div className="home-app inputs-app">
        <h2>Take inputs (Demo of onChange & onSubmit)</h2>
        <form onSubmit={handleSubmit}>
          <input required onChange={handleChange} name='name' value={userData.name} type="text" placeholder='Enter your name' />
          <input required onChange={handleChange} name='email' value={userData.email} type="email" placeholder='Enter your email' />
          <input required onChange={handleChange} name='mobile' value={userData.mobile} type="number" placeholder='Enter your mobile no.' />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <br /><br />
      <div className="home-app tooltip-app">
        <h2>Tooltip (Demo of onMouseOver, onMouseLeave & prop)</h2>

        <Tooltip message={'Tooltip is visible'}>
          <div className="tooltip-hover">
            Hover on me
          </div>
        </Tooltip>

      </div>
      <br /><br />
      <div on className="home-app user-app">
        <h2>All Usere (Demo of useEffect & props)</h2>
        <div className="user-list">
          {users && users.length && users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home