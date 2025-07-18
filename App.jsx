import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const userData = {
  email: "amanp0388@gamil.com",
  name: "Aman Pandey",
  mobileNo: "7828143796",
  githubUsername: "amanp0", 
  rollNo: "A60205222146", 
  accessCode: "JpzerQ"
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* User Info Card */}
      <div className="user-card">
        <h2>User Info</h2>
        <ul>
          <li><strong>Name:</strong> {userData.name}</li>
          <li><strong>Email:</strong> {userData.email}</li>
          <li><strong>Mobile No:</strong> {userData.mobileNo}</li>
          <li><strong>GitHub Username:</strong> {userData.githubUsername}</li>
          <li><strong>Roll No:</strong> {userData.rollNo}</li>
          <li><strong>Access Code:</strong> {userData.accessCode}</li>
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App