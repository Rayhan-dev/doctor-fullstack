import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile] = useUpdateProfile(auth);
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.Name });
    };
    console.log(user);
    let errorMessage;
    if (error) {
        errorMessage = (
            <div>
                <p className='text-red-700'>Error: {error.message}</p>
            </div>
        );
      }
      if (loading) {
          return <Loading></Loading>;
      }
    return (
        <div style={{
            "minHeight": "80vh"
        }} className='flex justify-center  items-center '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class=" form-control w-full max-w-xs">
                            <label class="font-bold label">
                                <span class="label-text">Name</span>
                            </label>
                            <input {...register("Name")} type="text" class="border rounded-lg border-[#CFCFCF] mb-4 input w-full" />
                        </div>
                        <div class=" form-control w-full max-w-xs">
                            <label class="font-bold label">
                                <span class="label-text">Email</span>
                            </label>
                            <input  {...register("email", { required: true })} type="email" class="border rounded-lg border-[#CFCFCF] mb-4 input w-full" />
                            <label class="label">
                                <span class="label-text-alt text-red-700">{errors.email?.type === 'required' && "Email is required"}</span>
                            </label>
                        </div>
                        <div class=" form-control w-full max-w-xs">
                            <label class="font-bold label">
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" class="border rounded-lg border-[#CFCFCF]  input w-full" />
                            <label class="label">
                                <span class="label-text-alt text-red-700">  {errors.password && "Password is required"}</span>
                            </label>
                        </div>
                        {errorMessage}
                        <button type='submit' class="btn bg-accent text-white w-full my-5">Sign Up</button>
                    </form>
                    <p className='text-sm text-center'>New to doctors protal? <span className='text-secondary'><Link to={'/register'}>Create New Account</Link></span></p>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline ">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;