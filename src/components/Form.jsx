import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log(formData);
    };

    return (

        <div class="bg-white rounded-3xl flex items-center ">

            <form class="w-1/2 mx-auto pl-4 sm:pl-8" onSubmit={handleSubmit}>
                <div class="flex ">
                    
                    <input
                        class="placeholder:text-black placeholder:font-semibold  mt-4 px-2 sm:px-3 py-2  border-b-2 border-gray-100"
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Votre nom:'
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div class="flex ">
                    
                    <input
                        class="placeholder:text-black placeholder:font-semibold  mt-1 px-2 sm:px-3 py-2 border-b-2 border-gray-100"
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Votre email:'
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div class="flex ">
                    
                    <input
                        class=" placeholder:text-black placeholder:font-semibold  mt-1 px-2 sm:px-3 py-2 resize-none  border-b-2 border-gray-100"
                        type="text"
                        id="message"
                        name="message"
                        placeholder='Votre message'
                        value={message}
                        onChange={handleChange}
                    ></input>
                </div>
                <button class="flex justify-start bg-indigo-950 hover:bg-blue-700 text-white font-bold my-4 py-1 px-4 rounded-full" type="submit">Soumettre</button>
            </form>

            <div class="text-left  w-1/2 mx-auto px-4 py-4 border-l-2 border-gray-100 ">
                <p>
                    Siege au Canada Colow-so Inc.
                </p>
                <p>
                    1242 Rue Stanley, Bureau 206, 2ème étage Montréal, QC H3B 257 <br />
                    Tel +438-940-2403
                </p>
            </div>

        </div>

    );
};


