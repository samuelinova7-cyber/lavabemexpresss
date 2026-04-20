import { 
  WashingMachine, 
  Wind, 
  Wifi, 
  Coffee, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  MessageCircle,
  Menu,
  X,
  Smartphone,
  CreditCard,
  Droplets,
  Zap,
  ShieldCheck,
  ChevronDown,
  Star,
  PiggyBank,
  Calendar,
  Instagram,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { CONTENT } from './data';

const ASSETS = {
  logo: "https://res.cloudinary.com/dqukldtq1/image/upload/v1776655841/WhatsApp_Image_2026-04-20_at_12.28.37_AM_1_rowwtj.jpg",
  heroVideo: "https://res.cloudinary.com/dqukldtq1/video/upload/v1776558133/Create_a_4second_1080p_202602161534_qxqvau.mp4",
  heroStatic: "https://res.cloudinary.com/dqukldtq1/image/upload/v1776558133/Create_a_4second_1080p_202602161534_qxqvau.mp4" // Fallback if needed
};

function FAQItem({ q, a }: { q: string, a: string, key?: any }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors focus:outline-none"
      >
        <span className="text-lg font-bold text-slate-800">{q}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeStructureIndex, setActiveStructureIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Top Ticker Marquee */}
      <div className="bg-primary text-white py-2 overflow-hidden whitespace-nowrap sticky top-0 z-[60]">
        <div className="animate-marquee inline-block">
          {[1,2,3,4].map(i => (
            <span key={i} className="mx-8 font-heading text-lg tracking-wider">
              • OMO E COMFORT INCLUSOS • WI-FI E AMBIENTE CLIMATIZADO • PAGAMENTO VIA PIX E CARTÃO • ABERTO TODOS OS DIAS (07H ÀS 23H) • EXPRESS: 75 MINUTOS 
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={ASSETS.logo} alt="LavaBem Express" className="h-10 w-10 rounded-full object-cover shadow-sm" referrerPolicy="no-referrer" />
            <h1 className="font-brand text-4xl text-primary leading-none mt-1">LavaBem Express</h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {['Início', 'Estrutura', 'Valores', 'Cuidados', 'Depoimentos', 'Contato'].map(item => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-sm font-semibold uppercase tracking-wider text-slate-700 hover:text-primary transition-colors uppercase">
                {item}
              </button>
            ))}
            <a href={CONTENT.links.whatsapp} target="_blank" rel="noreferrer" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20">
              <MessageCircle className="w-5 h-5" />
              FALE CONOSCO
            </a>
          </nav>

          <button className="md:hidden text-slate-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
            <div className="flex flex-col gap-6 ">
              {['Início', 'Estrutura', 'Valores', 'Cuidados', 'Depoimentos', 'Contato'].map(item => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-3xl font-heading text-primary border-b border-slate-100 pb-2 text-left">
                  {item}
                </button>
              ))}
              <a href={CONTENT.links.whatsapp} className="mt-4 bg-primary text-white py-4 rounded-2xl text-center font-bold text-xl flex items-center justify-center gap-2">
                <MessageCircle size={24} /> Falar WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="início" className="relative pt-44 pb-20 md:pt-60 md:pb-32">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Referência na qualidade do serviço
              </div>
              <h2 className="font-heading text-5xl md:text-7xl leading-[0.9] text-dark-green mb-6">
                LAVANDERIA SELF-SERVICE — <br />
                <span className="text-primary italic">PRATICIDADE, CUIDADO E QUALIDADE EXCLUSIVA</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                Na LavaBem Express você tem o cuidado que suas roupas merecem. Límpas, secas e perfumadas com OMO e Comfort em até 75 minutos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button onClick={() => scrollTo('valores')} className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-primary/90 transition-all uppercase tracking-wide">
                  Ver Valores
                </button>
                <button onClick={() => scrollTo('estrutura')} className="bg-white border border-slate-200 text-slate-800 px-8 py-4 rounded-xl font-bold text-lg shadow-sm hover:bg-slate-50 transition-all uppercase tracking-wide">
                  Conheça o Espaço
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => <img key={i} src={`https://picsum.photos/seed/${i+40}/100/100`} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" referrerPolicy="no-referrer" alt="user" />)}
                </div>
                <div className="flex items-center gap-1 text-accent">
                   {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] relative">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={ASSETS.heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase font-bold tracking-widest opacity-70 mb-1">Status</p>
                          <p className="font-bold flex items-center gap-2">Qualidade OMO e Comfort <Droplets size={16} /></p>
                        </div>
                        <div className="bg-primary p-2 rounded-full"><Wind size={20} /></div>
                    </div>
                </div>
                <div className="absolute top-6 right-6 p-2 bg-black/30 backdrop-blur-sm rounded-full text-white border border-white/20">
                  <Droplets size={20} />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-10 -right-6 md:-top-16 md:-right-10 bg-white p-6 rounded-3xl shadow-2xl flex flex-col items-center">
                <div className="bg-secondary p-2 rounded-full mb-2"><Clock className="text-primary" /></div>
                <p className="font-bold text-slate-800 text-sm">Express: 75 min</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Structure Section */}
        <section id="estrutura" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl text-primary mb-4">NOSSA ESTRUTURA</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Um espaço moderno com Wi-Fi, climatização e máquinas de última geração para sua total comodidade.</p>
            </div>

            <div className="relative group max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-[4rem] shadow-2xl aspect-video border-8 border-secondary/30">
                <motion.div 
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50 && activeStructureIndex < CONTENT.structure.length - 1) {
                      setActiveStructureIndex(prev => prev + 1);
                    } else if (info.offset.x > 50 && activeStructureIndex > 0) {
                      setActiveStructureIndex(prev => prev - 1);
                    }
                  }}
                  className="w-full h-full cursor-grab active:cursor-grabbing"
                >
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeStructureIndex}
                      initial={{ opacity: 0, x: 20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -20 }}
                      className="w-full h-full"
                    >
                      {CONTENT.structure[activeStructureIndex].type === 'video' ? (
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                          <source src={CONTENT.structure[activeStructureIndex].src} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={CONTENT.structure[activeStructureIndex].src} className="w-full h-full object-cover" alt="Estrutura" referrerPolicy="no-referrer" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Navigation Buttons Side by Side */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none">
                  <button 
                    onClick={() => setActiveStructureIndex(prev => Math.max(0, prev - 1))}
                    className={`p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 pointer-events-auto transition-all hover:bg-white/40 ${activeStructureIndex === 0 ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
                  >
                    <ArrowRight className="rotate-180" />
                  </button>
                  <button 
                    onClick={() => setActiveStructureIndex(prev => Math.min(CONTENT.structure.length - 1, prev + 1))}
                    className={`p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 pointer-events-auto transition-all hover:bg-white/40 ${activeStructureIndex === CONTENT.structure.length - 1 ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-8">
                {CONTENT.structure.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveStructureIndex(i)}
                    className={`h-2 transition-all duration-300 rounded-full ${activeStructureIndex === i ? 'w-12 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <p className="text-center text-primary font-bold text-xs uppercase tracking-widest mt-6">Arraste ou use os botões para explorar</p>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl text-dark-green mb-4">Nossos Diferenciais</h2>
              <p className="text-slate-500 italic">Tudo pensado para que lavar roupa deixe de ser um problema.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONTENT.differentials.map((item, i) => (
                <div key={i} className={`bg-dark-green text-white p-10 rounded-3xl shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group ${i === 3 ? 'lg:col-span-1' : ''}`}>
                  <div className="bg-white/10 p-4 rounded-2xl mb-6 text-primary group-hover:scale-110 transition-transform">
                    {item.icon === 'clock' && <Clock size={40} />}
                    {item.icon === 'droplets' && <Droplets size={40} />}
                    {item.icon === 'smartphone' && <Smartphone size={40} />}
                    {item.icon === 'check-circle' && <CheckCircle2 size={40} />}
                    {item.icon === 'calendar' && <Calendar size={40} />}
                    {item.icon === 'piggy-bank' && <PiggyBank size={40} />}
                    {item.icon === 'shield-check' && <ShieldCheck size={40} />}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-24 bg-white overflow-hidden">
           <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4 text-dark-green">
              <Instagram size={32} />
              <h2 className="font-heading text-4xl">Siga-nos no Instagram</h2>
            </div>
            <a 
              href={CONTENT.links.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="block text-center text-slate-500 mb-16 hover:text-primary transition-colors italic"
            >
              @lavabemexpress - acompanhe nossas novidades
            </a>

            <div className="relative flex overflow-hidden">
              <div className="flex animate-marquee py-4">
                {[...CONTENT.instagram, ...CONTENT.instagram].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05 }} 
                    className="flex-shrink-0 w-64 h-64 mx-3 rounded-3xl overflow-hidden shadow-lg"
                  >
                    {item.type === 'video' ? (
                      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={item.src} className="w-full h-full object-cover" alt="Insta Post" referrerPolicy="no-referrer" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
           </div>
        </section>

        {/* Values Section */}
        <section id="valores" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-6xl text-primary mb-4 tracking-wider">NOSSOS VALORES</h2>
              <p className="text-slate-500 italic">Preço justo e economia real para o seu dia a dia.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CONTENT.pricing.map((plan, i) => (
                <div key={i} className={`relative bg-white p-8 rounded-[2.5rem] shadow-sm border-2 transition-all hover:shadow-xl ${plan.highlight ? 'border-primary ring-4 ring-primary/5' : 'border-slate-100'}`}>
                  {plan.highlight && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest leading-none">{plan.badge}</div>}
                  <h3 className="text-xl font-bold mb-4 text-slate-800">{plan.title}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-slate-500 text-sm">{plan.unit}</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 size={16} className="text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all ${plan.highlight ? 'bg-primary text-white hover:bg-primary/90' : 'bg-[#0f172a] text-white hover:bg-slate-800'}`}>
                    <a href={CONTENT.links.whatsapp} target="_blank" rel="noreferrer" className="block w-full h-full">Comprar Agora</a>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fabric Care Section */}
        <section id="cuidados" className="py-24 bg-white">
          <div className="container mx-auto px-4">
             <div className="text-center mb-16">
                <h2 className="font-heading text-5xl text-primary mb-4">CUIDADOS COM TECIDOS</h2>
                <p className="text-slate-600">Cada tipo de roupa merece uma atenção especial.</p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  { title: "Algodão", icon: "cloud", desc: "O algodão é resistente, mas pede atenção com altas temperaturas para não encolher. Não usamos água quente nas lavagens." },
                  { title: "Seda & Delicados", icon: "droplets", desc: "Tecidos nobres exigem lavagem em ciclos ultra delicados com produtos premium. Cuidamos das suas fibras." },
                  { title: "Lã", icon: "thermometer", desc: "A lã pode deformar facilmente. Utilize ciclo delicado para manter a maciez das fibras. Siga as instruções da etiqueta." },
                  { title: "Sintéticos", icon: "zap", desc: "Poliéster e nylon secam rápido. Usamos Comfort para garantir um toque suave e evitar eletricidade estática." }
                ].map((item, i) => (
                   <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                      <div className="text-primary mb-6 bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center">
                        {i === 0 && <Clock size={28} />}
                        {i === 1 && <Wind size={28} />}
                        {i === 2 && <ShieldCheck size={28} />}
                        {i === 3 && <Zap size={28} />}
                      </div>
                      <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                ))}
             </div>

             <div className="bg-secondary rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto border border-primary/20">
                <div className="bg-primary p-4 rounded-2xl text-white"><Zap size={32} /></div>
                <div>
                   <h5 className="text-primary font-bold text-lg mb-2">Dica importante:</h5>
                   <p className="text-dark-green leading-relaxed">Sempre confira a etiqueta da sua roupa antes de lavar ou secar. Ela indica a forma correta de cuidado para evitar manchas, encolhimento ou danos.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-24 bg-dark-blue text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl text-primary mb-4">O que dizem nossos clientes</h2>
              <div className="flex justify-center gap-1 text-accent mb-12">
                {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { name: "Rafael Postal", text: "Belíssima estrutura, ambiente aconchegante e máquinas de maior qualidade." },
                { name: "Lara Rotoli", text: "Maravilhosa, produtos de alta qualidade... recomendo" },
                { name: "Ítalo Lima", text: "Lavanderia limpa, roupas saem cheirosas e limpinhas." }
              ].map((t, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/5 relative">
                  <p className="italic text-lg mb-8 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" alt={t.name} />
                    <div>
                        <p className="font-bold">{t.name}</p>
                        <p className="text-xs uppercase tracking-widest text-slate-400">Cliente Google</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 border border-white/5 p-12 rounded-[4rem] max-w-2xl mx-auto text-center backdrop-blur-md">
                <h3 className="text-3xl font-bold mb-6">Já nos visitou?</h3>
                <p className="text-slate-400 mb-10">Sua avaliação no Google nos ajuda a crescer e a oferecer o melhor serviço!</p>
                <a 
                  href={CONTENT.links.googleReview} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white text-dark-blue px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 mx-auto hover:bg-slate-100 transition-all w-fit"
                >
                  <Star className="text-accent" fill="currentColor" /> Avaliar no Google
                </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-5xl text-dark-green text-center mb-16">Dúvidas Frequentes</h2>
            <div className="divide-y divide-slate-100">
              {CONTENT.faq.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-heading text-6xl text-primary mb-12">ONDE NOS ENCONTRAR</h2>
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-2xl text-primary shadow-sm"><MapPin size={32} /></div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-800 mb-2">Endereço</h4>
                      <p className="text-slate-600 leading-relaxed">Rua Tenente Ary Tarragô, 2089 - Loja 2<br />Passo das Pedras, Porto Alegre - RS</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-2xl text-primary shadow-sm"><Clock size={32} /></div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-800 mb-2">Horário de Funcionamento</h4>
                      <p className="text-slate-600">Todos os dias: 07:00 às 23:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-white p-4 rounded-2xl text-primary shadow-sm"><MessageCircle size={32} /></div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-800 mb-2">WhatsApp</h4>
                      <p className="text-slate-600">(51) 99521-6883</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex gap-4">
                   <a href={CONTENT.links.instagram} target="_blank" rel="noreferrer" className="bg-white p-4 rounded-2xl text-primary shadow-sm hover:scale-110 transition-transform"><Instagram size={24} /></a>
                   <a href={CONTENT.links.whatsapp} target="_blank" rel="noreferrer" className="bg-white p-4 rounded-2xl text-primary shadow-sm hover:scale-110 transition-transform"><MessageCircle size={24} /></a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl aspect-square border-8 border-white relative group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5!2d-51.1!3d-30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiUyA1McKwMDYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1" 
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark-green/20 to-transparent group-hover:opacity-0 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 flex flex-col items-center">
            <div className="flex flex-col items-center gap-1 mb-12">
                <img src={ASSETS.logo} alt="LavaBem Logo" className="h-20 w-20 rounded-full shadow-xl mb-2" referrerPolicy="no-referrer" />
                <h3 className="font-brand text-6xl text-primary leading-none">LavaBem Express</h3>
                <p className="font-brand text-2xl text-slate-400 -mt-2">Sua lavanderia self-service</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
              {['Início', 'Estrutura', 'Valores', 'Cuidados', 'Depoimentos', 'Contato'].map(item => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                  {item}
                </button>
              ))}
            </div>

            <div className="w-full pt-12 border-t border-slate-100 flex flex-col items-center text-center">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
                    © {new Date().getFullYear()} LavaBem Express - Porto Alegre. Todos os direitos reservados.
                </p>
            </div>
        </div>
      </footer>

      {/* WhatsApp Fixed Button */}
      <a 
        href={CONTENT.links.whatsapp} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-8 right-8 z-[70] bg-[#25d366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Como podemos ajudar?
        </span>
      </a>
    </div>
  );
}
