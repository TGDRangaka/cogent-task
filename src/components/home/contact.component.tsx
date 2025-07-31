"use client";

import React from 'react';
import { Send, Mail, User, MessageCircle, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Badge } from '../ui';

export default function ContactComponent() {
    const [form, setForm] = React.useState({ name: '', email: '', message: '' });
    const [status, setStatus] = React.useState('idle');
    const [error, setError] = React.useState('');
    const [focusedField, setFocusedField] = React.useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        if (e) e.preventDefault();
        setStatus('loading');
        setError('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                const data = await res.json();
                setError(data.error || 'Submission failed.');
                setStatus('error');
            }
        } catch {
            setError('Submission failed.');
            setStatus('error');
        }
    }

    return (
        <section id='contact' className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-100 rounded-full opacity-40"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-100 rounded-full opacity-30"></div>
                <div className="absolute bottom-40 right-10 w-12 h-12 bg-blue-200 rounded-full opacity-50"></div>

                {/* Geometric shapes */}
                <svg className="absolute top-20 right-1/4 w-32 h-32 text-blue-100 opacity-30" fill="currentColor" viewBox="0 0 100 100">
                    <polygon points="50,10 90,90 10,90" />
                </svg>
                <svg className="absolute bottom-32 left-20 w-28 h-28 text-indigo-100 opacity-25" fill="currentColor" viewBox="0 0 100 100">
                    <rect x="20" y="20" width="60" height="60" rx="8" />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <Badge className="bg-yellow-400 mb-8 !text-black hover:bg-yellow-500 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 w-fit">
                            EXCLUSIVE EVENT
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Join Saudi Arabia's
                            <span className="block text-blue-600">Financial Compliance Future?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Connect with our compliance experts and secure your spot at this transformative roundtable event.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {/* Contact Form */}
                        <div className="">
                            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                                <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Reserve Your Spot</h3>
                                    <p className="text-blue-100">Join industry leaders shaping the future of financial compliance in Saudi Arabia</p>
                                </div>

                                <div className="p-8">
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        {/* Name field */}
                                        <div className="group">
                                            <label htmlFor="name" className="flex items-center gap-2 text-gray-700 font-medium mb-3">
                                                <User className="w-4 h-4 text-gray-500" />
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="name"
                                                    type="text"
                                                    value={form.name}
                                                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField('')}
                                                    placeholder="Enter your full name"
                                                    required
                                                    className={`w-full bg-gray-50 border-2 text-gray-900 placeholder:text-gray-400 py-4 px-4 rounded-xl transition-all duration-300 focus:outline-none ${focusedField === 'name'
                                                        ? 'border-blue-500 bg-white shadow-lg'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                />
                                                {focusedField === 'name' && (
                                                    <div className="absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none animate-pulse"></div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Email field */}
                                        <div className="group">
                                            <label htmlFor="email" className="flex items-center gap-2 text-gray-700 font-medium mb-3">
                                                <Mail className="w-4 h-4 text-gray-500" />
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="email"
                                                    type="email"
                                                    value={form.email}
                                                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField('')}
                                                    placeholder="your.email@company.com"
                                                    required
                                                    className={`w-full bg-gray-50 border-2 text-gray-900 placeholder:text-gray-400 py-4 px-4 rounded-xl transition-all duration-300 focus:outline-none ${focusedField === 'email'
                                                        ? 'border-blue-500 bg-white shadow-lg'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                />
                                                {focusedField === 'email' && (
                                                    <div className="absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none animate-pulse"></div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Message field */}
                                        <div className="group">
                                            <label htmlFor="message" className="flex items-center gap-2 text-gray-700 font-medium mb-3">
                                                <MessageCircle className="w-4 h-4 text-gray-500" />
                                                Message *
                                            </label>
                                            <div className="relative">
                                                <textarea
                                                    id="message"
                                                    value={form.message}
                                                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                                    onFocus={() => setFocusedField('message')}
                                                    onBlur={() => setFocusedField('')}
                                                    placeholder="Tell us about your interest in the roundtable, your role, and any specific topics you'd like to discuss..."
                                                    required
                                                    rows={5}
                                                    className={`w-full bg-gray-50 border-2 text-gray-900 placeholder:text-gray-400 p-4 rounded-xl resize-none transition-all duration-300 focus:outline-none ${focusedField === 'message'
                                                        ? 'border-blue-500 bg-white shadow-lg'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                />
                                                {focusedField === 'message' && (
                                                    <div className="absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none animate-pulse"></div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Submit button */}
                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                className="w-full bg-gray-900 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                                                disabled={status === 'loading'}
                                            >
                                                <div className="flex items-center justify-center gap-3">
                                                    {status === 'loading' ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                            <span>Sending Request...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="w-5 h-5" />
                                                            <span>Register for Event</span>
                                                        </>
                                                    )}
                                                </div>
                                            </button>
                                        </div>

                                        {/* Status messages */}
                                        {status === 'success' && (
                                            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                </div>
                                                <div>
                                                    <p className="text-green-800 font-medium">Registration Successful!</p>
                                                    <p className="text-green-600 text-sm">We'll contact you within 24 hours with event details.</p>
                                                </div>
                                            </div>
                                        )}
                                        {status === 'error' && (
                                            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                                                <div className="text-red-600 text-sm">{error}</div>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom info */}
                    <div className="mt-16 text-center">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <CheckCircle className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Exclusive Access</h4>
                                    <p className="text-gray-600 text-sm">Limited to 50 senior compliance professionals</p>
                                </div>
                                <div>
                                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <User className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Expert Speakers</h4>
                                    <p className="text-gray-600 text-sm">Industry leaders and regulatory experts</p>
                                </div>
                                <div>
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Clock className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Full Day Event</h4>
                                    <p className="text-gray-600 text-sm">Comprehensive sessions and networking</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm mt-8">
                            © 2025 Cogent Solutions Event Management. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}