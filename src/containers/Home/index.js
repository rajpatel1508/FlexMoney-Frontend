import React from 'react';
import './style.css';

export default function Home() {
  return (
    <div className='main'>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <h1>Yoga Class</h1>
        <p class="lead">Welcome to Yoga class! </p>
        <a href="/register" class="btn btn-lg btn-secondary font-weight-bold bg-light">Register Now!</a>
        <footer class="mt-auto text-white-50">
          <p>&copy;2022 Yoga Class</p>
        </footer>
      </div>
    </div>
  )
}
