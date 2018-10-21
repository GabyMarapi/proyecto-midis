import React from 'react';
import Header from './Header';

const SignUp = () => (
  <div>
    <Header />
    <form>

      <div class='field'>
        <label class='label has-text-primary'>DNI</label>
        <div class='control'>
          <input class='input' type='number' placeholder='' />
        </div>
      </div>

      <div class='field'>
        <div class='field-body'>
          <div class='field is-expanded'>
            <label class='label has-text-primary'>Teléfono</label>
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
        <label class='label has-text-primary'>Contraseña</label>
        <div class='control'>
          <input class='input' type='text' placeholder='' />
        </div>
      </div>

      <div class='field'>
        <label class='label has-text-primary'>Confirmar contraseña</label>
        <div class='control'>
          <input class='input' type='text' placeholder='' />
        </div>
      </div>

      <div class='field'>
        <div class="control">
          <button type='submit' class="button is-primary">Empezar a jugar</button>
        </div>
      </div>

      <div class="control">
        <button class="button is-text has-text-info">Ya tengo cuenta</button>
      </div>

    </form>
  </div>
);

export default SignUp;