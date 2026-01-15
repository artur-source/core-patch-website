import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

/**
 * Core & Patch - Institutional Website
 * Design: Art Déco Reinterpretado
 * Color: Deep Black (#0B0B0B), Off-white (#F2F2ED), Matte Gold (#BFA66A)
 * Typography: Montserrat (titles), Inter (body)
 */

export default function Home() {
  const whatsappNumber = "5511940572858";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá%20Core%20%26%20Patch%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.`;
  const emailAddress = "corepatch.dev@gmail.com";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-primary/30">
        <div className="container flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-xl font-extrabold tracking-[0.3em] text-primary">CORE & PATCH</span>
          </a>
          <div className="hidden md:flex gap-10">
            <a href="#sobre" className="text-xs uppercase tracking-widest hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-xs uppercase tracking-widest hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#projetos" className="text-xs uppercase tracking-widest hover:text-primary transition-colors">
              Projetos
            </a>
            <a href="#contato" className="text-xs uppercase tracking-widest hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center border-b border-primary/40 overflow-hidden">
        {/* Decorative background lines */}
        <div className="absolute inset-0 flex justify-between px-10 opacity-5 pointer-events-none">
          <div className="w-px h-full bg-primary"></div>
          <div className="w-px h-full bg-primary"></div>
          <div className="w-px h-full bg-primary"></div>
          <div className="w-px h-full bg-primary"></div>
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-block mb-8">
            <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
            <h1 className="mb-4 fade-in-up">
              CORE & PATCH
            </h1>
            <div className="space-y-2 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-primary text-lg md:text-xl tracking-[0.4em] font-bold uppercase">
                CORE CONSTRÓI.
              </p>
              <p className="text-primary text-lg md:text-xl tracking-[0.4em] font-bold uppercase">
                PATCH SUSTENTA.
              </p>
            </div>
            <div className="w-full h-px bg-primary mt-12 opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="section-spacing" id="sobre">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-12">Sobre</h2>
            <div className="deco-frame">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                A Core & Patch traduz estrutura, permanência e autoridade em soluções digitais. 
                Desenvolvemos arquiteturas técnicas sólidas para negócios que buscam longevidade. 
                Não seguimos tendências passageiras; construímos o que foi feito para durar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-spacing bg-secondary/10" id="servicos">
        <div className="container">
          <h2 className="mb-20 text-center">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-primary/20">
            <div className="p-10 border-b md:border-b-0 md:border-r border-primary/20 hover:bg-secondary/20 transition-colors">
              <span className="text-primary text-xs font-bold tracking-widest mb-6 block">01</span>
              <h3 className="mb-6">ESTRUTURA</h3>
              <p className="text-muted-foreground text-sm">
                Desenvolvimento de sites institucionais e catálogos com foco em engenharia de software e performance.
              </p>
            </div>
            <div className="p-10 border-b md:border-b-0 md:border-r border-primary/20 hover:bg-secondary/20 transition-colors">
              <span className="text-primary text-xs font-bold tracking-widest mb-6 block">02</span>
              <h3 className="mb-6">ESCALA</h3>
              <p className="text-muted-foreground text-sm">
                Arquitetura preparada para o crescimento, garantindo que sua presença digital evolua sem necessidade de reconstrução.
              </p>
            </div>
            <div className="p-10 hover:bg-secondary/20 transition-colors">
              <span className="text-primary text-xs font-bold tracking-widest mb-6 block">03</span>
              <h3 className="mb-6">SUSTENTAÇÃO</h3>
              <p className="text-muted-foreground text-sm">
                Manutenção contínua, monitoramento e suporte técnico dedicado para garantir estabilidade absoluta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="section-spacing" id="projetos">
        <div className="container">
          <h2 className="mb-20 text-center">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <a
              href="https://artur-source.github.io/RegiFlex/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card-artdeco relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="mb-4 group-hover:text-primary transition-colors">RegiFlex</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Plataforma de gestão de registros. Interface técnica, funcional e de alta precisão.
                </p>
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Ver Projeto —</span>
              </div>
            </a>
            <a
              href="https://jvstore.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card-artdeco relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="mb-4 group-hover:text-primary transition-colors">JVSTORE</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Catálogo digital organizado. Experiência de navegação clara, segura e estruturada.
                </p>
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Ver Projeto —</span>
              </div>
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
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-artdeco flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a href={`mailto:${emailAddress}`} className="btn-artdeco flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
