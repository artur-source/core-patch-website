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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = "5511940572858";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%20Core%20%26%20Patch%2C%20quero%20descrever%20um%20problema%20do%20meu%20neg%C3%B3cio.`;
  const emailAddress = "corepatch.dev@gmail.com";
  const instagramUrl = "https://www.instagram.com/corepatch.dev?igsh=MXh6eTNkeWJzbXNnYQ==";
  const englishUrl = "https://core-patch-website-en.vercel.app";

  const navLinks = [
    { href: "#solucoes", label: "Soluções" },
    { href: "#processo", label: "Processo" },
    { href: "#projetos", label: "Projetos" },
    { href: "#faq", label: "FAQ" },
  ];

  const pains = [
    "Você ainda controla pedidos, agenda ou estoque em planilhas soltas.",
    "Seu cliente precisa chamar no WhatsApp para tudo, até para tarefas simples.",
    "A equipe digita o mesmo dado em mais de um lugar e perde tempo com retrabalho.",
    "Seu site existe, mas não ajuda a vender, agendar ou organizar a operação.",
  ];

  const solutions = [
    {
      icon: MonitorSmartphone,
      title: "Soluções Web",
      description: "Sites institucionais, landing pages e portais para empresas que precisam aparecer com clareza e converter melhor.",
      items: ["Site profissional", "Landing pages de campanha", "Portais com área do cliente"],
    },
    {
      icon: BarChart3,
      title: "Sistemas e Gestão",
      description: "Sistemas internos, dashboards e fluxos de gestão para trocar improviso por operação organizada.",
      items: ["Agendamento e cadastro", "Painéis de gestão", "Relatórios operacionais"],
    },
    {
      icon: Zap,
      title: "Atendimento e Automação",
      description: "Automações, integrações e atendimento digital para reduzir tarefas repetitivas sem complicar sua rotina.",
      items: ["WhatsApp com fluxo guiado", "Cardápio digital com QR Code", "Integrações com ferramentas"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Diagnóstico",
      description: "Você descreve o problema. Nós entendemos o fluxo, as pessoas envolvidas e o que precisa melhorar.",
    },
    {
      step: "02",
      title: "Proposta",
      description: "Transformamos o diagnóstico em escopo, prazo e investimento claros antes de qualquer desenvolvimento.",
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description: "Construímos em ciclos curtos, validando telas, regras e integrações com você durante o caminho.",
    },
    {
      step: "04",
      title: "Entrega e suporte",
      description: "Publicamos, treinamos sua equipe e acompanhamos os ajustes necessários para a solução funcionar no dia a dia.",
    },
  ];

  const projects = [
    {
      name: "RegiFlex",
      label: "Produto próprio",
      href: "https://regiflex-app.vercel.app/",
      description: "Sistema para clínicas com fluxo de pacientes, check-in por QR Code, controle por perfis e estrutura multicliente.",
      result: "Prova real de capacidade em SaaS, operação e produto em produção.",
    },
    {
      name: "JVSTORE",
      label: "E-commerce",
      href: "https://jvstore.com.br/",
      description: "Loja online de moda masculina com experiência de compra direta, vitrine clara e foco em performance.",
      result: "Presença digital com jornada de compra pronta para vender.",
    },
    {
      name: "Prompt.Code",
      label: "Ferramenta interna",
      href: "https://prompt-code.vercel.app/",
      description: "Aplicação criada pela Core & Patch para estruturar prompts e acelerar fluxos de criação com IA.",
      result: "Uso de IA como ferramenta prática, não como promessa vaga.",
    },
  ];

  const differentiators = [
    {
      icon: ClipboardCheck,
      title: "Processo explicado em português claro",
      description: "Você não precisa chegar sabendo o nome técnico da solução. Basta explicar o problema.",
    },
    {
      icon: Rocket,
      title: "Entrega enxuta e objetiva",
      description: "Projetos com escopo bem definido, validações frequentes e foco no que resolve a operação.",
    },
    {
      icon: ShieldCheck,
      title: "Produto próprio em produção",
      description: "O RegiFlex mostra que desenvolvemos, publicamos e mantemos sistemas reais.",
    },
    {
      icon: Layers3,
      title: "Do site ao sistema completo",
      description: "Começamos simples quando faz sentido e evoluímos para integrações, painéis e automações.",
    },
  ];

  const technologies = ["React", "Next.js", "Node.js", "Supabase", "Vercel", "APIs", "PostgreSQL", "Tailwind"];

  const faqs = [
    {
      question: "Vocês atendem empresas pequenas?",
      answer: "Sim. A Core & Patch foi reposicionada para atender pequenos e médios negócios que precisam de tecnologia sem excesso de jargão.",
    },
    {
      question: "Preciso saber exatamente qual sistema quero?",
      answer: "Não. O primeiro passo é descrever o problema. A partir disso, desenhamos a solução mais simples e útil para o seu cenário.",
    },
    {
      question: "Quanto tempo leva um projeto?",
      answer: "Depende do escopo. Uma landing page pode ser rápida; um sistema interno exige diagnóstico, protótipo e validação. Você recebe prazo antes do início.",
    },
    {
      question: "Vocês dão suporte depois da entrega?",
      answer: "Sim. A entrega inclui orientação inicial, ajustes combinados e possibilidade de suporte contínuo conforme a necessidade do projeto.",
    },
    {
      question: "Vocês trabalham com IA?",
      answer: "Sim, quando ela resolve um problema concreto. IA é uma capacidade técnica da Core & Patch, não uma promessa genérica.",
    },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring" onClick={closeMobileMenu}>
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-black text-primary-foreground">C&P</span>
            <span className="text-sm font-extrabold tracking-[0.18em] text-foreground">CORE & PATCH</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href={englishUrl} className="nav-link flex items-center gap-2" title="Switch to English">
              <Globe className="h-4 w-4" />
              EN
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Fale com a gente
            </a>
          </div>

          <button
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link py-3" onClick={closeMobileMenu}>
                  {link.label}
                </a>
              ))}
              <a href={englishUrl} className="nav-link flex items-center gap-2 py-3" onClick={closeMobileMenu}>
                <Globe className="h-4 w-4" />
                English
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2 justify-center" onClick={closeMobileMenu}>
                Fale com a gente
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <section id="home" className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.15),transparent_30%)]" />
          <div className="container grid min-h-[calc(100vh-73px)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="max-w-3xl">
              <span className="eyebrow">Software house para pequenas empresas</span>
              <h1 className="mt-6 max-w-4xl text-balance">
                Desenvolvemos soluções digitais para empresas que querem crescer.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Criamos sites, sistemas, automações e plataformas digitais, do zero até a entrega, para negócios que querem funcionar melhor sem depender de papel, planilha e improviso.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Descreve o seu problema
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#projetos" className="btn-secondary">
                  Ver projetos entregues
                </a>
              </div>
              <div className="mt-10 grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
                <div><strong className="block text-2xl text-foreground">2024</strong> Empresa fundada</div>
                <div><strong className="block text-2xl text-foreground">3</strong> Produtos e projetos ativos</div>
                <div><strong className="block text-2xl text-foreground">24h</strong> Retorno inicial</div>
              </div>
            </div>

            <div className="glass-panel p-5 md:p-7">
              <div className="rounded-md border border-border bg-card p-5 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Diagnóstico</p>
                    <h2 className="mt-2 text-2xl">Do problema ao software</h2>
                  </div>
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  {["Agenda manual", "Atendimento repetitivo", "Dados espalhados", "Site sem conversão"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-md border border-border bg-background px-4 py-3">
                      <span className="text-sm font-medium">{item}</span>
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-md bg-primary p-5 text-primary-foreground">
                  <p className="text-sm font-bold uppercase tracking-[0.18em]">Resultado</p>
                  <p className="mt-2 text-2xl font-extrabold">Sistema simples, útil e pronto para sua operação.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing" aria-labelledby="problemas-title">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">O ponto de partida</span>
              <h2 id="problemas-title">Seu negócio não precisa de jargão. Precisa de solução.</h2>
              <p>Antes de falar em tecnologia, a gente entende a rotina que está travando sua empresa.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {pains.map((pain) => (
                <div key={pain} className="flex gap-4 rounded-md border border-border bg-card p-6 shadow-sm">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/45" id="solucoes">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Soluções</span>
              <h2>O que desenvolvemos para o seu negócio</h2>
              <p>Organizamos a oferta do jeito que o cliente compra: presença digital, gestão e operação.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <article key={solution.title} className="group rounded-md border border-border bg-card p-7 shadow-sm transition-colors duration-200 hover:border-primary">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3>{solution.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{solution.description}</p>
                    <ul className="mt-6 space-y-3">
                      {solution.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm font-medium">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-spacing" id="processo">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Como trabalhamos</span>
              <h2>Um processo claro para você não comprar tecnologia no escuro.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-4">
              {process.map((item) => (
                <article key={item.step} className="rounded-md border border-border bg-card p-6 shadow-sm">
                  <span className="text-sm font-black text-primary">{item.step}</span>
                  <h3 className="mt-4 text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-foreground text-background" id="projetos">
          <div className="container">
            <div className="section-heading text-background">
              <span className="eyebrow text-accent">Projetos</span>
              <h2>Produtos e entregas que mostram capacidade real.</h2>
              <p className="text-background/70">O RegiFlex é o case principal: produto próprio, sistema real e prova de que a Core & Patch entrega além de site estático.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className="group block cursor-pointer rounded-md border border-background/15 bg-background/8 p-7 transition-colors duration-200 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{project.label}</span>
                  <h3 className="mt-4 text-2xl text-background">{project.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-background/70">{project.description}</p>
                  <p className="mt-5 rounded-md bg-background/10 p-4 text-sm font-medium text-background">{project.result}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent">
                    Ver projeto
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="eyebrow">Tecnologias</span>
              <h2 className="mt-5">Stack moderno, explicado sem complicar.</h2>
              <p className="mt-5 text-muted-foreground">
                Usamos tecnologias que facilitam manutenção, performance e publicação rápida. O cliente vê resultado; a base técnica fica sólida.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {technologies.map((tech) => (
                <div key={tech} className="rounded-md border border-border bg-card px-4 py-5 text-center text-sm font-bold shadow-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/45">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Diferenciais</span>
              <h2>Por que escolher a Core & Patch</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {differentiators.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-md border border-border bg-card p-7 shadow-sm">
                    <Icon className="h-7 w-7 text-primary" />
                    <h3 className="mt-5 text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-spacing" id="faq">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">FAQ</span>
              <h2>Perguntas comuns antes de começar</h2>
            </div>
            <div className="mx-auto max-w-4xl divide-y divide-border rounded-md border border-border bg-card shadow-sm">
              {faqs.map((faq) => (
                <details key={faq.question} className="group p-6 open:bg-muted/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                    {faq.question}
                    <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-primary text-primary-foreground" id="contato">
          <div className="container grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-primary-foreground/70">Pronto para começar?</span>
              <h2 className="mt-5 max-w-3xl text-primary-foreground">Descreva o problema do seu negócio. A gente responde em até 24h.</h2>
              <p className="mt-5 max-w-2xl text-primary-foreground/78">
                Você não precisa mandar briefing perfeito. Conte o que está manual, lento ou confuso, e nós traduzimos isso em um caminho técnico.
              </p>
            </div>
            <div className="rounded-md bg-background p-6 text-foreground shadow-xl">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
              <div className="mt-6 space-y-4">
                <a href={`mailto:${emailAddress}`} className="contact-link">
                  <Mail className="h-5 w-5" />
                  {emailAddress}
                </a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Instagram className="h-5 w-5" />
                  @corepatch.dev
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-10">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-sm font-extrabold tracking-[0.18em]">CORE & PATCH</span>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">Software sob medida para pequenas empresas.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span>Suzano, SP</span>
            <span>Est. 2024</span>
            <span>© {new Date().getFullYear()} Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
