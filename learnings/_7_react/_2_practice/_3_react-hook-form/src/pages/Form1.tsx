import { useEffect } from 'react';
import { useForm, useFieldArray, FieldErrors } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

let renderCount = 0;

type FormValues = {
  username: string,
  email: string,
  channel: string,
  social: {
    twitter: string,
    facebook: string,
  },
  phoneNumbers: string[],
  phNumbers: {
    number: string;
  }[],
  age: number,
  dob: Date,
}

const Form1 = () => {

  const form = useForm<FormValues>({
    defaultValues: {
      username: "Batman",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{number: ''}],
      age: 0,
      dob: new Date(),
    },

    mode: "onSubmit", // default
    // mode: "onBlur",
    // mode: "onChange",
    // mode: "onTouched",
    // mode: "all",

    // defaultValues: async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users/1"
    //   );
    //   const data = await response.json();
    //   return {
    //     username: "Batman",
    //     email: data.email,
    //     channel: "",
    //   }
    // }
  });
  // const { name, ref, onChange, onBlur } = register("username")
  const { register, control, handleSubmit, formState, watch, getValues, setValue, reset, trigger } = form;
  const { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount } = formState;

  // console.log({ touchedFields, dirtyFields, isDirty, isValid });
  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });
  
  

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control
  })

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted', data);
  }

  const onEror = (error: FieldErrors<FormValues>) => {
    console.log("Get values", getValues(["username", "channel"]));
  }

  // const watchUsername = watch('username')
  // const watchUsername = watch(['username', 'email'])

  // const watchForm = watch();

  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log(value);
  //   });

  //   return () => subscription.unsubscribe();
  // }, [watch]);

  const handleGetValues = () => {
    // console.log("Get values", getValues());
    // console.log("Get values", getValues('social'));
    // console.log("Get values", getValues('social.twitter'));
    console.log("Get values", getValues(['username', 'channel']));
  }

  const handleSetValues = () => {
    setValue("username", "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset])

  renderCount++;

  return (
    <div className=''>
      <h1>From1 ({renderCount / 2})</h1>
      {/* <h2>Watched value: {watchUsername}</h2> */}
      {/* <h2>Watched value: {JSON.stringify(watchForm)}</h2> */}
      <form onSubmit={handleSubmit(onSubmit, onEror)} noValidate >
        <div className="form-control">
          <label htmlFor="username">Username</label>
          {/* <input type="text" id='username' name={name} ref={ref} onChange={onChange} onBlur={onBlur} /> */}
          <input type="text" id='username' {...register('username', {
            required: {
              value: true,
              message: "Username is required",
            },
            // disabled: true,
          })} />
          <p className='error' >{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' {...register('email', {
            pattern: {
              value: /^[a-zA-Z0-9. !#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
            validate: {
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== 'admin@gmail.com' || "Enter a different email"
                );
              },
              notBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                )
              }
            }
          })} />
          <p className='error' >{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id='channel' {...register('channel', {
            required: "Channel is required",
            // disabled: true,
          })} />
          <p className='error' >{errors.channel?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Twitter</label>
          <input type="text" id='twitter' {...register('social.twitter', {
            disabled: watch("channel") === "",
            required: "Enter twitter profile",
          })} />
          <p className='error' >{errors.social?.twitter?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Facebook</label>
          <input type="text" id='facebook' {...register('social.facebook')} />
          <p className='error' >{errors.social?.facebook?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">Primary phone</label>
          <input type="text" id='primary-phone' {...register('phoneNumbers.0')} />
          <p className='error' >{errors.social?.facebook?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary phone</label>
          <input type="text" id='secondary-phone' {...register('phoneNumbers.1')} />
          <p className='error' >{errors.social?.facebook?.message}</p>
        </div>

        <div className="">
          <label htmlFor="">List of phone numbers</label>
          <div className="">
            {
              fields.map((field, index) => {
                return (
                  <div className="form-control" key={field.id} >
                    <input type="text" {...register(`phNumbers.${index}.number` as const)} />
                    {/* <p className='error' >{errors.social?.facebook?.message}</p> */}
                    {index > 0 && (
                      <button type='button' onClick={() => remove(index)}>Remove</button>
                    )}
                  </div>
                );
              })
            }
            <button type='button' onClick={() => append({ number: "" })}>Add phone number</button>
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input type="number" id='age' {...register('age', {
            valueAsNumber: true,
            required: {
              value: true,
              message: "Age is required",
            }
          })} />
          <p className='error' >{errors.age?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="dob">Age</label>
          <input type="date" id='dob' {...register('dob', {
            valueAsDate: true,
            required: {
              value: true,
              message: "Date of birth is required",
            }
          })} />
          <p className='error' >{errors.dob?.message}</p>
        </div>

        

        <button type='button' onClick={() => reset()}>Reset</button>
        <button type='submit' disabled={!isDirty || !isValid || isSubmitting} >Submit</button>
        <button type='button' onClick={handleGetValues}>Get values</button>
        <button type='button' onClick={handleSetValues}>Set values</button>
        {/* <button type='button' onClick={() => trigger()}>Validate</button> */}
        <button type='button' onClick={() => trigger('channel')}>Validate</button>
      </form>

      <DevTool control={control} />
    </div>
  )
}

export default Form1