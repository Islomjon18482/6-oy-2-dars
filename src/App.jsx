import React from 'react'
import Button from './assets/button'
import Header from './assets/header'
import "./App.css"

export default function App() {
  return (
    <>
    <div className="card">
      <Header></Header>
      <div className="card__main">
        <div className="card__text">
          <h2>Join a Community of Achievers</h2>
          <p>Begin your learning journey today!</p>
          <Button text="Learn More"></Button>
        </div>
          <div className="background__img">
            <div className="card__img">
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
