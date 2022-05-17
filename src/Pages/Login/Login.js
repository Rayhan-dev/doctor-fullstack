import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';


const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    };
    let errorMessage;
    if (error || gError) {
        errorMessage = (
            <div>
            <p className='text-red-700'>Error: {error.message}</p>
          </div>
        )
      }
      if (loading || gLoading) {
        return <Loading></Loading>;
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div style={{
            "minHeight": "80vh"
        }} className='flex justify-center  items-center '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class=" form-control w-full max-w-xs">
                            <label class="font-bold label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email"  class="border rounded-lg border-[#CFCFCF] mb-4 input w-full" />
                            <label class="label">
                                <span class="label-text-alt text-red-700">{errors.email?.type === 'required' && "Email is required"}</span>
                            </label>

                        </div>
                        <div class=" form-control w-full max-w-xs">
                            <label class="font-bold label">
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password"  class="border rounded-lg border-[#CFCFCF]  input w-full" />
                            <label class="label">
                                <span class="label-text-alt text-red-700">  {errors.password && "Passowrd is required"}</span>
                            </label>
                        </div>
                        {errorMessage}
                        <small>Forgot Password?</small>
                        <input type="submit" value={'Login'} class="btn bg-accent text-white w-full my-5" />
                    </form>
                    <p className='text-sm text-center'>New to doctors protal? <span className='text-secondary'><Link to={'/register'}>Create New Account</Link></span></p>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline " onClick={() => signInWithGoogle()}>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;