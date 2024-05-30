// import React, { useState } from 'react';
// import LoginForm from './login';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});

//   const validateField = (fieldName, value) => {
//     let error = '';
//     switch (fieldName) {
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

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setErrors({ ...errors, [name]: validateField(name, value) });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const isFormValid = Object.keys(errors).every(key => errors[key] === '') && Object.values(formData).every(value => value.trim() !== '');
//     if (isFormValid && formData.email === 'correct@email.com' && formData.password === 'correctpassword') {
//       console.log('Form submitted:', formData);
//       alert('Your details are matched!');
//       window.location.href = '/';
//     } else {
//       console.error('Form submission failed. Please fix errors.');
    
//       window.location.href = '/login';
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ display: 'inline-block', width: '100px' }}>Email:</label>
//         <input
//           style={{ width: 'calc(30% - 120px)', padding: '5px' }}
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//       </div>
//       {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ display: 'inline-block', width: '100px' }}>Password:</label>
//         <input
//           style={{ width: 'calc(30% - 120px)', padding: '5px' }}
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//       </div>
//       {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}

//       <button type="submit" style={{ marginRight: '50px', padding: '8px 20px' }}>Register</button>
//     </form>
//   );
// };

// export default RegisterForm;
