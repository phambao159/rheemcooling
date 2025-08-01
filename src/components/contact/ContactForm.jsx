import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
    const navigate = useNavigate();
    const [formData, setFormdata] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        title: "",
        message: "",
        agreed: false,
    });

    const [error, setError] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        title: "",
        message: "",
        agreed: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;
        const newError = {};

        if (!formData.fname.trim()) {
            newError.fname = "First name is required!";
            hasError = true;
        }

        if (!formData.lname.trim()) {
            newError.lname = "Last name is required!";
            hasError = true;
        }

        if (!formData.email.trim()) {
            newError.email = "Email is required!";
            hasError = true;
        }

        if (!formData.phone.trim()) {
            newError.phone = "Phone number is required!";
            hasError = true;
        }

        if (!formData.title.trim()) {
            newError.title = "Title is required!";
            hasError = true;
        }

        if (!formData.message.trim()) {
            newError.message = "Message is required!";
            hasError = true;
        }

        if (!formData.agreed) {
            newError.agreed = "You must agree to the privacy policy.";
            hasError = true;
        }

        setError(newError);

        if (!hasError) {
            alert("Thanks for contacting us! Please wait for our response via email.");
            setFormdata({
                fname: "",
                lname: "",
                email: "",
                phone: "",
                title: "",
                message: "",
                agreed: false,
            });
        }
    };

    return (
        <div className="isolate px-6 py-10 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold text-gray-900">Contact Us</h2>
                <p className="mt-2 text-lg text-gray-600">We'd love to hear from you!</p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* First name */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <label htmlFor="fname" className="block text-sm font-semibold text-gray-900">
                            First name <span className="text-[#DC143C]">*</span>
                        </label>
                        <input
                            id="fname"
                            name="fname"
                            type="text"
                            className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            value={formData.fname}
                            onChange={handleChange}
                        />
                        {error.fname && <p className="text-sm text-red-500 mt-1">{error.fname}</p>}
                    </div>

                    {/* Last name */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <label htmlFor="lname" className="block text-sm font-semibold text-gray-900">
                            Last name <span className="text-[#DC143C]">*</span>
                        </label>
                        <input
                            id="lname"
                            name="lname"
                            type="text"
                            className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            value={formData.lname}
                            onChange={handleChange}
                        />
                        {error.lname && <p className="text-sm text-red-500 mt-1">{error.lname}</p>}
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                            Email <span className="text-[#DC143C]">*</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {error.email && <p className="text-sm text-red-500 mt-1">{error.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="sm:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
                            Phone number <span className="text-[#DC143C]">*</span>
                        </label>
                        <div className="mt-2 flex rounded-md bg-white outline outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
                            <div className="relative">
                                <select
                                    name="country"
                                    className="appearance-none rounded-l-md py-2 pl-3 pr-8 text-gray-500 focus:outline-none"
                                >
                                    <option>US</option>
                                    <option>VN</option>
                                    <option>EU</option>
                                </select>
                                <ChevronDownIcon className="absolute right-2 top-2.5 size-5 text-gray-500 pointer-events-none" />
                            </div>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="123-456-7890"
                                className="w-full py-2 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {error.phone && <p className="text-sm text-red-500 mt-1">{error.phone}</p>}
                    </div>

                    {/* Title */}
                    <div className="sm:col-span-2">
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-900">
                            Title <span className="text-[#DC143C]">*</span>
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        {error.title && <p className="text-sm text-red-500 mt-1">{error.title}</p>}
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                            Message <span className="text-[#DC143C]">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {error.message && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
                    </div>

                    {/* Agree checkbox */}
                    <div className="sm:col-span-2">
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                id="agreed"
                                name="agreed"
                                type="checkbox"
                                checked={formData.agreed}
                                onChange={handleChange}
                                className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                            />
                            I agree to the{' '}
                            <a href="#" className="font-semibold text-[#DC143C] underline">privacy policy</a>
                        </label>
                        {error.agreed && <p className="text-sm text-red-500 mt-1">{error.agreed}</p>}
                    </div>
                </div>

                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-[#DC143C] px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-red-600"
                    >
                        Send us
                    </button>
                </div>
            </form>
        </div>
    );
}
