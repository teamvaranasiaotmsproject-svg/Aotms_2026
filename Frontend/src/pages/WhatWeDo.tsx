import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const WhatWeDo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#placements') {
      navigate('/placements', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 section-heading">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto section-subheading">
            We are transitioning our placement and student success content to a dedicated experience.
            Please visit our new <a href="/placements" className="text-blue-600 underline font-bold">Placements Page</a> for detailed records.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
