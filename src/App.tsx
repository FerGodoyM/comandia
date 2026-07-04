import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ChefHat,
  Check,
  CreditCard,
  Mail,
  MessageCircle,
  PackageCheck,
  Smartphone,
  WifiOff,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/56958840933?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20COMAND-IA%20para%20mi%20local.";

const mailHref = "mailto:fernando.godoy@alumnos.ucentral.cl";
const ease = [0.16, 1, 0.3, 1] as const;

type IconComponent = typeof Smartphone;

type FloatingCard = {
  label: string;
  icon: IconComponent;
  accent: string;
  className: string;
  delay: string;
};

type ModuleCard = {
  title: string;
  subtitle: string;
  items: string[];
  icon: IconComponent;
  accent: string;
};

type Faq = {
  question: string;
  answer: string;
  icon?: IconComponent;
};

const navItems = [
  ["Problema", "#problema"],
  ["Sistema", "#sistema"],
  ["IA", "#modulos"],
  ["Precio", "#precio"],
  ["Contacto", "#contacto"],
];

const floatingCards: FloatingCard[] = [
  {
    label: "Pedido tomado",
    icon: Smartphone,
    accent: "#D96C24",
    className: "left-[4%] top-[26%]",
    delay: "0s",
  },
  {
    label: "Cocina recibe",
    icon: ChefHat,
    accent: "#B33A1C",
    className: "right-[8%] top-[29%]",
    delay: "0.25s",
  },
  {
    label: "Inventario actualizado",
    icon: PackageCheck,
    accent: "#4F7C45",
    className: "left-[12%] bottom-[20%]",
    delay: "0.5s",
  },
  {
    label: "IA recomienda",
    icon: BrainCircuit,
    accent: "#A3A86B",
    className: "right-[13%] bottom-[21%]",
    delay: "0.75s",
  },
];

const problems = [
  {
    title: "Pedidos desordenados",
    text: "Papelitos, letra ilegible, comandas perdidas y cocina trabajando con información incompleta.",
  },
  {
    title: "Inventario sin control",
    text: "Productos que se compran de más, vencimientos que se detectan tarde y stock difícil de revisar.",
  },
  {
    title: "Decisiones sin datos",
    text: "El dueño no siempre sabe qué vender más, qué comprar menos o cuándo hacer ofertas.",
  },
];

const flowSteps = [
  ["Salón toma pedido", Smartphone],
  ["Cocina recibe en tiempo real", ChefHat],
  ["Caja cobra por mesa", CreditCard],
  ["Inventario se actualiza", PackageCheck],
  ["Dueño ve métricas", BarChart3],
  ["IA entrega recomendaciones", BrainCircuit],
] satisfies [string, IconComponent][];

const modules: ModuleCard[] = [
  {
    title: "SALÓN",
    subtitle: "Pedidos desde celular o tablet.",
    items: ["Pedido por mesa", "Modificación rápida", "Envío directo a cocina", "Menos errores de escritura"],
    icon: Smartphone,
    accent: "#D96C24",
  },
  {
    title: "COCINA",
    subtitle: "Comandas en tiempo real.",
    items: ["Pendiente", "Preparando", "Listo", "Menos gritos y confusión"],
    icon: ChefHat,
    accent: "#B33A1C",
  },
  {
    title: "CAJA + INVENTARIO",
    subtitle: "Venta registrada, stock actualizado.",
    items: ["Cuenta clara por mesa", "Registro de ventas", "Control de stock", "Alertas de vencimiento"],
    icon: PackageCheck,
    accent: "#4F7C45",
  },
  {
    title: "IA PARA EL DUEÑO",
    subtitle: "Decisiones con datos validados.",
    items: [
      "Platos más vendidos",
      "Dashboards de ventas",
      "Recomendaciones inteligentes",
      "Apoyo para comprar y ajustar carta",
    ],
    icon: BrainCircuit,
    accent: "#A3A86B",
  },
];

const faqs: Faq[] = [
  {
    question: "¿Qué equipos necesito?",
    answer: "Celulares o tablets para tomar pedidos y pantallas o dispositivos para cocina y caja. La idea es usar equipos que el local ya tenga.",
  },
  {
    question: "¿Funciona sin internet?",
    answer: "Sí. Si se usa como aplicación dentro de una red local, puede funcionar sin internet.",
    icon: WifiOff,
  },
  {
    question: "¿Mi equipo lo va a entender?",
    answer: "Sí. Está pensado para ser intuitivo, simple y fácil de adoptar.",
  },
  {
    question: "¿De quién son los datos?",
    answer: "Los datos son únicamente del local.",
  },
  {
    question: "¿Quién responde?",
    answer: "El equipo de COMAND-IA responde rápidamente ante dudas, soporte o problemas.",
  },
];

