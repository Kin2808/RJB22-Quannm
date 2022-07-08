import './App.css';
import img from './Avatar.jpg'

function App() {
  const user1 = {
    name: 'Quan',
    age: '18 Tuổi'
  }
  const user2 = {
    name: 'Kin',
    age: '14 Tuổi'
  }
  const user3 = {
    name: 'Fo',
    age: '19 Tuổi'
  }
  const user4 = {
    name: 'Dat',
    age: '20 Tuổi'
  }
  const user5 = {
    name: 'Son',
    age: '17 Tuổi'
  }
  const user6 = {
    name: 'Dai',
    age: '13 Tuổi'
  }

  function render(user) {
    return <>
    <img src={img} alt='avatar'></img>
    <h1>{user.name}</h1>
    <p>{user.age}</p>
    </>
  }

  return (
    <>
    <div className='row'>
      <p className='col'>{render(user1)}</p>
      <p className='col'>{render(user2)}</p>
    </div>

    <div className='row'>
      <p className='col'>{render(user3)}</p>
      <p className='col'>{render(user4)}</p>
    </div>

    <div className='row'>
      <p className='col'>{render(user5)}</p>
      <p className='col'>{render(user6)}</p>
    </div>
    </>
  )
}

export default App;
