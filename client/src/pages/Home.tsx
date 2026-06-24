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
import Hero3DPremium from "../components/Hero3DPremium";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = "5511940572858";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%20Core%20%26%20Patch%2C%20quero%20descrever%20um%20problema%20do%20meu%20neg%C3%B3cio.`;
  const englishUrl = "https://core-patch-website-en.vercel.app";

  const navLinks = [
    { href: "#solucoes", label: "Soluções" },
    { href: "#processo", label: "Processo" },
    { href: "#projetos", label: "Projetos" },
  ];

  const solutions = [
    {
      icon: MonitorSmartphone,
      title: "Soluções Web",
      description: "Sites institucionais e landing pages que convertem visitantes em clientes com elegância.",
      items: ["Sites Premium", "Landing Pages", "Portais Corporativos"],
    },
    {
      icon: BarChart3,
      title: "Sistemas e Gestão",
      description: "Dashboards e sistemas internos que organizam sua operação com sofisticação.",
      items: ["Gestão de Fluxo", "Dashboards", "SaaS sob medida"],
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Integrações que eliminam o trabalho manual e otimizam seu tempo.",
      items: ["Fluxos Inteligentes", "Integrações API", "Bots de Atendimento"],
    },
  ];

  const process = [
    {
      step: "I",
      title: "Diagnóstico",
      description: "Imersão no seu modelo de negócio para identificar os gargalos operacionais reais.",
    },
    {
      step: "II",
      title: "Arquitetura",
      description: "Desenho técnico focado em escalabilidade, performance e experiência do usuário.",
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
      description: "Plataforma de engenharia de prompts para acelerar desenvolvimento com IA.",
    },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-primary/10 bg-background/70 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-5">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMobileMenu}>
            <img src="/images/logo.png" alt="Core & Patch Logo" className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden font-serif text-base font-bold tracking-[0.3em] text-foreground sm:block">CORE & PATCH</span>
          </a>

          <div className="hidden items-center gap-12 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href={englishUrl} className="nav-link flex items-center gap-2" title="Switch to English">
              <Globe className="h-3 w-3" />
              EN
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold !px-6 !py-2 text-[10px]">
              CONTATO
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center border border-primary/30 md:hidden transition-colors hover:border-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 top-full w-full border-b border-primary/20 bg-background/95 backdrop-blur-xl p-6 md:hidden"
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
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold w-full !py-3" onClick={closeMobileMenu}>
                FALE CONOSCO
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
          <Hero3DPremium />
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-5xl"
            >
              <span className="eyebrow">Exclusividade em Software</span>
              <h1 className="mb-8 leading-tight">
                A Arte de <br />
                <span className="text-gradient-gold">Construir Soluções</span>
              </h1>
              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Elevamos sua operação com sistemas personalizados que unem a sofisticação do design à robustez da engenharia moderna.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  INICIAR PROJETO
                  <ArrowRight className="ml-3 h-4 w-4" />
                </a>
                <a href="#projetos" className="btn-outline-gold">
                  VER PORTFÓLIO
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Art Deco Corner Elements */}
          <div className="absolute bottom-0 right-0 hidden h-80 w-80 opacity-15 lg:block">
            <div className="absolute bottom-0 right-0 h-full w-full border-r-2 border-b-2 border-primary" />
            <div className="absolute bottom-6 right-6 h-full w-full border-r border-b border-primary/50" />
            <div className="absolute bottom-12 right-12 h-full w-full border-r border-b border-primary/20" />
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solucoes" className="section-spacing relative">
          <div className="container">
            <motion.div 
              className="section-heading text-left lg:text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow">Nossas Verticais</span>
              <h2>Excelência em cada detalhe</h2>
              <p className="mt-6 text-lg text-muted-foreground">Transformamos complexidade em simplicidade através de um design intencional.</p>
            </motion.div>
            
            <motion.div 
              className="grid gap-8 lg:grid-cols-3 mt-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {solutions.map((solution, idx) => {
                const Icon = solution.icon;
                return (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="art-deco-card group"
                  >
                    <div className="mb-8 flex h-16 w-16 items-center justify-center border border-primary/30 bg-primary/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-background">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-xl">{solution.title}</h3>
                    <p className="mb-8 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section id="processo" className="section-spacing bg-card/20">
          <div className="container">
            <motion.div 
              className="section-heading text-left lg:text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow">Metodologia</span>
              <h2>O Caminho para a Perfeição</h2>
            </motion.div>
            
            <div className="grid gap-px bg-primary/5 md:grid-cols-4 rounded-sm overflow-hidden">
              {process.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-background/80 p-10 transition-all duration-500 hover:bg-card/50 border border-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <span className="mb-6 block font-serif text-5xl font-light text-primary/25">{step.step}</span>
                  <h3 className="mb-4 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="section-spacing">
          <div className="container">
            <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <motion.div 
                className="max-w-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="eyebrow">Portfólio</span>
                <h2 className="mb-4">Obras em Produção</h2>
                <p className="text-muted-foreground">Sistemas reais resolvendo problemas reais para empresas de visão.</p>
              </motion.div>
              <motion.a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link flex items-center gap-2 whitespace-nowrap"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                SOLICITAR DEMO <ChevronRight className="h-4 w-4" />
              </motion.a>
            </div>

            <motion.div 
              className="grid gap-10 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, idx) => (
                <motion.a 
                  key={idx} 
                  href={project.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden border border-primary/20 bg-card/30">
                    <div className="absolute inset-0 bg-primary/5 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="btn-outline-gold !px-6 !py-2 text-[10px]">VISITAR SITE</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{project.label}</span>
                    <h3 className="mt-3 text-2xl font-semibold group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-primary/3" />
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl border border-primary/20 p-16 text-center glass-effect"
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
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
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
