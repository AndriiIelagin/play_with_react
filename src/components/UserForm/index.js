import React from 'react';
import useInput from '../../hooks/useInput';

function UserForm() {
  const [fn, bindFn, resetFn] = useInput('');
  const [ln, bindLn, resetLn] = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Hello ${fn} ${ln}:)`);
    resetFn();
    resetLn();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fn">First name</label>
          <input type="text" id="fn" {...bindFn} />
        </div>
        <div>
          <label htmlFor="ln">Last name</label>
          <input type="text" id="ln" {...bindLn} />
        </div>
        <button>Submit</button>
      </form>
      <div>
        First name - {fn} Last name - {ln}
      </div>
    </div>
  );
}

export default UserForm;
