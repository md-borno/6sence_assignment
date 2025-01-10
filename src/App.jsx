import { useState } from 'react';
import './App.css'
import './App.scss'
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { IoMdMail } from 'react-icons/io';


const FormComponent = () => {
  const [formFields, setFormFields] = useState([{ input: '', select: '' }]);
  const [errors, setErrors] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  const [darkMode, setDarkMode] = useState(false); 
  const [message, setMessage] = useState('');

  const handleInputChange = (index, event) => {
    const newFormFields = [...formFields];
    newFormFields[index][event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const addField = () => {
    setFormFields([...formFields, { input: '', select: '' }]);

  };
  const removeField = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const newFormFields = formFields.filter((_, i) => i !== index);
        setFormFields(newFormFields);
        Swal.fire({
          title: "Deleted!",
          text: "Your field has been deleted.",
          icon: "success"
        });
      }
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = [];
    formFields.forEach((field, index) => {
      if (!field.input) {
        newErrors[index] = { input: 'Input is required' };
      }
      if (!field.select) {
        newErrors[index] = { select: 'Select is required' };
      }
    });

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      setSubmittedData(formFields);
      setErrors([]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };



  const copyToClipboard = () => {
    const textToCopy = 'adlulislam95@gmail.com';

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setMessage('Mail clipboard!');
        setTimeout(() => setMessage(''), 2000); // Clear message after 2 seconds.......
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        setMessage('Failed to copy text');
      });
  };


  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="absolute p-5">
        <div className="toggle">
          <input
            type="checkbox"
            id="btn"
            checked={darkMode}
            onChange={toggleTheme}
          />
          <label htmlFor="btn">
            <span className="track">
              <span className="txt">{darkMode ? 'Dark' : 'Light'} Mode</span>
            </span>
            <span className="thumb">|||</span>
          </label>
        </div>
      </div>

      <div className={`hero min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-base-200 text-gray-900'}`}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold ml-6">Dynamic Form</h1>
            <div className="content">
              <div className="content__container">
                <p className="content__container__text">
                  Hello
                </p>

                <ul className="content__container__list">
                  <li className="content__container__list__item">world !</li>
                  <li className="content__container__list__item">6sence !</li>
                  <li className="content__container__list__item">users !</li>
                  <li className="content__container__list__item">,I am Borno !</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card w-full max-w-lg shrink-0 shadow-2xl">
            <h1 className={`text-4xl font-bold text-center mt-8 -ml-5 w-[550px] h-12 ${darkMode ? 'bg-white text-[#06152c]' : 'bg-[#06152c] text-white'}`}>
              <span className="text-cyan-500">6</span>sence
            </h1>
            <form className={`card-body h-auto ${darkMode ? 'bg-gray-500' : 'bg-white'}`} onSubmit={handleSubmit}>
              {formFields.map((field, index) => (
                <div key={index} className="form-control ">
                  <div className="flex gap-5">
                    <div>
                      <input
                        type="text"
                        name="input"
                        value={field.input}
                        onChange={(e) => handleInputChange(index, e)}
                        placeholder="Enter input"
                        className={`block py-2.5 px-0 w-44 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'
                          } bg-transparent border-0 border-b-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'
                          } appearance-none focus:outline-none focus:ring-0 focus:border-gray-300`}
                        required
                      />
                      {errors[index]?.input && <span className="text-error">{errors[index].input}</span>}
                    </div>
                    <div>
                      <select
                        name="select"
                        value={field.select}
                        onChange={(e) => handleInputChange(index, e)}
                        className={`block py-2.5 px-0 w-44 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'
                          } bg-transparent border-0 border-b-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'
                          } appearance-none focus:outline-none focus:ring-0 focus:border-gray-300`}
                        required
                      >
                        <option value="">Select</option>
                        <option value="option1">Option A</option>
                        <option value="option2">Option B</option>
                        <option value="option3">Option C</option>
                      </select>
                      {errors[index]?.select && <span className="text-error">{errors[index].select}</span>}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeField(index)}
                        className="btn btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="form-control mt-4 flex gap-4">
                <div className="wrap mt-3">
                  <button type="button" onClick={addField} className="button">Add Field</button>
                </div>
              </div>
              <div className="wrap mt-3">
                <button className="button">Submit</button>
              </div>
            </form>
            <div className={`card-body rounded-b-xl ${darkMode ? 'bg-gray-500' : 'bg-white'}`}>
              <h3 className="font-bold text-center">Form State</h3>
              <table className="table table-xs table-pin-rows table-pin-cols  ">
                <thead>
                  <tr>
                    <th>Input</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.input}</td>
                      <td>{data.select}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <a href="https://md-borno.github.io/Portfolio/" target="_blank" rel="noopener noreferrer"><p className='text-xl hover:translate-x-2 cursor-pointer'><span className='text-2xl text-pink-500'>MD</span> Borno</p></a>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.linkedin.com/in/adlul-islam/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className='text-3xl' onClick={copyToClipboard} />
          </a>

          <IoMdMail
            onClick={copyToClipboard}
            className="text-3xl"
          >
            Email
          </IoMdMail>
          {message && <p className="text-green-500 mt-2">{message}</p>}
      
          <a href="https://github.com/md-borno" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-3xl' />
          </a>
          <a href="https://www.facebook.com/md.borno.92/" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </>
  );
};

export default FormComponent;
