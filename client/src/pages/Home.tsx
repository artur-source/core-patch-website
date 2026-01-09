import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

/**
 * Core & Patch - Institutional Website
 * Design: Bauhaus Swiss Minimalism
 * Color: Dark background (#0a0a0a), white text, blue-gray accent (#6b8fa3)
 * Typography: Poppins (display), Inter (body)
 */

export default function Home() {
  const whatsappNumber = "5511940572858";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá%20Core%20%26%20Patch%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.`;
  const emailAddress = "corepatch.dev@gmail.com";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-3 md:py-4">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/logo.jpg" alt="Core & Patch" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <div className="hidden md:flex gap-6 lg:gap-8">
            <a href="#como-funciona" className="text-sm hover:text-primary transition-colors">
              Como funciona
            </a>
            <a href="#projetos" className="text-sm hover:text-primary transition-colors">
              Projetos
            </a>
            <a href="#manutencao" className="text-sm hover:text-primary transition-colors">
              Manutenção
            </a>
            <a href="#contato" className="text-sm hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <div>
              <h1 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl">
                Estrutura bem feita.
                <br />
                <span className="text-primary">Manutenção contínua.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Desenvolvemos sites sob medida para pequenos negócios. Não fazemos volume. Fazemos estrutura. E sustentamos depois.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#contato" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full">
                    Conversar
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/hero-abstract.png"
                alt="Conceito técnico minimalista"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* O que fazemos */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="mb-12 md:mb-16 text-center text-3xl md:text-4xl">O que fazemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            <div className="card-minimal">
              <h3 className="text-xl mb-4">Desenvolvimento sob medida</h3>
              <p className="text-muted-foreground">
                Sites institucionais e catálogos pensados para sua marca. Cada projeto é único, feito com atenção aos detalhes.
              </p>
            </div>
            <div className="card-minimal">
              <h3 className="text-xl mb-4">Preparado para crescer</h3>
              <p className="text-muted-foreground">
                Arquitetura escalável. Seu site cresce com você, sem precisar ser refeito. Organização desde o início.
              </p>
            </div>
            <div className="card-minimal">
              <h3 className="text-xl mb-4">Suporte contínuo</h3>
              <p className="text-muted-foreground">
                Não entregamos e desaparecemos. Acompanhamos, ajustamos, corrigimos. O trabalho não termina na entrega.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Como funciona */}
      <section className="section-spacing" id="como-funciona">
        <div className="container">
          <h2 className="mb-12 md:mb-16 text-center text-3xl md:text-4xl">Como funciona</h2>
          <div className="max-w-4xl mx-auto">
            <div className="hidden lg:block mb-16">
              <img
                src="/images/process-visual.png"
                alt="Processo em 3 etapas"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-primary text-sm font-semibold mb-2">ETAPA 1</div>
                  <h3 className="text-2xl mb-4">Alinhamento</h3>
                  <p className="text-muted-foreground">
                    Conversamos sobre seu negócio, objetivos e público. Entendemos o que você precisa antes de qualquer código.
                  </p>
                </div>
                <div>
                  <div className="text-primary text-sm font-semibold mb-2">ETAPA 2</div>
                  <h3 className="text-2xl mb-4">Desenvolvimento</h3>
                  <p className="text-muted-foreground">
                    Criamos seu site com código limpo, estruturado e preparado para o futuro. Testes, ajustes, entrega.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-primary text-sm font-semibold mb-2">ETAPA 3</div>
                  <h3 className="text-2xl mb-4">Suporte e manutenção</h3>
                  <p className="text-muted-foreground">
                    Após a entrega, continuamos aqui. Correções, melhorias, atualizações. Seu site sempre funcionando bem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Projetos */}
      <section className="section-spacing" id="projetos">
        <div className="container">
          <h2 className="mb-12 md:mb-16 text-center text-3xl md:text-4xl">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            <a
              href="https://artur-source.github.io/RegiFlex/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-minimal hover:border-primary transition-colors group"
            >
              <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">RegiFlex</h3>
              <p className="text-muted-foreground text-sm">
                Plataforma de gestão de registros. Interface limpa, funcional e intuitiva.
              </p>
              <div className="mt-4 text-primary text-sm font-semibold">
                Ver projeto →
              </div>
            </a>
            <a
              href="https://artur-source.github.io/JVSTORE/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-minimal hover:border-primary transition-colors group"
            >
              <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">JVSTORE</h3>
              <p className="text-muted-foreground text-sm">
                Loja online com catálogo organizado. Experiência de compra clara e segura.
              </p>
              <div className="mt-4 text-primary text-sm font-semibold">
                Ver projeto →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Manutenção */}
      <section className="section-spacing" id="manutencao">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="hidden lg:block">
              <img
                src="/images/maintenance-concept.png"
                alt="Conceito de manutenção contínua"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="mb-6">Manutenção não é luxo</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Um site bem feito precisa de acompanhamento. Atualizações de segurança, correções, melhorias. Nós cuidamos disso.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Você não precisa se preocupar. Seu site continua funcionando, seguro e preparado para crescer. Organização e continuidade.
              </p>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Monitoramento contínuo</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Atualizações de segurança</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Suporte técnico disponível</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Melhorias e otimizações</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Contato */}
      <section className="section-spacing" id="contato">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl">Vamos conversar?</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12">
              Tem um projeto em mente? Quer saber mais sobre como podemos ajudar? Entre em contato.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
              <a href={`mailto:${emailAddress}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </Button>
              </a>
            </div>
            <div className="mt-6 md:mt-8 text-xs md:text-sm text-muted-foreground space-y-2">
              <p>
                WhatsApp: <a href={whatsappUrl} className="text-primary hover:underline">(11) 9 4057-2858</a>
              </p>
              <p>
                Email: <a href={`mailto:${emailAddress}`} className="text-primary hover:underline break-all">{emailAddress}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 md:py-8 lg:py-12">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/images/logo.jpg" alt="Core & Patch" className="w-6 h-6" />
              <span className="hidden sm:inline">Core & Patch</span>
            </a>
            <div className="text-center sm:text-left">
              © 2025 Core & Patch. Estrutura bem feita. Manutenção contínua.
            </div>
            <div className="flex gap-3 sm:gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                WhatsApp
              </a>
              <a href={`mailto:${emailAddress}`} className="hover:text-primary transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
