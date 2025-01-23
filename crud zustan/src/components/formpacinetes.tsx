import {useForm}  from 'react-hook-form';
export default function PatientForm() {

    const {register, handleSubmit,formState:{errors}} = useForm();


    const registerPatient = (data) => {
        console.log(data)
    }
    
  
    return (
        <div>
        <h2>Seguimiento Pacientes</h2>
    
        <p>
            Añade Pacientes y <span>Administralos</span>
        </p>
    
        <form noValidate  onSubmit={handleSubmit(registerPatient )}>
            <div>
                <label htmlFor="name">Paciente</label>
                <input id="name" type="text" placeholder="Nombre del Paciente" 
                {...register('name', {
                    required: "Nombre del Paciente es requerido",


                })}
                />
                {errors.name?.message?.toString()} 
                
            </div>
    
            <div>
                <label htmlFor="caretaker">Propietario</label>
                <input id="caretaker" type="text" placeholder="Nombre del Propietario" 
                {...register('caretaker', {
                    required: "Nombre del Propietario es requerido",
                })}
                />
                {errors.caretaker?.message?.toString()}
            </div>
    
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Email de Registro" 
                {...register('email', {
                    required: "Email es requerido",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email no válido",
                    },
                })}
                />
                {errors.email?.message?.toString()}
            </div>
    
            <div>
                <label htmlFor="date">Fecha Alta</label>
                <input id="date" type="date" 
                {...register('date', {
                    required: "Fecha de Alta es requerida",
                })}
                />
                {errors.date?.message?.toString()}
            </div>
    
            <div>
                <label htmlFor="symptoms">Síntomas</label>
                <textarea id="symptoms" placeholder="Síntomas del paciente"
                 {...register('symptoms', {
                    required: "Síntomas del paciente son requeridos",
                    minLength: {
                        value: 10,
                        message: "Debe tener al menos 10 caracteres",
                    },
                    maxLength: {
                        value: 200,
                        message: "No debe tener más de 200 caracteres",
                    },
                })}
                >
               {errors.symptoms?.message?.toString()}
                </textarea>
            </div>
    
            <input type="submit" value="Guardar Paciente" />
        </form>
    </div>
    )
  }