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
              href="https://artur-source.github.io/RegiFlex/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card-artdeco relative overflow-hidden p-12 border border-primary/20 bg-background hover:border-primary/50 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="mb-4 group-hover:text-primary transition-colors text-2xl">RegiFlex</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Plataforma de gestão de registros. Interface técnica, funcional e de alta precisão.
                </p>
                <span className="text-xs font-bold tracking-widest uppercase text-primary flex items-center gap-2">
                  Ver Projeto <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </a>
            <a
              href="https://jvstore.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card-artdeco relative overflow-hidden p-12 border border-primary/20 bg-background hover:border-primary/50 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="mb-4 group-hover:text-primary transition-colors text-2xl">JVSTORE</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Catálogo digital organizado. Experiência de navegação clara, segura e estruturada.
                </p>
                <span className="text-xs font-bold tracking-widest uppercase text-primary flex items-center gap-2">
                  Ver Projeto <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Language Banner */}
      <section className="py-16 bg-secondary/20 border-y border-primary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-6">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="text-2xl">We also build websites in English</h3>
            </div>
            <p className="text-muted-foreground mb-8">
              Get in touch with us
            </p>
            <a 
              href={englishUrl}
              className="btn-artdeco inline-flex items-center gap-2 px-6 py-3 border border-primary/30 hover:bg-primary/10 transition-colors text-xs uppercase tracking-widest"
            >
              <Globe className="w-4 h-4" />
              English Version
            </a>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="section-spacing" id="contato">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-12">Escritório</h2>
            <div className="border border-primary/30 p-12 bg-secondary/5">
              <p className="text-muted-foreground mb-12 uppercase tracking-widest text-sm">
                Inicie uma consulta técnica
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-artdeco flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 hover:bg-primary/10 transition-colors text-xs uppercase tracking-widest">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a href={`mailto:${emailAddress}`} className="btn-artdeco flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 hover:bg-primary/10 transition-colors text-xs uppercase tracking-widest">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-artdeco flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 hover:bg-primary/10 transition-colors text-xs uppercase tracking-widest">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
              <div className="mt-16 pt-8 border-t border-primary/10 text-xs tracking-[0.2em] text-muted-foreground space-y-4 flex flex-col items-center">
                <p className="w-full text-center">SÃO PAULO, BRASIL</p>
                <p className="w-full text-center break-all">COREPATCH.DEV@GMAIL.COM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xs tracking-[0.3em] font-bold text-primary">
              CORE & PATCH
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center md:text-left">
              © 2026 Core & Patch. Estrutura constrói. Sustentação mantém.
            </div>
            <div className="flex gap-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest hover:text-primary transition-colors">
                WhatsApp
              </a>
              <a href={`mailto:${emailAddress}`} className="text-[10px] uppercase tracking-widest hover:text-primary transition-colors">
                Email
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
