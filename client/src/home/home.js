import React from 'react';
import { Form } from '../form/form';
import { Rules } from '../rules/rules';
import './home.css'


export const Home = () => {

  return (
    <>
    <div class="alert-bar">
        <p class="alert-message">
        This application is intended solely for project purposes and may not provide the level of security required for general use. Please be advised that we disclaim any responsibility for any adverse outcomes resulting from the use of this application.
        </p>
    </div>

    <div className="container">
    <div className="left">
      <Rules />
    </div>
    <div className="right">
      <Form />
    </div>
  </div>       
    </>
  )
}
