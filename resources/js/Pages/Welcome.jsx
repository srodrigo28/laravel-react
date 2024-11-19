import React from "react"

import { Head, Link } from "@inertiajs/react"

export default function Welcome( { auth } ){
    return(
        <>
            <Head title="Home" />

            <div className="bg-gradient-to-r from-purple-500 to-blue-900 min-h-screen
            flex flex-col justify-center items-center text-white">

                <header className="text-center mb-32">
                    <h1>Gerencie seu condomínio com eficiência!</h1>
                </header>
                <div className="btn-group flex gap-2">
                <Link href={route('login')} className="bg-blue-600 flex justify-center hover:gb-blue-700 w-28
                    text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                        Login
                </Link>
                <Link href={route('register')} className="bg-green-600 hover:gb-green-700 w-28
                    text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                        Cadastrar
                </Link>
                </div>
            </div>
        </>
    )
}