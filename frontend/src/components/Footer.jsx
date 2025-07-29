import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import xyz from "../components/main.png"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="w-full bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Start building <span className="grade1">Accessible</span> web experiences today
              </h2>
              <p className="text-slate-400 text-lg">
                Join thousands of developers using Inclusight to create a more inclusive internet.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors duration-200 cursor-pointer">
                Contact us
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={xyz} alt="Inclusight Logo" className="w-16 h-12" />
              <span className="text-3xl font-semibold">Inclusight</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Inclusight empowers developers and teams to analyze, audit and improve website accessibility for all users. Let's build a more inclusive web.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white cursor-pointer">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white cursor-pointer">About</Link></li>
              <li><Link to="/testimonials" className="text-slate-400 hover:text-white cursor-pointer">Testimonials</Link></li>
              <li><Link to='/analyze' className="text-slate-400 hover:text-white cursor-pointer">Analyzer</Link></li>
            </ul>
          </div>  
          <div>
            <h3 className="text-white font-medium mb-6">Features</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400">Color contrast analysis</a></li>
              <li><a href="#" className="text-slate-400">Font & layout audit</a></li>
              <li><a href="#" className="text-slate-400">Code recommendations</a></li>
              <li><a href="#" className="text-slate-400">Accessible reports</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-medium mb-6">Connect</h3>
            <ul className="space-y-4">
              <li><a href="https://www.google.com" className="text-slate-400 hover:text-white flex  flex-row items-center gap-2"><FaTwitter/> Twitter</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white flex  flex-row items-center gap-2"><FaGithub/> GitHub</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white flex  flex-row items-center gap-2"><FaInstagram/> Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
          © 2025 Inclusight. All rights reserved.
        </div>
      </div>
    </div>
  );
};