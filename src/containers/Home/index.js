import React from 'react';
import './style.css';

//Home page
export default function Home() {
  return (
    <div className='main'>
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <h1>Welcome to <span>Yoga Class!</span></h1>
        <p class="lead">Looking to improve your flexibility, reduce stress, and find inner peace?<br />
          Join our yoga class and let us guide you on a journey of mind, body, and breath.<br />
          With experienced instructors and a welcoming atmosphere, our yoga classes are suitable for yogis of all levels.<br />
          Don't miss out on the opportunity to transform your body and mind. <br />
          Sign up now and discover the power of yoga!</p>
        <a href="/register" class="btn btn-lg btn-secondary font-weight-bold bg-light">Register Now!</a>
        <footer class="mt-auto text-white-50">
          <p>&copy;2022 Yoga Class</p>
        </footer>
      </div>
    </div>
  )
}
