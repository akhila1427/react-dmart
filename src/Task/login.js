// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [errors, setErrors] = useState({});

//   const validateField = (fieldName, value) => {
//     let error = '';
//     switch (fieldName) {
//       case 'username':
//         if (!value.trim()) {
//           error = 'Username is required';
//         }
//         break;
//       case 'email':
//         if (!value.trim()) {
//           error = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(value)) {
//           error = 'Email is invalid';
//         }
//         break;
//       case 'password':
//         if (!value.trim()) {
//           error = 'Password is required';
//         } else if (value.length < 6) {
//           error = 'Password must be at least 6 characters';
//         }
//         break;
//       case 'confirmPassword':
//         if (!value.trim()) {
//           error = 'Confirm Password is required';
//         } else if (value !== formData.password) {
//           error = 'Passwords do not match';
//         }
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: validateField(name, value) });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = {};
//     for (const key in formData) {
//       formErrors[key] = validateField(key, formData[key]);
//     }
//     setErrors(formErrors);
//     if (Object.values(formErrors).every(error => !error)) {
//       console.log('Form submitted:', formData);
//       // You can add your login logic here
//     } else {
//       console.error('Form submission failed. Please fix errors.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
//       </div>

//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
//       </div>

//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
//       </div>

//       <div>
//         <label>Confirm Password:</label>
//         <input
//           type="password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />
//         {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
//       </div>

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm
