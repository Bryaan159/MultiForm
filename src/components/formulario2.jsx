import React from 'react';

const Formulario2 = ({ state, inputHandler, previus, next, handleSubmit}) => {
    return (
        <div>
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
                        <div className='mt-4 gap-3 flex justify-center items-center'>
                            <button onClick={previus} className='px-3 py-2 text-lg rounded-md w-full bg-gray-300 text-black'>
                                Previus
                            </button>
                            <button type='button' onClick={next} className='px-3 py-2 text-lg rounded-md w-full bg-blue-500 text-white'>
                                Next
                            </button>
                        </div>
                    </div>
                }
            </form>
        </div>
    )
}

export default Formulario2;