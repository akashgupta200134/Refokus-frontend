
import {useForm} from 'react-hook-form'

const Form = ({handleSubmitdata}) => {

  const {register , handleSubmit , reset} = useForm();

  const handleSubmitData =(data) =>{
    handleSubmitdata(data);
    reset();
  
  }


  return (
    <div className=" ">
    <form onSubmit ={handleSubmit(handleSubmitData)}
      className="flex justify-center items-center gap-10"
      action=""
    >
      <input  required {...register('name')}
        className="rounded-md h-12 w-1152  p-2 border border-black"
        type="text"
        placeholder="Name"
      />
      <input required {...register('profession')}
        className="rounded-md h-12 w-52  p-2 border border-black"
        type="text"
        placeholder="Profession"
      />
      <input required {...register('email')}
        className="rounded-md h-12 w-52  p-2 border border-black"
        type="email"
        placeholder="Email"
      />
      <input {...register('image')}
        className="rounded-md h-12 w-52  p-2 border border-black"
        type="text"
        placeholder="Image Url"
      />
      <input  
        className=" text-white bg-blue-500 h-12 w-32 rounded-lg"
        type="submit"
        value="Submit"
      />
    </form>
  </div>
  )
}

export default Form
