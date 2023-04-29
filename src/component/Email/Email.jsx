// import React, { useRef } from "react";
// import emailjs, { init } from "@emailjs/browser";

// function App() {
//   init("user_aVMjgLam4rroy8ETgabF9");
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm("service_u5oka1o","template_ke6ygom",form.current,"nGsPNVSi6u0LAUmEr")
//       .then(
//         (result) => {
//           alert("Message Sent Successfully");
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//       e.target.reset()
//   };
//   return (
//     <div className="container">
//       <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//     </div>
//   );
// }

// export default App;