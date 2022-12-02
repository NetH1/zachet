import { useState } from "react"
import { Link, Route, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ login: '', password: '' })
    const [showModalLogin, setShowModalLogin] = useState(false)
    const [showModalReg, setShowModalReg] = useState(false)
    const [isLogged, setIslogged] = useState(false)
    const ValidateUser = () => {
        if (user.login == users[0].userLogin && user.password == users[0].userPassword) {
            setShowModalLogin((showModalLogin) => showModalLogin = false)
            setIslogged((isLogged) => isLogged = true)
            alert('Вы успешно вошли')
            setTimeout(() => {
                navigate('/modules')
            }, 2000)
        }
    }
    const [users, setUsers] = useState([
        { id: 1, userLogin: 'Hexlet', userPassword: 'Hexlet888' },
        { id: 2, userLogin: 'Ramzes', userPassword: 'Ramzes777' },
    ])
    return (
        <>
            <div className="bg-black py-4 pb-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <img className="w-24 h-24" src={logo} alt='logo' />
                    </div>
                    <ul className="text-white flex gap-x-6 text-2xl">
                        <Link to='/aboutus' className="cursor-pointer hover:border-b hover:border-b-white">О нас</Link>
                        <Link to='/contact' className="cursor-pointer hover:border-b hover:border-b-white">Контакты</Link>
                        <Link to='/plushka' className="cursor-pointer hover:border-b hover:border-b-white">Еще один свайпер</Link>
                    </ul>
                    <div className="flex text-white text-2xl gap-x-6">
                        {isLogged == true ?
                            <span>Hexlet</span>
                            : <button onClick={(showModalLogin) => setShowModalLogin(showModalLogin = true)} className="button-animate">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Войти
                            </button>}

                        {isLogged == true ?
                            '' : <button onClick={(showModalReg) => setShowModalReg(showModalReg = true)} className="button-animate">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Зарегистрироваться
                            </button>}
                    </div>
                </div>
                {showModalLogin === true
                    ? <div className="modal-vue">
                        <div onClick={(showModalLogin) => setShowModalLogin(showModalLogin = false)} className="overlay"></div>
                        <div className="modal text-xl">
                            <button onClick={(showModalLogin) => setShowModalLogin(showModalLogin = false)} className="close">x</button>
                            <div className="flex my-4"><span className="mr-4 text-white">Введите логин: <input value={user.login} onChange={e => setUser({ ...user, login: e.target.value })} className="text-black" placeholder="Login" type="text" /></span> </div>
                            <div className="flex my-4"><span className="mr-1 text-white">Введите пароль:</span> <input value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} className="text-black" placeholder="Password" type="password" /> </div>
                            <button onClick={ValidateUser} className="float-right  text-white bg-blue-500 py-2 hover:scale-105 rounded-lg px-4">Войти</button>
                        </div>
                    </div>
                    : ''}

                {showModalReg === true
                    ? <div className="modal-vue">
                        <div onClick={(showModalReg) => setShowModalReg(showModalReg = false)} className="overlay"></div>
                        <div className="modal text-xl">
                            <button onClick={(showModalReg) => setShowModalReg(showModalReg = false)} className="close">x</button>
                            <div className="flex my-4"><span className="mr-4 text-white">Введите логин: <input className="text-black" placeholder="Login" type="text" /></span> </div>
                            <div className="flex my-4"><span className="mr-1 text-white">Введите пароль:</span> <input className="text-black" placeholder="Password" type="text" /> </div>
                            <button onClick={() => alert('Вы зарегистрировались') } className="float-right  text-white bg-blue-500 py-2 hover:scale-105 rounded-lg px-4">Зарегистрироваться</button>
                        </div>
                    </div>
                    : ''}

            </div>
        </>
    )
}

export default Navbar;
