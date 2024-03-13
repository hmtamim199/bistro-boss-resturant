import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const SingUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { createUser } = useContext(AuthContext)

  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.loggedUser;
        console.log(loggedUser)
      })
      .catch((error) => {
        console.error(error)
        // ..
      });

  };
  return (
    <>
      <Helmet><title>bistro | singUp</title></Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing Up</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered" />
                {errors.name && <span>email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" />
                {errors.email && <span>email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password")} placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">sing up</button>
              </div>
              <p className="text-center"><small>Already have an account? <Link to='/login'>please login</Link></small></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;