import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getUsers } from "../../../components/authencation/AuthencationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        criteriaMode: "all"
    });
    const { users } = useSelector((state) => state.users);
    let fetchMount = true;

    useEffect(() => {
        if (fetchMount) {
            dispatch(getUsers());
        }
        return () => {
            fetchMount = false;
        }
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        console.log(users);
        const user = users.find((element) => {
            return element.username === data.username && element.password === data.password;
        });

        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isLogined', JSON.stringify(true));
            navigate('/');
        } else {
            // thông báo lỗi
        }
    }

    return (
        <>
            <div>
                <section className="bg0 p-t-104 p-b-116">
                    <div className="container">
                        <div className="flex-w flex-tr">
                            <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className="mtext-105 cl2 txt-center p-b-30">Login</h4>
                                    <div className="bor8 m-b-20 how-pos4-parent">
                                        <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" {...register('username')} placeholder="Your Email Address" />
                                    </div>

                                    <div className="bor8 m-b-20 how-pos4-parent">
                                        <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" {...register('password')} placeholder="Your password Address" />
                                    </div>
                                    <button type="submit" className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Login;
