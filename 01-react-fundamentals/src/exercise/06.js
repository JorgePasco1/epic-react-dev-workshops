// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  const handleChange = event => {
    const isValid = value => value === value.toLowerCase()
    setError(isValid(event.target.value) ? null : 'Username must be lowercase')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {error && <div role="alert">{error}</div>}
        <label htmlFor="usernameInput" ref={inputRef}>
          Username:
        </label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