const reveal = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 px-4 py-4 text-cream md:px-8">
      <div className="header-shell mx-auto flex max-w-[1500px] items-center justify-between gap-3">
        <a href="#inicio" className="header-brand shrink-0 font-display text-xl uppercase leading-none md:text-2xl">
          - COMAND-IA
        </a>
        <nav
          aria-label="Navegación principal"
          className="hidden rounded-full border border-cream/20 bg-cream/10 px-5 py-3 shadow-premium backdrop-blur-[20px] lg:block"
        >
          <ul className="flex items-center gap-5">
            {navItems.map(([label, href]) => (
              <li key={label}>
                <a
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream/85 transition hover:text-cream"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={whatsappHref}
          className="header-cta rounded-full bg-cream px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-espresso shadow-lift transition hover:bg-orange hover:text-cream md:px-6"
        >
          Pedir demo
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const reducedMotion = useReducedMotion();
  const titleLetters = useMemo(() => "COMAND-IA".split(""), []);

  useEffect(() => {
    if (reducedMotion) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollY(window.scrollY * 0.05));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reducedMotion]);

  return (
    <section
      id="inicio"
      className="hero-section relative flex min-h-screen overflow-hidden bg-[linear-gradient(135deg,#1C0F08_0%,#3A1E10_45%,#6B3F24_100%)] px-5 pb-10 pt-28 text-cream md:px-10 md:pt-32"
    >
      <div className="absolute inset-0 opacity-55 [background:radial-gradient(circle_at_18%_22%,rgba(217,108,36,0.35),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(79,124,69,0.22),transparent_25%),radial-gradient(circle_at_50%_82%,rgba(179,58,28,0.22),transparent_30%)]" />
      {floatingCards.map((card) => (
        <FloatingWorkflowCard
          key={card.label}
          card={card}
          translate={scrollY}
          reducedMotion={Boolean(reducedMotion)}
        />
      ))}
      <div className="hero-inner relative z-10 mx-auto flex w-full max-w-[1500px] flex-col justify-center">
        <Reveal className="mb-8 flex justify-center">
          <span className="hero-label rounded-full border border-cream/15 bg-orange/30 px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-cream backdrop-blur-xl">
            IA para locales gastronómicos
          </span>
        </Reveal>

        <h1 className="hero-title mx-auto flex max-w-[94vw] justify-center overflow-visible py-3 text-center font-display uppercase text-cream">
          {titleLetters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className={letter === "-" ? "mx-[0.015em] inline-block" : "inline-block"}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease, delay: index * 0.05 }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <Reveal delay={0.35} className="hero-copy mx-auto mt-8 max-w-5xl text-center">
          <p className="hero-kicker font-display text-4xl uppercase leading-none text-orange md:text-6xl lg:text-7xl">
            Comandas, inventario y decisiones inteligentes en un solo sistema.
          </p>
          <p className="mobile-hero-kicker hidden font-display uppercase text-orange">
            Deja de decidir a ojo.
          </p>
          <p className="hero-description mx-auto mt-6 max-w-3xl text-base leading-8 text-cream/80 md:text-lg">
            COMAND-IA ayuda a restaurantes, cafés y food trucks a tomar pedidos, coordinar cocina,
            cobrar en caja y transformar cada venta en datos útiles mediante dashboards, inventario e
            inteligencia artificial.
          </p>
          <p className="mobile-hero-description hidden text-cream/82">
            Pedidos, caja, inventario y recomendaciones con IA para vender mejor y perder menos.
          </p>
          <div className="mobile-hero-actions hidden">
            <a href={whatsappHref}>Pedir demo</a>
            <a href="#precio">Ver precio</a>
          </div>
        </Reveal>

        <div className="hero-bottom mt-12 grid gap-6 border-t border-cream/15 pt-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <Reveal>
            <p className="hero-message max-w-2xl text-2xl font-bold leading-tight text-cream md:text-4xl">
              Deja de decidir a ojo. Usa los datos reales de tu local para comprar mejor, vender mejor y
              perder menos.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-wrap gap-3 md:justify-end">
            {["Diseñado para pymes gastronómicas", "Región de Coquimbo", "Demo en local disponible"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-cream/20 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-cream/80"
                >
                  {item}
                </span>
              ),
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FloatingWorkflowCard({
  card,
  translate,
  reducedMotion,
}: {
  card: FloatingCard;
  translate: number;
  reducedMotion: boolean;
}) {
  const Icon = card.icon;
  return (
    <div
      className={`floating-card pointer-events-none absolute z-20 hidden items-center gap-3 rounded-float border border-cream/20 bg-cream/10 px-5 py-4 text-cream shadow-premium backdrop-blur-[20px] lg:flex ${card.className}`}
      style={
        {
          "--accent": card.accent,
          "--float-delay": card.delay,
          "--scroll-y": reducedMotion ? "0px" : `${translate}px`,
        } as React.CSSProperties
      }
    >
      <span className="grid size-10 place-items-center rounded-full bg-[var(--accent)]/90">
        <Icon size={20} strokeWidth={2.4} />
      </span>
      <span className="max-w-36 text-[10px] font-bold uppercase tracking-[0.25em]">{card.label}</span>
    </div>
  );
}

function ProblemSection() {
  return (
    <section id="problema" className="section-rounded -mt-1 bg-cream px-5 py-24 text-espresso md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="eyebrow text-orange">El problema</p>
          <h2 className="section-title mt-4 font-display uppercase leading-[0.78]">Decidir a ojo sale caro</h2>
        </Reveal>
        <Reveal className="mt-8 max-w-4xl">
          <p className="text-xl leading-9 md:text-2xl">
            Muchos emprendimientos gastronómicos cruzan el valle de la muerte sin datos claros. Compran por
            intuición, ajustan la carta tarde, pierden productos por vencimiento y no siempre saben qué
            platos realmente sostienen el negocio.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 0.08}>
              <article className="problem-card h-full rounded-card bg-beige p-8 shadow-premium transition duration-500 hover:-translate-y-2">
                <span className="mb-9 block h-2 w-20 rounded-full bg-tomato" />
                <h3 className="font-display text-4xl uppercase leading-none">{problem.title}</h3>
                <p className="mt-6 text-base leading-7 text-espresso/75">{problem.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemSection() {
  return (
    <section id="sistema" className="section-rounded bg-espresso px-5 py-24 text-cream md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="eyebrow text-olive">La solución</p>
          <h2 className="section-title mt-4 font-display uppercase leading-[0.78]">Del pedido al dato</h2>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <Reveal>
            <p className="text-xl leading-9 text-cream/80 md:text-2xl">
              COMAND-IA no solo digitaliza comandas. Registra la operación diaria del local y la convierte
              en información útil para controlar inventario, analizar ventas y tomar mejores decisiones.
            </p>
          </Reveal>
          <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {flowSteps.map(([label, Icon], index) => (
              <Reveal key={label} delay={index * 0.06}>
                <article className="flow-card relative min-h-48 overflow-hidden rounded-card border border-cream/15 bg-cream/10 p-6 shadow-lift backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-6">
                    <span className="grid size-14 place-items-center rounded-full bg-orange text-cream">
                      <Icon size={26} />
                    </span>
                    <span className="font-display text-5xl leading-none text-cream/25">{index + 1}</span>
                  </div>
                  <h3 className="mt-9 text-2xl font-bold leading-tight">{label}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section id="modulos" className="section-rounded bg-olive px-5 py-24 text-espresso md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <h2 className="section-title font-display uppercase leading-[0.78]">
              Módulos que trabajan juntos
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={whatsappHref}
              className="demo-circle grid size-40 place-items-center rounded-full bg-espresso p-5 text-center text-[11px] font-bold uppercase tracking-[0.24em] text-cream shadow-premium transition hover:scale-105 md:size-52"
            >
              Agendar demo
            </a>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((module, index) => (
            <Reveal key={module.title} delay={index * 0.08}>
              <ModuleCard module={module} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module }: { module: ModuleCard }) {
  const Icon = module.icon;
  return (
    <article className="module-card group relative flex aspect-[4/5] min-h-[430px] overflow-hidden rounded-card bg-cream p-7 text-espresso shadow-premium transition duration-500 ease-premium hover:-translate-y-3">
      <div className="module-content relative z-10 flex w-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span
            className="grid size-16 place-items-center rounded-full text-cream"
            style={{ backgroundColor: module.accent }}
          >
            <Icon size={30} />
          </span>
          <ArrowRight className="mt-2 text-espresso/35 transition group-hover:translate-x-1 group-hover:text-espresso" />
        </div>
        <div className="mt-auto transition duration-500 ease-premium group-hover:-translate-y-5">
          <h3 className="font-display text-5xl uppercase leading-none">{module.title}</h3>
          <p className="mt-3 text-lg font-bold leading-snug">{module.subtitle}</p>
          <ul className="mt-6 space-y-3">
            {module.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-espresso/75">
                <Check className="mt-1 shrink-0 text-basil" size={17} strokeWidth={3} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="module-overlay absolute inset-0 z-20 grid place-items-end bg-espresso/35 p-7 opacity-0 backdrop-blur-[2px] transition duration-500 ease-premium group-hover:opacity-100">
        <a
          href={whatsappHref}
          className="module-cta translate-y-8 rounded-full bg-cream px-6 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-espresso transition duration-500 ease-premium group-hover:-translate-y-8"
        >
          Consultar
        </a>
      </div>
    </article>
  );
}

function PricingSection() {
  return (
    <section id="precio" className="section-rounded bg-cream px-5 py-24 text-espresso md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <Reveal>
            <p className="eyebrow text-tomato">Precio pensado para locales pequeños</p>
            <h2 className="section-title mt-4 font-display uppercase leading-[0.78]">Paga por uso</h2>
            <p className="mt-8 max-w-4xl text-xl leading-9">
              El sistema está pensado para pequeños y medianos locales gastronómicos, por eso evita una
              mensualidad fija alta. La propuesta considera un pago inicial de $80.000 por inicio de
              servicio y luego un cobro mensual según la cantidad de comandas realizadas.
            </p>
            <div className="price-highlight mt-8 rounded-card bg-espresso p-8 text-cream shadow-premium">
              <p className="price-title font-display text-4xl uppercase leading-none md:text-6xl">
                Precio base estimado: <span className="price-amount">$150</span> por comanda.
              </p>
              <p className="mt-5 text-cream/75">
                Mientras más comandas realice el local, más conveniente puede ser el valor por comanda.
              </p>
            </div>
            <div className="pricing-actions mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappHref}
                className="inline-flex items-center gap-3 rounded-full bg-orange px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-cream shadow-lift transition hover:bg-tomato"
              >
                <MessageCircle size={18} />
                Pedir demo por WhatsApp
              </a>
              <a
                href={mailHref}
                className="inline-flex items-center gap-3 rounded-full border border-espresso/20 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-espresso transition hover:bg-beige"
              >
                <Mail size={18} />
                Contactar por correo
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <Reveal key={faq.question} delay={index * 0.05}>
                  <article className="faq-card rounded-card bg-beige/80 p-6 shadow-lift">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full bg-basil text-cream">
                        {Icon ? <Icon size={19} /> : <Check size={19} strokeWidth={3} />}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold">{faq.question}</h3>
                        <p className="mt-2 leading-7 text-espresso/72">{faq.answer}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerA = ["Problema", "Sistema", "Inventario", "IA", "Precio"];
  const footerB = ["WhatsApp", "Correo", "Demo en local", "Región de Coquimbo", "Soporte"];

  return (
    <footer id="contacto" className="section-rounded bg-espresso px-5 py-20 text-cream md:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <h2 className="footer-title font-display text-6xl uppercase leading-none md:text-8xl">
            Agenda una demo con tu carta y tus mesas
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-cream/75">
            Si no te sirve, te quedas con la libreta. Pero probablemente ya no vas a querer volver atrás.
          </p>
          <form className="mt-10 flex flex-col gap-5 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input
              aria-label="Correo o nombre del local"
              placeholder="CORREO O NOMBRE DEL LOCAL"
              className="min-w-0 flex-1 border-b border-cream/35 bg-transparent px-0 py-4 text-[12px] font-bold uppercase tracking-[0.25em] text-cream placeholder:text-cream/45 focus:border-orange focus:outline-none"
            />
            <a
              href={whatsappHref}
              className="inline-flex items-center justify-center rounded-full bg-cream px-7 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-espresso transition hover:bg-orange hover:text-cream"
            >
              Contactar
            </a>
          </form>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={0.1}>
          <div className="grid gap-10 sm:grid-cols-2">
            {[footerA, footerB].map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-4">
                {column.map((item) => (
                  <li key={item}>
                    <a
                      href={item === "WhatsApp" ? whatsappHref : item === "Correo" ? mailHref : "#inicio"}
                      className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/70 transition hover:text-orange"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="contact-card mt-12 rounded-card border border-cream/15 bg-cream/10 p-7 backdrop-blur-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange">Contacto directo</p>
            <a className="mt-5 block text-2xl font-bold" href={whatsappHref}>
              WhatsApp: +56 9 5884 0933
            </a>
            <a className="mt-3 block text-lg text-cream/75" href={mailHref}>
              fernando.godoy@alumnos.ucentral.cl
            </a>
          </div>
        </Reveal>

        <div className="border-t border-cream/15 pt-8 lg:col-span-12">
          <div className="flex flex-col gap-5 text-sm text-cream/60 md:flex-row md:items-center md:justify-between">
            <p>© 2026 COMAND-IA. Sistema inteligente para locales gastronómicos.</p>
            <div className="flex flex-wrap gap-5">
              {["Datos del local", "Soporte", "Contacto"].map((item) => (
                <a key={item} href="#contacto" className="opacity-30 transition hover:opacity-80">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-espresso font-sans text-espresso">
      <Header />
      <Hero />
      <ProblemSection />
      <SystemSection />
      <ModulesSection />
      <PricingSection />
      <Footer />
      <div aria-hidden="true" className="noise-overlay" />
    </main>
  );
}
