import React, { useState } from 'react'

export default function Login() {
    const [login, setLogin] = useState(()=>{
        return {
            username: "",
            password: "",
            log: false,
        }
    })

    const changeInputLogin = event => {
        event.persist();
        setLogin(prev => {
            return {
                ...prev, 
                [event.target.name]: event.target.value,
                log: true,
            }
        })
    }

    const handleForm = event => {
        event.preventDefault();
        const name = login.username;
        if(name) {
            let tag = document.createElement('div');
            tag.className = "alert-sucsess";
            tag.textContent = 'Вы вошли на сайт как ' + name;
            let frm = document.forms.loginForm;
            frm.after(tag);
        }
        else {
            alert('Укажите данные');
        }
        
    }

    return (
        <div className='page-container'>
            <h2 className='form_title'>Войти на сайт</h2>
            <form onSubmit = {handleForm} className='form_wrap' name='loginForm'>
                <div className='input-wrap'>
                    <input type="username" id="username" name="username" value={login.username} onChange = {changeInputLogin} placeholder='user name' /> 
                </div>

                <div className='input-wrap'>
                <input type="password" id="password" name="password" value={login.password} onChange = {changeInputLogin} placeholder='password' />
                </div>

                <div className='input-wrap'>
                <button type="submit" className="button_green form_button"> Войти </button>
                </div>
            </form>
        </div>
    )
}