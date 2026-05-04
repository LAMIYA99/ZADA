"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    image: string;
    client: string;
    duration: string;
    services: string[];
    scope?: string;
    industry?: string;
    raised?: string;
    website?: string;
    challenge: string;
    solution: string;
    gallery: string[];
  };
}

export default function ProjectDetailSection({ project }: ProjectDetailProps) {
  const fallbackImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";

  return (
    <div className="w-full bg-white text-[#1D1D24]">
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] min-h-[500px] lg:h-[80vh] flex items-end pb-12 lg:pb-20">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={project.image || fallbackImage} 
            alt={project.title} 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1710px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col max-w-[800px]">
            <div className="flex items-start gap-4 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C1FE72] mt-1 shrink-0">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
              </svg>
              <p className="text-white text-[16px] md:text-[18px] leading-relaxed max-w-[400px]">
                A <span className="text-[#C1FE72]">showcase of creativity</span>, strategy, and results explore the projects that define us.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <h1 className="text-[60px] md:text-[80px] lg:text-[120px] font-bold text-white leading-none tracking-tight">
                {project.title}
              </h1>
              <Link href="#" className="w-[88px] h-[56px] lg:w-[104px] lg:h-[64px] rounded-full bg-[#C1FE72] flex items-center justify-end p-2 group transition-colors hover:bg-[#aee63a]">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-95">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1D1D24]">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-[1710px] mx-auto px-6 md:px-12 py-16 lg:py-24">
        {/* Back Button & Meta Grid */}
        <div className="flex flex-col gap-16 mb-24">
          <Link href="/" className="w-max h-12 rounded-full bg-[#C1FE72] flex items-center justify-between p-1.5 pl-5 group transition-colors hover:bg-[#aee63a]">
            <span className="font-semibold text-[#1D1D24] text-[15px] mr-4">Back</span>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-95">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1D1D24]">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>

          <div className="flex flex-col md:flex-row gap-8 md:gap-0 border-t border-b border-transparent md:border-gray-200 py-4">
            <div className="flex-1 md:pr-8">
              <h4 className="text-[14px] text-gray-500 mb-2 font-medium">Scope of work</h4>
              <p className="text-[16px] md:text-[18px] font-medium text-[#1D1D24]">{project.scope || project.services.join(', ')}</p>
            </div>
            
            <div className="flex-1 md:px-8 border-l border-gray-200">
              <h4 className="text-[14px] text-gray-500 mb-2 font-medium">Industry</h4>
              <p className="text-[16px] md:text-[18px] font-medium text-[#1D1D24]">{project.industry || project.client}</p>
            </div>
            
            <div className="flex-1 md:px-8 border-l border-gray-200">
              <h4 className="text-[14px] text-gray-500 mb-2 font-medium">Raised</h4>
              <p className="text-[16px] md:text-[18px] font-medium text-[#1D1D24]">{project.raised || "-"}</p>
            </div>
            
            <div className="flex-1 md:pl-8 border-l border-gray-200">
              <h4 className="text-[14px] text-gray-500 mb-2 font-medium">Website</h4>
              <p className="text-[16px] md:text-[18px] font-medium text-[#1D1D24]">{project.website || "-"}</p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          <div className="lg:col-span-4">
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#1D1D24]">
              Description
            </h2>
          </div>
          
          <div className="lg:col-span-8">
            <div className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed whitespace-pre-wrap">
              {project.description}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="w-full">
            <div className="mb-12">
              <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#1D1D24]">
                Project Gallery
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="relative w-full h-[400px] lg:h-[600px] overflow-hidden rounded-2xl bg-gray-100">
                  <img 
                    src={imgUrl || fallbackImage} 
                    alt={`${project.title} gallery ${idx + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
