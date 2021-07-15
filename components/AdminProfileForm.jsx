import classNames from 'classnames'
import { useForm } from 'react-hook-form'

export default function AdminProfileForm ({closeModal}) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset();
        fetch('http://kodemiaappback-chatty-bandicoot-kf.mybluemix.net/koders/60dfce7b5a54fc3f5c716090',{
            method:'PATCH',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
							'Access-Control-Allow-Origin':'*',
							'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGZjZTdiNWE1NGZjM2Y1YzcxNjA5MCIsImlhdCI6MTYyNjMxNDczN30.UxKTGdsGwB-HJWvP5NqZjiewJqS-4Lya06cbe9ZkBYU'
            } 
        })
		.then(response => response.json())
		.then(data => console.log(data));
        closeModal()

    }
    return (    
    <div className={classNames(
          'max-w-xs',' p-10'
          )}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classNames('mb-4')}>
              <label className={classNames(
                'label-modal'
                )} for='first-name'>
                  Nombre
              </label>
              <input {...register('firstName', {
                  required: { value: true, message: 'Campo obligatorio...' }
                })} className={classNames('input-modal')}
                id='first-name' type='text' placeholder='Nombre'/> 
            </div>
            <div className={classNames('mb-4')}>
              <label className={classNames(
                'label-modal'
                )} for='last-name'>
                  Apellido
              </label>
              <input {...register('lastName', {
                  required: { value: true, message: 'Campo obligatorio...' }
                })} className={classNames('input-modal')}
                id='las-name' type='text' placeholder='Apellido'/> 
            </div>
            <div className={classNames('mb-4')}>
              <label className={classNames(
                'label-modal'
                )} for='picture'>
                  Tu imagen
              </label>
              <input {...register('picture', {
                  required: { value: true, message: 'Campo obligatorio...' }
                })}className={classNames(
                'input-modal'
                )} id='picture' type='text' placeholder='Tu foto'/> 
            </div>
            <div className={classNames(
              'flex ',
              'items-center',
              'justify-between'
              )}>
              <a className={classNames(
                'align-baseline', 
                'inline-block',
                'hover:text-cyan-ka',
                'text-sm text-white-ka'
                )} onClick={closeModal}>
                Cancelar
              </a> 
              <button className={classNames(
                'button-ka',
                'hover:bg-cyan-ka'
                )} type='submit'>
                Enviar
              </button>
              
    </div>
  </form>
</div>
    )
}