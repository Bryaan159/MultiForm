import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'tailwindcss/tailwind.css';
import 'sweetalert2/dist/sweetalert2.css';

function App() {
  const formArray = [1, 2, 3];
  const [form, setForm] = useState(formArray[0]);
  const [state, setState] = useState({
    name: '',
    gender: '',
    age: '',
    city: '',
    job: '',
    address: '',
    distric: '',
    thana: '',
    post: ''
  })
  // s

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

  }

  const finalSubmit = () => {
    if (state.distric && state.thana && state.post) {
      Swal.fire({
        icon: 'success',
        title: 'Formulario enviado con éxito!',
        text: 'Gracias por enviar el formulario.',
        confirmButtonText: 'OK'
      });
    } else {
      // toast.error('Please fill all fields', {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 800 
      // });
    }
  }

  const next = () => {
    const successMessages = {
      1: 'Form 1 completed successfully!',
      2: 'Form 2 completed successfully!',
    };

    const errorMessages = {
      1: 'Please fill out all fields in Form 1!',
      2: 'Please fill out all fields in Form 2!',
    };

    if (form === 1 && state.name && state.gender && state.age) {
      // toast.success(successMessages[form], {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 400
      // });
      setForm(form + 1);
    } else if (form === 2 && state.city && state.job && state.address) {
      // toast.success(successMessages[form], {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 400
      // });
      setForm(form + 1);
    } else {
      // toast.error(errorMessages[form], {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 400
      // });
    }
  };

  const previus = () => {
    setForm(form - 1);
  }

  //Control de los circulos
  const handleCircleClick = (circleNumber) => {
    setForm(circleNumber);
  };

  //Enviar la información
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, gender, age, city, job, address, distric, thana, post } = state;

    // Asegurarse de que todos los campos estén llenos antes de enviar la solicitud
    if (name && gender && age && city && job && address && distric && thana && post) {
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/bryaan159/google_sheets/NhIKfIFrvqzvhNMh?tabId=Sheet1", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([[name, gender, age, city, job, address, distric, thana, post, new Date().toLocaleString()]])
        });

        if (response.ok) {
          // La solicitud se completó correctamente
          const data = await response.json();
          console.log('Datos enviados correctamente:', data);
          // Limpiar los campos después de enviar los datos
          setState({
            name: '',
            gender: '',
            age: '',
            city: '',
            job: '',
            address: '',
            distric: '',
            thana: '',
            post: ''
          });
        } else {
          // La solicitud falló, manejar el error
          console.error('Error al enviar los datos a la API de Google Sheets');
        }
      } catch (error) {
        // Error en la solicitud fetch
        console.error('Error en la solicitud fetch:', error);
      }
    } else {
      // Mostrar un mensaje de error si no todos los campos están llenos
      // toast.error('Please fill all fields', {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 800
      // });
    }
  };




  return (
    // fondo gris
    //
    <div className="w-screen h-screen bg-slate-300 flex flex-col justify-center items-center" >
      {/* <ToastContainer /> */}
      <h1 className='text-3xl font-bold mb-5'>Design Stickers</h1>

      <div className='card w-[370px] rounded-md shadow-md bg-white p-5'>

        {/* Cantidad de formularios */}
        <div className='flex justify-center items-center'>
          {/* Importante */}
          {
            formArray.map((v, i) => <><div
              className={`w-[35px] my-3 text-white rounded-full ${form - 1 === i || form - 1 === i + 1 || form ===
                  formArray.length ? 'bg-blue-500' : 'bg-slate-400'
                } h-[35px] flex justify-center items-center cursor-pointer`} onClick={() => handleCircleClick(v)}>
              {v}
              {/* Colores de las lineas  */}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] ${form === i + 2 || form ===
                  formArray.length ? 'bg-blue-600' : 'bg-slate-400'} h-[4px]`}></div>
              }
            </>)
          }
        </div>
        {/* Primer formulario */}
        <form onSubmit={handleSubmit}>
          {
            form === 1 && <div>

              {/* Primera pregunta */}
              <div className='flex flex-col mb-2' >
                <label htmlFor='name'>Nombre</label>
                <input value={state.name} onChange={inputHandler} className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="text" name='name'
                  placeholder='Bryan' id='name' />
              </div>

              {/* Segunda pregunta */}
              <div className='flex flex-col mb-2'>
                <label>Género</label>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='male'
                    name='gender'
                    value='Masculino'
                    checked={state.gender === 'Masculino'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>Masculino</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='female'
                    name='gender'
                    value='Femenino'
                    checked={state.gender === 'Femenino'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='female' className='ml-2'>Femenino</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='binary'
                    name='gender'
                    value = 'No binario'
                    checked = {state.gender === 'No binario'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='binary' className='ml-2'>No binario</label>
                </div>
              </div>

              {/* Tercera pregunta */}
              <div className='flex flex-col mb-2'>
                <label htmlFor='age'>Edad</label>
                <input value={state.age} onChange={inputHandler} className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="number" name='age'
                  placeholder='20' id='age' />
              </div>

              {/* Botones */}
              <div className='mt-4 flex justify-center items-center'>
                <button type='submit' onClick={next} className='px-3 py-2 text-lg rounded-md w-full bg-blue-500 text-white'>Next</button>
              </div>
            </div>
          }

        </form>
        {/* Segundo formulario */}
        <form onSubmit={handleSubmit}>
          {
            form === 2 && <div>
              {/* Primera pregunta */}
              <div className='flex flex-col mb-2'>
                <label htmlFor='city'>City</label>
                <input value={state.city} onChange={inputHandler} className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="text" name='city'
                  placeholder='San Salvador' id='city' />
              </div>

              {/* Segunda pregunta */}
              <div className='flex flex-col mb-2'>
                <label htmlFor='job'>Job</label>
                <input value={state.job} onChange={inputHandler} className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="text" name='job'
                  placeholder='Engineering' id='job' />
              </div>

              {/* Tercera pregunta */}
              <div className='flex flex-col mb-2'>
                <label htmlFor='address'>Address</label>
                <textarea value={state.address} onChange={inputHandler} rows='05' className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="text" name='address'
                  placeholder='Address' id='address' />
              </div>

              {/* Botones */}
              <div className='mt-4  gap-3 flex justify-center items-center'>
                <button onClick={previus} className='px-3 py-2 text-lg rounded-md w-full bg-gray-300 text-black'>Previus</button>

                <button type='submit' onClick={next} className='px-3 py-2 text-lg rounded-md w-full bg-blue-500 text-white'>Next</button>
              </div>
            </div>
          }
        </form>

        {/* Tercer Formulario */}
        <form onSubmit={handleSubmit}>
          {
            form === 3 && <div>
              {/* Primera pregunta */}
              <div className='flex flex-col mb-2'>
                <label htmlFor='distric'>Distric</label>
                <input value={state.distric} onChange={inputHandler} className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="text" name='distric'
                  placeholder='Distric' id='distric' />
              </div>

              {/* Segunda pregunta */}
              <div className='flex flex-col mb-2'>
                <label htmlFor='thana'>Thana</label>
                <input value={state.thana} onChange={inputHandler} className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="text" name='thana'
                  placeholder='Thana' id='thana' />
              </div>

              {/* Tercera pregunta */}
              <div className='flex flex-col mb-2'>
                <label htmlFor='post'>Post</label>
                <input value={state.post} onChange={inputHandler} rows='05' className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="text" name='post'
                  placeholder='Post' id='post' />
              </div>

              {/* Botones */}
              <div className='mt-4  gap-3 flex justify-center items-center'>
                <button onClick={previus} className='px-3 py-2 text-lg rounded-md w-full bg-gray-300 text-black'>Previus</button>

                <button onClick={finalSubmit} type='submit' className='px-3 py-2 text-lg rounded-md w-full bg-blue-500 text-white'>Submit</button>
              </div>
            </div>
          }
        </form>
      </div>

    </div>
  )
}

export default App