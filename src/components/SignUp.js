import React from 'react';
import Header from './Header';

const SignUp = () => (
  <div>
    <Header />
    <form>

      <div class='field'>
        <label class='label'>DNI</label>
        <div class='control'>
          <input class='input' type='number' placeholder='' />
        </div>
      </div>

      <div class='field'>
        <div class='field-body'>
          <div class='field is-expanded'>
            <label class='label'>Teléfono</label>
            <div class='field has-addons'>
              <p class='control'>
                <button class='button is-static'>
                  +51
              </button>
              </p>
              <p class='control is-expanded'>
                <input class='input' type='tel' placeholder='' />
              </p>
            </div>
          </div>
        </div>
      </div>


      <div class='field'>
        <label class='label'>Contraseña</label>
        <div class='control'>
          <input class='input' type='text' placeholder='' />
        </div>
      </div>

      <div class='field'>
        <label class='label'>Confirmar contraseña</label>
        <div class='control'>
          <input class='input' type='text' placeholder='' />
        </div>
      </div>


    </form>
  </div>
);

export default SignUp;