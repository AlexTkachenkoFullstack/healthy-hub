import React, { useState } from 'react';

const SignUpFirst = ({ goNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit = e => {
      e.preventDefault();
      // тут буде логіка відправки форми на сервер
    };
    
  return (
    <>
      <h1>Sign up</h1>
      <p>You need to register to use the service</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" onClick={goNext}>
          Sign Up
        </button>
      </form>
      <p>Do you already have an account?</p>
      <div>Sign in</div>
    </>
  );
};

export default SignUpFirst;
