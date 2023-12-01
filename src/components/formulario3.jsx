import React from 'react';

const Formulario3 = ({state,inputHandler, finalSubmit}) => {
    return(
        <div>
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
    )
};
export default Formulario3;