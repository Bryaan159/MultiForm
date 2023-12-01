import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'tailwindcss/tailwind.css';
import 'sweetalert2/dist/sweetalert2.css';

function App() {
  const formArray = [1, 2, 3, 4];
  const [form, setForm] = useState(formArray[0]);
  const [state, setState] = useState({
    name: '',
    gender: '',
    age: '',
    shopping_frequency: '',

    size: '',
    desing_AI: '',
    pack_surprise: '',

    motivate: '',
    instagram: '',
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
    if (state.motivate && state.instagram && state.thana && state.post) {
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

    if (form === 1 && state.name && state.gender && state.age && state.shopping_frequency) {
      // toast.success(successMessages[form], {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 400
      // });
      setForm(form + 1);
    } else if (form === 2 && state.size && state.desing_AI && state.pack_surprise) {
      // toast.success(successMessages[form], {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 400
      // });
      setForm(form + 1);
    } else if (form === 3 && state.motivate && state.instagram && state.thana && state.post) {
      // toast.error(errorMessages[form], {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 400
      // });
      setForm(form + 1);
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

    const { name, gender, age, shopping_frequency,
      size, desing_AI, pack_surprise,
      motivate, instagram, thana, post } = state;

    // Asegurarse de que todos los campos estén llenos antes de enviar la solicitud
    if (name && gender && age && shopping_frequency
      && size && desing_AI && pack_surprise &&
      motivate && instagram && thana && post) {
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/bryaan159/google_sheets/NhIKfIFrvqzvhNMh?tabId=Sheet1", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([[name, gender, age, shopping_frequency,
            size, desing_AI, pack_surprise,
            motivate, instagram, thana, post, new Date().toLocaleString()]])
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
            shopping_frequency: '',
            size: '',
            desing_AI: '',
            pack_surprise: '',
            motivate: '',
            instagram: '',
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
    <div className="w-full min-h-screen bg-slate-300 flex flex-col justify-center items-center">
      {/* <ToastContainer /> */}
      <h1 className='text-3xl font-bold mb-5'>Design Stickers</h1>

      <div className='card w-[378px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-md shadow-md bg-white p-7'>

        {/* Cantidad de formularios */}
        <div className='flex justify-center items-center'>
          {/* Importante */}
          {
            formArray.map((v, i) => <><div
            className={`w-[60px] sm:w-[70px] my-3 text-white rounded-full ${form - 1 === i || form - 1 === i + 1 || form - 1 === i + 2 || form === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[40px] flex justify-center items-center cursor-pointer`}
            onClick={() => handleCircleClick(v)}>
              {v}
              {/* Colores de las lineas  */}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] ${form === i + 2 || form === i + 3 || form ===
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
                <label htmlFor='name' className='font-bold'>Nombre</label>
                <input value={state.name} onChange={inputHandler} className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="text" name='name'
                  placeholder='Bryan' id='name' />
              </div>

              {/* Segunda pregunta */}
              <div className='flex flex-col mb-2'>
                <label htmlFor='age' className='font-bold'>Edad</label>
                <input value={state.age} onChange={inputHandler} className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="number" name='age'
                  placeholder='20' id='age' />
              </div>

              {/* Tercera pregunta */}

              <div className='flex flex-col mb-2'>
                <label htmlFor='gender' className='font-bold'>Género</label>
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
                    value='No binario'
                    checked={state.gender === 'No binario'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='binary' className='ml-2'>No binario</label>
                </div>
              </div>

              {/* Cuarta pregunta */}
              <div className='flex flex-col mb-2'>
                <label className='font-bold'>¿Usas stickers a menudo en tu vida diaria?</label>

                {/* Opcion 1 */}
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='diario'
                    name='shopping_frequency'
                    value='A diario'
                    checked={state.shopping_frequency === 'A diario'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='diario' className='ml-2'>A diario</label>
                </div>

                {/* Opcion 2 */}
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='varias'
                    name='shopping_frequency'
                    value='Varias veces a la semana'
                    checked={state.shopping_frequency === 'Varias veces a la semana'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='varias' className='ml-2'>Varias veces a la semana</label>
                </div>

                {/* Opcion 3 */}
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='raramente'
                    name='shopping_frequency'
                    value='Raramente'
                    checked={state.shopping_frequency === 'Raramente'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='raramente' className='ml-2'>Raramente</label>
                </div>

                {/* Opcion 4 */}
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='nunca'
                    name='shopping_frequency'
                    value='Nunca'
                    checked={state.shopping_frequency === 'Nunca'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='nunca' className='ml-2'>Nunca</label>
                </div>

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
                <label htmlFor='size' className='font-bold'>¿Tienes preferencia de tamaño para los stickers?</label>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='male'
                    name='size'
                    value='Pequeños (5cm)'
                    checked={state.size === 'Pequeños (5cm)'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>Pequeños (5cm)</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='male'
                    name='size'
                    value='Medianos (10cm)'
                    checked={state.size === 'Medianos (10cm)'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>Medianos (10cm)</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='male'
                    name='size'
                    value='Grandes(+10cm)'
                    checked={state.size === 'Grandes(+10cm)'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>Grandes (mas de 10cm)</label>
                </div>
              </div>

              {/* Segunda pregunta */}
              <div className='flex flex-col mb-2'>
                <label className='font-bold' htmlFor='IA'>¿Pagarías más por stickers con diseños generados por inteligencia artificial o efectos especiales?</label>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='desing_AI'
                    name='desing_AI'
                    value='Si'
                    checked={state.desing_AI === 'Si'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>Si</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='desing_AI'
                    name='desing_AI'
                    value='No'
                    checked={state.desing_AI === 'No'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>No</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='desing_AI'
                    name='desing_AI'
                    value='No estoy seguro(a)'
                    checked={state.desing_AI === 'No estoy seguro(a)'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>No estoy seguro(a)</label>
                </div>
              </div>

              {/* Tercera pregunta */}
              <div className='flex flex-col mb-2'>
                <label className='font-bold' htmlFor='pack_surprise'>¿Qué opinas sobre la idea de incluir un sticker sorpresa en cada pack?</label>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='pack_surprise'
                    name='pack_surprise'
                    value='Me encanta la idea'
                    checked={state.pack_surprise === 'Me encanta la idea'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='pack_surprise' className='ml-2'>Me encanta la idea</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='pack_surprise'
                    name='pack_surprise'
                    value='No me interesa'
                    checked={state.pack_surprise === 'No me interesa'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>No me interesa</label>
                </div>
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

              {/* Cuarta pregunta */}
              <div className='flex flex-col mb-2'>
                <label htmlFor='motivate' className='font-bold'>¿Qué te motivaría a comprar stickers personalizados?</label>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='motivate'
                    name='motivate'
                    value='Coleccionismo y afición por stickers'
                    checked={state.motivate === 'Coleccionismo y afición por stickers'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='motivate' className='ml-2'>Coleccionismo y afición por stickers</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='motivate'
                    name='motivate'
                    value='Uso como decoración personal'
                    checked={state.motivate === 'Uso como decoración personal'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>Uso como decoración personal</label>
                </div>

                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='motivate'
                    name='motivate'
                    value='Recuerdos de lugares o eventos especiales'
                    checked={state.motivate === 'Recuerdos de lugares o eventos especiales'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='motivate' className='ml-2'>Recuerdos de lugares o eventos especiales</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='motivate'
                    name='motivate'
                    value='Regalos para amigos o familiares'
                    checked={state.motivate === 'Regalos para amigos o familiares'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>Regalos para amigos o familiares</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='motivate'
                    name='motivate'
                    value='Otro'
                    checked={state.motivate === 'Otro'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>Otro</label>
                </div>

              </div>


              {/* Segunda pregunta */}
              <div className='flex flex-col mb-2'>
                <label className='font-bold' htmlFor='instagram'>¿Te interesa participar en concursos de diseño en Instagram para crear stickers?</label>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='eventsInstagram'
                    name='instagram'
                    value='Me gustaría participar'
                    checked={state.instagram === 'Me gustaría participar'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>Me gustaría participar</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='eventsInstagram'
                    name='instagram'
                    value='No me interesa participar'
                    checked={state.instagram === 'No me interesa participar'}
                    onChange={inputHandler}
                  />
                  <label htmlFor='male' className='ml-2'>No me interesa participar</label>
                </div>
              </div>

              {/* Tercer pregunta */}
              <div className='flex flex-col mb-2'>
                <label htmlFor='thana'>Thana</label>
                <input value={state.thana} onChange={inputHandler} className='p-2 border border-slate-400
            mt-1 outline-0 focus:border-blue-500' type="text" name='thana'
                  placeholder='Thana' id='thana' />
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