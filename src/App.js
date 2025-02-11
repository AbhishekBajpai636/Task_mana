// import logo from './logo.svg';
import './App.css';
// import './login.html';
// import axios from "axios";

// const handleSubmit = async (e) => {
//   e.preventDefault(); // Prevent the default form submission behavior

//   const formData = {
//     name: document.getElementById('name').value,
//     pwd: document.getElementById('pwd').value,
//   };

//   try {
//     const response = await axios.post("http://localhost:5000/submit-form", formData);
//     alert(response.data.message); // Show success message
//     console.log("Form submitted successfully:", response.data);
//     alert('data has been submited');
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     alert('data can not be submitted please try again later');
//   }
// };



function App() {
  return (
    <div className="App">
      {/* <login /> */}
      <iframe src="/option.html" width= '100%' height='1000px' title='form'></iframe>
    </div>
  );
}

export default App;
