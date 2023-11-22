import React, { useContext, useEffect, useState } from 'react';
import logo from './../assets/images/logo.png';
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { TheamContext } from '../Context/TheamContext';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { theam, setTheam } = useContext(TheamContext);

    useEffect(() => {
        console.log("Theam", theam);
    }, []);

    return (
        <div className='flex items-center p-5'>
            <img src={logo} width={60} height={60} />
            <div className='flex bg-slate-300 w-full p-2 mx-5 rounded-full items-center'>
                <HiOutlineMagnifyingGlass className="w-5 h-5" />
                <input type='text' placeholder='Search Games' className='px-2 bg-transparent outline-none' />
            </div>
            <div>
                {theam === 'light' ? (
                    <HiMoon
                        className="text-[40px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
                        onClick={() => {
                            setTheam('dark');
                            localStorage.setItem('theam', 'dark');
                        }}
                    />
                ) : (
                    <HiSun
                        className="text-[40px] bg-slate-500 text-white p-1 rounded-full cursor-pointer"
                        onClick={() => {
                            setTheam('light');
                            localStorage.setItem('theam', 'light');
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Header;
