import React from 'react';
import Header from './Header';

const SignIn = () => (
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
        <label class='label'>Contraseña</label>
        <div class='control'>
          <input class='input' type='text' placeholder='' />
        </div>
        <div class="control has-text-right">
          <button class="button is-text has-text-info">Olvidé mi contraseña</button>
        </div>
      </div>

      <div class='field is-grouped is-grouped-centered'>
        <div class="control">
          <button type='submit' class="button is-primary">Jugar</button>
        </div>
      </div>

      <div class='field is-grouped is-grouped-centered'>
        <div class="control">
          <button type='submit' class="button is-primary">Registrarse</button>
        </div>
      </div>
      <label class='label has-text-centered'>-Ingresar con-</label>
      <div class='field is-grouped is-grouped-centered'>

        <div class="control">
          <button type='submit' class="button is-primary">facebook</button>
        </div>
        <div class="control">
          <button type='submit' class="button is-primary">google</button>
        </div>
      </div>

    </form>
  </div>
);

export default SignIn;