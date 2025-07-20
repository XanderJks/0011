import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Headphones, BarChart3, CheckCircle, Star, ArrowRight, Play, Zap, Shield, Clock, Users } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      restaurant: formData.get('restaurant'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      source: 'SocialFlows Website'
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/goka38wdmp545joe0kjjn49i551w5kf7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead 
        title="SocialFlows - Voice AI Assistenten voor Restaurants"
        description="Revolutioneer uw restaurant met SocialFlows Voice AI assistenten. Automatiseer reserveringen, bestellingen en klantenservice met geavanceerde spraaktechnologie."
        keywords="voice AI, restaurant automatisering, AI assistent, reserveringen, bestellingen, klantenservice, spraaktechnologie, Nederland, horeca"
        url="https://socialflows.nl"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-green-50/80 backdrop-blur-xl border border-green-200/50 text-green-700 mb-8 transition-all duration-800 shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              Enterprise AI Oplossingen
            </div>
            
            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent mb-8 leading-tight transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Professionele AI-assistenten voor uw restaurant
            </h1>
            
            {/* Subheadline */}
            <p className={`text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Verhoog uw operationele efficiëntie met geavanceerde spraaktechnologie. Automatiseer reserveringen, bestellingen en klantenservice met bewezen AI-oplossingen.
            </p>
            
            {/* Demo Video */}
            <div className={`mb-10 transition-all duration-800 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="relative max-w-4xl mx-auto">
                <div className="aspect-video bg-white/90 rounded-xl border border-green-200/50 backdrop-blur-xl flex items-center justify-center shadow-lg">
                  <button className="group flex items-center justify-center w-20 h-20 bg-green-500/20 backdrop-blur-xl rounded-full border border-green-400/40 hover:bg-green-500/30 transition-all duration-300 shadow-md">
                    <Play className="w-8 h-8 text-green-600 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-800 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button 
                onClick={() => scrollToSection('demo')}
                className="group relative px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center text-sm shadow-lg"
              >
                <Play className="w-4 h-4 mr-2" />
                Live Demo Bekijken
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-transparent border-2 border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100/50 transition-all duration-300 flex items-center text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Vrijblijvende Consultatie
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className={`mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 transition-all duration-800 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                24/7 beschikbaar
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Enterprise beveiliging
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Snelle implementatie
              </div>
            </div>
            
            {/* Hero Feature Blocks */}
            <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-800 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* 24/7 Beschikbaarheid */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Beschikbaarheid</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Continue service zonder onderbrekingen, zelfs buiten openingstijden
                  </p>
                </div>
              </div>

              {/* 99% Uptime */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise Betrouwbaarheid</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    99.9% uptime garantie met enterprise-grade infrastructuur
                  </p>
                </div>
              </div>

              {/* Snelle Setup */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Snelle Implementatie</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Operationeel binnen 1-2 weken met volledige ondersteuning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Enterprise AI-oplossingen voor restaurants
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Bewezen technologie die naadloos integreert met uw bestaande systemen en processen
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1: Automatische Reserveringen */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Geautomatiseerde Reserveringen</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Professionele verwerking van telefonische reserveringen met real-time beschikbaarheidscontrole en naadloze systeemintegratie voor optimale efficiency.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Continue beschikbaarheid
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Meertalige ondersteuning
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Volledige systeemintegratie
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2: Telefoonbestellingen */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Intelligente Bestellingen</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Professionele orderverwerking met gepersonaliseerde aanbevelingen en geoptimaliseerde upselling strategieën voor maximale omzetgroei.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Volledige menuintegratie
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      AI-gedreven upselling
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Veilige betalingsverwerking
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3: Klantenservice */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Headphones className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Professionele Klantenservice</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Consistente, professionele klanteninteractie met directe toegang tot complete klanthistorie en bedrijfsinformatie voor optimale service.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Uitgebreide kennisdatabase
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Intelligente escalatie
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Complete klanthistorie
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 4: Geavanceerde Analytics */}
              <div className="group relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 shadow-lg">
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Business Intelligence</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    Uitgebreide analytics en rapportage voor datagedreven besluitvorming en continue bedrijfsoptimalisatie met real-time inzichten.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Real-time analytics
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Performance dashboards
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Gedetailleerde rapportage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Waarom professionals kiezen voor SocialFlows
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Bewezen resultaten en enterprise-grade oplossingen voor de moderne horeca
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bewezen ROI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gemiddeld 35% toename in telefonische bestellingen binnen de eerste maand van implementatie.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Enterprise Beveiliging</h3>
                <p className="text-gray-700 leading-relaxed">
                  GDPR-compliant met end-to-end encryptie en 99.9% uptime SLA voor kritieke bedrijfsprocessen.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dedicated Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Persoonlijke accountmanager en 24/7 enterprise support voor continue bedrijfscontinuïteit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Enterprise Prijsmodellen
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Flexibele oplossingen die meegroeien met uw bedrijf. Alle plannen inclusief volledige ondersteuning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Starter Plan */}
              <div className="relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 flex flex-col h-full shadow-lg">
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Starter</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-800">€289</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Tot 500 belminuten
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Maandelijkse verbruik overzicht
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Email/WA ticket support
                    </li>
                    <li className="flex items-center text-sm text-gray-700 opacity-0">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Spacer item
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-green-50 hover:bg-green-100 text-green-700 font-semibold rounded-lg transition-all duration-300 border border-green-200 hover:border-green-300">
                    Start Nu
                  </button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="relative p-8 rounded-xl bg-white/90 border border-green-500/50 backdrop-blur-xl hover:bg-white hover:border-green-600/70 transition-all duration-300 flex flex-col h-full group shadow-lg">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-lg text-xs font-semibold">
                    Aanbevolen
                  </span>
                </div>
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Pro</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-800">€349</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Tot 750 belminuten
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Maandelijkse rapportage (Verbruik, aantal calls, succes percentage, totale bestelwaarde)
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Email/WA ticket support
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300">
                    Start Nu
                  </button>
                </div>
              </div>

              {/* Elite Plan */}
              <div className="relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 flex flex-col h-full shadow-lg">
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Elite</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-800">€449</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Tot 1000 belminuten
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Maandelijkse rapportage (Compleet en gereed voor boekhouding)
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Priority support
                    </li>
                    <li className="flex items-center text-sm text-gray-700 opacity-0">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Spacer item
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-green-50 hover:bg-green-100 text-green-700 font-semibold rounded-lg transition-all duration-300 border border-green-200 hover:border-green-300">
                    Start Nu
                  </button>
                </div>
              </div>

              {/* Custom Plan */}
              <div className="relative p-8 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl hover:bg-white hover:border-green-300/50 transition-all duration-300 flex flex-col h-full shadow-lg">
                <div className="relative z-10 text-center flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-gray-800">Op maat</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left flex-grow">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Onbeperkte gesprekken
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Custom integraties
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      Dedicated support
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      SLA garanties
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300">
                    Contact Ons
                  </button>
                </div>
              </div>
            </div>
            
            {/* ADD ONS Section */}
            <div className="mt-16 text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Uitbreidingen</h4>
              <div className="space-y-4 text-gray-700 max-w-4xl mx-auto">
                <div className="p-6 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl shadow-lg">
                  <p className="text-sm">Complete financiële rapportage en bestelanalyse (ideaal voor boekhouding) <span className="text-green-600 font-semibold">€29,99/maand</span></p>
                </div>
                <div className="p-6 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl shadow-lg">
                  <p className="text-sm">Geïntegreerde AI Chatbot voor website (inclusief bonnenprinter synchronisatie) <span className="text-green-600 font-semibold">€44,99/maand</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Start uw digitale transformatie
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Neem contact op voor een vrijblijvende consultatie en ontdek hoe SocialFlows uw bedrijfsprocessen kan optimaliseren
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Direct contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold">Business Line</p>
                        <p className="text-gray-700">+31 20 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold">Enterprise Sales</p>
                        <p className="text-gray-700">enterprise@socialflows.nl</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold">Business Hours</p>
                        <p className="text-gray-700">Ma-Vr 9:00-18:00 CET</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-white/90 border border-green-200/30 backdrop-blur-xl shadow-lg">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Enterprise Consultatie</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Persoonlijke analyse van uw bedrijfsprocessen en een op maat gemaakte implementatiestrategie. 
                    Volledig vrijblijvend en gebaseerd op bewezen methodieken.
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="relative">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 backdrop-blur-xl">
                      <p className="text-green-700 text-sm font-semibold">
                        ✅ Bedankt! Uw bericht is verzonden. We nemen binnen 24 uur contact met u op.
                      </p>
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 backdrop-blur-xl">
                      <p className="text-red-700 text-sm font-semibold">
                        ❌ Er is een fout opgetreden. Probeer het opnieuw of neem direct contact op.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-2">
                        Voornaam
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-white/90 border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl shadow-sm"
                        placeholder="Uw voornaam"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-2">
                        Achternaam
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-white/90 border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl shadow-sm"
                        placeholder="Uw achternaam"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      Zakelijk Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/90 border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl shadow-sm"
                      placeholder="naam@bedrijf.nl"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-semibold text-gray-800 mb-2">
                      Bedrijfsnaam
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      name="restaurant"
                      className="w-full px-4 py-3 bg-white/90 border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl shadow-sm"
                      placeholder="Naam van uw bedrijf"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                      Uw uitdaging
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 bg-white/90 border border-green-200/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-300 backdrop-blur-xl resize-none shadow-sm"
                      placeholder="Beschrijf uw huidige uitdagingen en doelstellingen..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Verzenden...
                      </>
                    ) : (
                      <>
                        Plan Consultatie
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">SocialFlows</h3>
                <p className="text-gray-700 mb-4 max-w-md">
                  Enterprise AI-oplossingen voor de moderne horeca. 
                  Bewezen technologie voor operationele excellentie.
                </p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <span className="text-green-700 text-xs font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <span className="text-green-700 text-xs font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <span className="text-green-700 text-xs font-bold">in</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-gray-800 font-semibold mb-4">Oplossingen</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Enterprise AI</a></li>
                  <li><a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Prijsmodellen</a></li>
                  <li><a href="#demo" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Live Demo</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-800 font-semibold mb-4">Enterprise</h4>
                <ul className="space-y-2">
                  <li><a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Contact Sales</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm">Documentatie</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm">System Status</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-green-200/30 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm">
                © 2025 SocialFlows. Alle rechten voorbehouden.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">Security</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}