import React, { useState } from 'react'
import axios from 'axios';
import validator from 'validator';

const DOMEN_SERVER = 'http://localhost:3000';
const DOMEN_SITE = 'http://localhost:3000';


export default function Register() {
    const [register, setRegister] = useState(()=>{
        return {
            username: "",
            email: "",
            password: "",
        }
    })

    const changeInputRegister = event => {
        event.persist();
        setRegister(prev => {
            return {
                ...prev, 
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitChacking = event => {
        event.preventDefault();
        if(!validator.isEmail(register.email)) {
            alert("некорректный email");
        } else
        if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            alert("Пароль должен содержать строчные и прописные буквы, числа и длиной не менее 8 символов");
        } else {
            axios.post(DOMEN_SERVER+"/auth/registration/", {
                username: register.username,
                email: register.email,
                password: register.passsword,
            }).then(res => {
                if(res.data === true) {
                    window.location.href = DOMEN_SITE+"/auth"
                } else {
                    alert("Пользователь с таким email уже существует")
                }
            }).catch(() => {
                alert("Ошибка сервера")
            })
        }
    }

    return (
        <div className='page-container'>
            <h2 className='form_title'>Регистрация</h2>
            <form onSubmit = {submitChacking} className='form_wrap'>
                <div className='input-wrap'>
                    <input type="username" id="username" name="username" value={register.username} onChange = {changeInputRegister} placeholder='user name' /> 
                </div>

                <div className='input-wrap'>
                <input type="email" id="email" name="email" value={register.email} onChange = {changeInputRegister} placeholder='email' formNoValidate />
                </div>

                <div className='input-wrap'>
                <input type="password" id="password" name="password" value={register.password} onChange = {changeInputRegister} placeholder='password' />
                </div>

                <div className='input-wrap'>
                <button type="submit" className="button_green form_button"> зарегестрироваться </button>
                </div>
            </form>
        </div>
    )
}