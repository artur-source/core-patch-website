'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, X, Instagram, Globe, ChevronRight } from "lucide-react";

/**
 * Core & Patch - Institutional Website
 * Design: Art Déco Reinterpretado
 * Color: Deep Black (#0B0B0B), Off-white (#F2F2ED), Matte Gold (#BFA66A)
 * Typography: Montserrat (titles), Inter (body)
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const whatsappNumber = "5511940572858";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá%20Core%20%26%20Patch%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.`;
  const emailAddress = "corepatch.dev@gmail.com";
  const instagramUrl = "https://www.instagram.com/corepatch.dev?igsh=MXh6eTNkeWJzbXNnYQ==";
  const englishUrl = "https://core-patch-website-en.vercel.app";

  const navLinks = [
    { href: "#solucoes", label: "Soluções" },
    { href: "#posicionamento", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const services = [
    {
      id: "01",
      title: "Automação de Processos com IA",
      description: "Automatizamos tarefas operacionais repetitivas utilizando inteligência artificial e integrações entre sistemas.",
      benefits: ["Atendimento automatizado", "Qualificação de leads", "Fluxos operacionais inteligentes"]
    },
    {
      id: "02",
      title: "Relatórios e Dashboards Automáticos",
      description: "Transformamos dados em relatórios automáticos e dashboards estratégicos para tomada de decisão.",
      benefits: ["Relatórios automáticos", "Visualização de métricas", "Redução de trabalho manual"]
    },
    {
      id: "03",
      title: "Integração entre Sistemas",
      description: "Conectamos plataformas que normalmente não se comunicam, eliminando retrabalho e inconsistência de dados.",
      benefits: ["Integração ERP, CRM e financeiro", "Sincronização de dados", "Processos unificados"]
    },
    {
      id: "04",
      title: "Desenvolvimento de Sistemas e MVPs",
      description: "Criamos aplicações web, sistemas internos e MVPs para empresas que precisam lançar soluções digitais rapidamente.",
      benefits: ["Landing pages", "Sistemas internos", "MVPs para validação de produtos"]
    },
    {
      id: "05",
      title: "Soluções SaaS para Nichos",
      description: "Desenvolvemos softwares especializados para setores específicos, resolvendo problemas operacionais de forma simples.",
      benefits: ["Ferramentas para setores específicos", "Automação de documentos", "Plataformas de gestão"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-primary/30">
        <div className="container flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
            <span className="text-xl font-extrabold tracking-[0.3em] text-primary">CORE & PATCH</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-xs uppercase tracking-widest hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* Language Switcher */}
            <a 
              href={englishUrl}
              className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-primary transition-colors border border-primary/30 px-4 py-2"
              title="Switch to English"
            >
              <Globe className="w-4 h-4" />
              EN
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-primary hover:opacity-80 transition-opacity"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-primary/30 bg-background">
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-widest hover:text-primary transition-colors py-3 border-b border-primary/10 last:border-b-0"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href={englishUrl}
                className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-primary transition-colors py-3 border border-primary/30 px-4 justify-center"
                title="Switch to English"
              >
                <Globe className="w-4 h-4" />
                English
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-primary/40 overflow-hidden" id="home">
        {/* Decorative background lines */}
        <div className="absolute inset-0 flex justify-between px-10 opacity-5 pointer-events-none">
          <div className="w-px h-full bg-primary"></div>
          <div className="w-px h-full bg-primary"></div>
          <div className="w-px h-full bg-primary"></div>
          <div className="w-px h-full bg-primary"></div>
        </div>

        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
            <h1 className="mb-6 fade-in-up text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Automação, Inteligência e Sistemas para Empresas Modernas
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Construímos soluções digitais que reduzem custos operacionais, automatizam processos e escalam negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-artdeco px-8 py-4 text-sm uppercase tracking-widest font-bold">
                Solicitar diagnóstico
              </a>
              <a href="#solucoes" className="btn-artdeco-outline px-8 py-4 text-sm uppercase tracking-widest font-bold border border-primary/30 hover:bg-primary/10 transition-colors">
                Conhecer soluções
              </a>
            </div>
            <div className="w-full h-px bg-primary mt-16 opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="section-spacing bg-secondary/5" id="solucoes">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="mb-6">Soluções</h2>
            <div className="w-12 h-px bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-primary/20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`p-10 border-primary/20 hover:bg-secondary/20 transition-colors flex flex-col h-full
                  ${index % 3 !== 2 ? 'lg:border-r' : ''} 
                  ${index < 3 ? 'lg:border-b' : ''}
                  ${index % 2 !== 1 ? 'md:border-r lg:md:border-r-0' : ''}
                  ${index < 4 ? 'md:border-b lg:md:border-b-0' : ''}
                  border-b md:border-b lg:border-b-0
                `}
              >
                <span className="text-primary text-xs font-bold tracking-widest mb-6 block">{service.id}</span>
                <h3 className="mb-6 text-xl">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-8 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3 mt-auto">
                  {service.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="text-[10px] uppercase tracking-widest text-primary flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posicionamento Estratégico */}
      <section className="section-spacing" id="posicionamento">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-12">Tecnologia aplicada a resultados</h2>
            <div className="deco-frame p-12 border border-primary/30 relative">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
              
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light italic">
                "Na Core & Patch, tecnologia não é apenas código. É estrutura para crescimento, eficiência operacional e escala."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="section-spacing bg-secondary/5" id="projetos">
        <div className="container">
          <h2 className="mb-20 text-center">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <a
              href="https://regiflex-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card-artdeco relative overflow-hidden p-12 border border-primary/20 bg-background hover:border-primary/50 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="mb-4 group-hover:text-primary transition-colors text-2xl">RegiFlex</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Plataforma de gestão de registros. Interface técnica, funcional e orientada a processos.
                </p>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold">
                  Ver projeto <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer / Contato */}
      <footer className="section-spacing border-t border-primary/30" id="contato">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="mb-8">Vamos construir algo?</h2>
              <p className="text-muted-foreground text-lg mb-12 max-w-md">
                Seja para automatizar sua operação ou desenvolver um novo sistema, estamos prontos para o desafio.
              </p>
              
              <div className="space-y-6">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm uppercase tracking-widest">WhatsApp Business</span>
                </a>
                <a href={`mailto:${emailAddress}`} className="flex items-center gap-4 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm uppercase tracking-widest">{emailAddress}</span>
                </a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-sm uppercase tracking-widest">@corepatch.dev</span>
                </a>
              </div>
            </div>
            
            <div className="relative p-1 border border-primary/20">
              <div className="bg-secondary/10 p-12 h-full flex flex-col justify-center text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-primary mb-6 block">Ready to start?</span>
                <h3 className="text-3xl mb-10">Agende um diagnóstico gratuito da sua operação</h3>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-artdeco w-full py-5 text-sm uppercase tracking-widest font-bold">
                  Iniciar conversa
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-40 pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">© {new Date().getFullYear()} CORE & PATCH. TODOS OS DIREITOS RESERVADOS.</span>
            <div className="flex gap-8">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">SUZANO, SP</span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">EST. 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
