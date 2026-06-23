'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Code2,
  Globe,
  Instagram,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Hero3D from "../components/Hero3D";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = "5511940572858";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%20Core%20%26%20Patch%2C%20quero%20descrever%20um%20problema%20do%20meu%20neg%C3%B3cio.`;
  const englishUrl = "https://core-patch-website-en.vercel.app";

  const navLinks = [
    { href: "#solucoes", label: "Soluções" },
    { href: "#processo", label: "Processo" },
    { href: "#projetos", label: "Projetos" },
    { href: "#faq", label: "FAQ" },
  ];

  const solutions = [
    {
      icon: MonitorSmartphone,
      title: "Soluções Web",
      description: "Sites institucionais e landing pages de alto impacto que convertem visitantes em clientes.",
      items: ["Sites Premium", "Landing Pages", "Portais Corporativos"],
    },
    {
      icon: BarChart3,
      title: "Sistemas e Gestão",
      description: "Sistemas internos e dashboards personalizados para organizar sua operação com elegância.",
      items: ["Gestão de Fluxo", "Dashboards", "SaaS sob medida"],
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Integrações inteligentes que eliminam o trabalho manual e otimizam seu tempo.",
      items: ["Fluxos Inteligentes", "Integrações API", "Bots de Atendimento"],
    },
  ];

  const process = [
    {
      step: "I",
      title: "Diagnóstico",
      description: "Imersão completa no seu modelo de negócio para identificar gargalos operacionais.",
    },
    {
      step: "II",
      title: "Arquitetura",
      description: "Desenho da solução técnica com foco em escalabilidade e experiência do usuário.",
    },
    {
      step: "III",
      title: "Execução",
      description: "Desenvolvimento ágil com entregas incrementais e validação constante.",
    },
    {
      step: "IV",
      title: "Maestria",
      description: "Lançamento, suporte contínuo e refinamento da solução em produção.",
    },
  ];

  const projects = [
    {
      name: "RegiFlex",
      label: "SaaS / Saúde",
      href: "https://regiflex-app.vercel.app/",
      description: "Ecossistema completo para clínicas com check-in inteligente e gestão multicliente.",
    },
    {
      name: "JVSTORE",
      label: "E-commerce / Moda",
      href: "https://jvstore.com.br/",
      description: "Experiência de compra premium com foco em performance e conversão mobile.",
    },
    {
      name: "Prompt.Code",
      label: "AI / Tooling",
      href: "https://prompt-code.vercel.app/",
      description: "Plataforma de engenharia de prompts para acelerar o desenvolvimento com IA.",
    },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-6">
          <a href="#home" className="group flex items-center gap-4" onClick={closeMobileMenu}>
            <div className="flex h-12 w-12 items-center justify-center border border-primary/50 bg-primary/10 transition-all duration-500 group-hover:border-primary">
              <span className="font-serif text-xl font-black text-primary">C&P</span>
            </div>
            <span className="hidden font-serif text-lg font-bold tracking-[0.3em] text-foreground sm:block">CORE & PATCH</span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href={englishUrl} className="nav-link flex items-center gap-2" title="Switch to English">
              <Globe className="h-3 w-3" />
              EN
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold !px-6 !py-3">
              CONTATO
            </a>
          </div>

          <button
            className="flex h-12 w-12 items-center justify-center border border-primary/30 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 top-full w-full border-b border-primary/20 bg-background p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link text-sm" onClick={closeMobileMenu}>
                  {link.label}
                </a>
              ))}
              <a href={englishUrl} className="nav-link flex items-center gap-2 text-sm" onClick={closeMobileMenu}>
                <Globe className="h-4 w-4" />
                ENGLISH VERSION
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold w-full" onClick={closeMobileMenu}>
                FALE CONOSCO
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
          <Hero3D />
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="eyebrow">Exclusividade em Software</span>
              <h1 className="mb-8 leading-[1.1]">
                A Arte de Construir <br />
                <span className="text-gradient-gold">Soluções Digitais</span>
              </h1>
              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Elevamos sua operação com sistemas personalizados que unem a sofisticação do design à robustez da engenharia moderna.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  INICIAR PROJETO
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#projetos" className="btn-outline-gold">
                  VER PORTFÓLIO
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Art Deco Decorative Elements */}
          <div className="absolute bottom-0 right-0 hidden h-64 w-64 opacity-20 lg:block">
            <div className="absolute bottom-0 right-0 h-full w-full border-r-2 border-b-2 border-primary" />
            <div className="absolute bottom-4 right-4 h-full w-full border-r border-b border-primary/50" />
            <div className="absolute bottom-8 right-8 h-full w-full border-r border-b border-primary/20" />
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solucoes" className="section-spacing relative">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Nossas Verticais</span>
              <h2>Excelência em cada detalhe</h2>
              <p className="text-lg text-muted-foreground">Transformamos complexidade em simplicidade através de um design intencional.</p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {solutions.map((solution, idx) => {
                const Icon = solution.icon;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="art-deco-card group"
                  >
                    <div className="mb-8 flex h-16 w-16 items-center justify-center border border-primary/30 bg-primary/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-foreground">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4">{solution.title}</h3>
                    <p className="mb-8 text-muted-foreground">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                          <div className="h-1 w-1 bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="processo" className="section-spacing bg-card/30">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Metodologia</span>
              <h2>O Caminho para a Perfeição</h2>
            </div>
            
            <div className="grid gap-px bg-primary/10 md:grid-cols-4">
              {process.map((step, idx) => (
                <div key={idx} className="bg-background p-10 transition-colors hover:bg-card/50">
                  <span className="mb-6 block font-serif text-4xl font-light text-primary/30">{step.step}</span>
                  <h3 className="mb-4 text-xl">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="section-spacing">
          <div className="container">
            <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <span className="eyebrow">Portfólio</span>
                <h2 className="mb-4">Obras em Produção</h2>
                <p className="text-muted-foreground">Sistemas reais resolvendo problemas reais para empresas de visão.</p>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="nav-link flex items-center gap-2">
                SOLICITAR DEMO <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <a 
                  key={idx} 
                  href={project.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border border-primary/20">
                    <div className="absolute inset-0 bg-primary/10 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="btn-outline-gold !px-6 !py-2">VISITAR SITE</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{project.label}</span>
                    <h3 className="mt-2 text-2xl group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-primary/5" />
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl border border-primary/30 p-16"
            >
              <span className="eyebrow">Contato</span>
              <h2 className="mb-8">Pronto para elevar seu negócio?</h2>
              <p className="mb-12 text-lg text-muted-foreground">
                Vamos transformar sua visão em uma solução digital impecável.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                FALAR COM UM ESPECIALISTA
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-4">
              <span className="font-serif text-xl font-black text-primary">C&P</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">© 2026 CORE & PATCH</span>
            </div>
            
            <div className="flex gap-8">
              <a href="https://www.instagram.com/corepatch.dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={`mailto:corepatch.dev@gmail.com`} className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
