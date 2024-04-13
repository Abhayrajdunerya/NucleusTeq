import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'

const schema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup
        .string()
        .email("Email format is not valid")
        .required("Email is required"),
    channel: yup.string().required("Channel is required"),
})

type FormValues = {
    username: string,
    email: string,
    channel: string,
  }

const Form2Yup = () => {

    const form = useForm<FormValues>({
        defaultValues: {
          username: "",
          email: "",
          channel: "",
        },
        resolver: yupResolver(schema),
    });

    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted', data);
    }

    return (
        <div>
            <div className=''>
                <h1>From2 Yup</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate >
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' {...register('username')} />
                        <p className='error' >{errors.username?.message}</p>
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' {...register('email')} />
                        <p className='error' >{errors.email?.message}</p>
                    </div>

                    <div className="form-control">
                        <label htmlFor="channel">Channel</label>
                        <input type="text" id='channel' {...register('channel')} />
                        <p className='error' >{errors.channel?.message}</p>
                    </div>

                    <button type='submit' >Submit</button>
                </form>

                <DevTool control={control} />
            </div>
        </div>
    )
}

export default Form2Yup