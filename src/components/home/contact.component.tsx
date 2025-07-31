"use client";

import React from 'react';
import { ArrowRight, Send, Sparkles, Mail, User, MessageCircle } from 'lucide-react';
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
        <section className="min-h-screen relative overflow-hidden bg-gray-950">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
                <div className="max-w-2xl mx-auto">
                    {/* Header with animated text */}
                    <div className="text-center mb-12 sm:mb-16">
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-3 sm:mb-4 text-xs sm:text-sm">
                            Get in Touch
                        </Badge>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-4 tracking-tight">
                            Let's Connect
                        </h2>
                        <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
                            Ready to start something amazing? Drop us a message and let's make it happen.
                        </p>
                    </div>

                    {/* Glassmorphic form card */}
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                        <div className="relative p-8 sm:p-10 lg:p-12">
                            <div className="space-y-8">
                                {/* Name field */}
                                <div className="group">
                                    <div className="relative">
                                        <label
                                            htmlFor="name"
                                            className="flex items-center gap-2 text-white/90 font-medium mb-3 transition-colors group-focus-within:text-blue-300"
                                        >
                                            <User className="w-4 h-4" />
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={form.name}
                                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField('')}
                                            placeholder="Your full name"
                                            required
                                            className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 py-4 px-4 text-lg backdrop-blur-sm rounded-lg focus:outline-none"
                                        />
                                        {focusedField === 'name' && (
                                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                                        )}
                                    </div>
                                </div>

                                {/* Email field */}
                                <div className="group">
                                    <div className="relative">
                                        <label
                                            htmlFor="email"
                                            className="flex items-center gap-2 text-white/90 font-medium mb-3 transition-colors group-focus-within:text-blue-300"
                                        >
                                            <Mail className="w-4 h-4" />
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={form.email}
                                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField('')}
                                            placeholder="your@email.com"
                                            required
                                            className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 py-4 px-4 text-lg backdrop-blur-sm rounded-lg focus:outline-none"
                                        />
                                        {focusedField === 'email' && (
                                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                                        )}
                                    </div>
                                </div>

                                {/* Message field */}
                                <div className="group">
                                    <div className="relative">
                                        <label
                                            htmlFor="message"
                                            className="flex items-center gap-2 text-white/90 font-medium mb-3 transition-colors group-focus-within:text-blue-300"
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            value={form.message}
                                            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField('')}
                                            placeholder="Tell us about your project, ideas, or just say hello..."
                                            required
                                            rows={5}
                                            className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 p-4 text-lg backdrop-blur-sm resize-none rounded-lg focus:outline-none"
                                        />
                                        {focusedField === 'message' && (
                                            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                                        )}
                                    </div>
                                </div>

                                {/* Submit button */}
                                <div className="pt-4">
                                    <button
                                        className="w-full bg-black text-white font-bold py-5 px-6 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-0 group relative overflow-hidden rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        onClick={handleSubmit as any}
                                        disabled={status === 'loading'}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative flex items-center justify-center gap-3">
                                            {status === 'loading' ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    Sending Magic...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                                    Send Message
                                                    {/* <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /> */}
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </div>

                                {/* Status messages */}
                                {status === 'success' && (
                                    <div className="flex items-center justify-center gap-2 p-4 bg-green-500/20 border border-green-400/30 rounded-xl backdrop-blur-sm">
                                        <Sparkles className="w-5 h-5 text-green-300" />
                                        <span className="text-green-100 font-medium">Message sent successfully! We'll be in touch soon.</span>
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="flex items-center justify-center gap-2 p-4 bg-red-500/20 border border-red-400/30 rounded-xl backdrop-blur-sm">
                                        <span className="text-red-100 font-medium">{error}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Additional contact info */}
                    <div className="mt-12 text-center">
                        <p className="text-white/60 text-sm">
                            © 2025 Cogent Solutions Event Management. All Right Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}