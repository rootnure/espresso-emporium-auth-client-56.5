import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const loginCreds = { email, password };
        // console.log(loginCreds);

        signInUser(email, password)
            .then(result => {
                // console.log(result.user.metadata);
                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime,
                }
                // update lst logged at in the database
                fetch('https://56-5-espresso-emporium-auth-server-jk8sypxlo.vercel.app/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.modifiedCount > 0) {
                            toast.success('Successfully logged in');
                            navigate('/');
                        }
                    })
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <>
            <Helmet>
                <title>Login | Espresso Emporium</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login to your account</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="example@domain.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div>
                            <p className="text-center mb-8">Don&apos;t have an account? <Link to='/register' className="underline font-semibold">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;