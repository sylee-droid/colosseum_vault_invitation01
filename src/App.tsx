/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Radio, 
  Bot, 
  Building2, 
  Cpu, 
  Eye, 
  Wrench, 
  Users 
} from "lucide-react";

// Note: Using standard Lucide icons that match the visual intent of the original Material Symbols
const Icons = {
  Keynote: Radio,
  Robot: Bot,
  Building: Building2,
  Precision: Cpu,
  Vision: Eye,
  Maintenance: Wrench,
  Networking: Users
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_40px_rgba(0,245,255,0.05)]">
    <div className="flex justify-between items-center px-8 py-4 max-w-full">
      <div className="text-xl font-bold tracking-tighter text-white uppercase font-headline">
        VAULTCON 2026
      </div>
      <div className="hidden md:flex gap-8 font-headline tracking-tight">
        <a className="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1" href="#">Experience</a>
        <a className="text-neutral-400 hover:text-white transition-colors" href="#">Program</a>
        <a className="text-neutral-400 hover:text-white transition-colors" href="#">Speakers</a>
        <a className="text-neutral-400 hover:text-white transition-colors" href="#">Logistics</a>
      </div>
      <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2 font-bold hover:scale-95 transition-all duration-300 cursor-pointer">
        Secure Access
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        className="w-full h-full object-cover opacity-40" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8icHRDOpwqYchRzMTMar8YyW9vSYHpVX4oDr9O6tt2GHrP8ck_pyBYeBhg8r6wiZ3b8PXUCfl5gQnjwJbfXzedcWhB5KzoPJf-Cd1rhgnOVjvDwhFNs-8lKdof9dgm2__NUHZi2J17eiZg2GhDppOT45_Jmm3T7hwOR92_y5VJi9Ko5etk-qUVnoJ81b0_l3hm5VyCSgy2Tys2oJHj97DUzBhrr06yp8tlXNeYVvgrXoMeaoC0p2f-SnpC_AdA4VBIlNOw-1KBg" 
        alt="Abstract flowing kinetic waves"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-4xl"
    >
      <div className="inline-block px-3 py-1 mb-6 border border-secondary text-secondary font-headline text-xs tracking-widest uppercase bg-secondary/5">
        The 2026 Summit
      </div>
      <h1 className="text-6xl md:text-9xl font-headline font-bold tracking-tighter mb-4 text-white leading-none">
        vaultcon <span className="text-primary">2026</span>
      </h1>
      <p className="text-xl md:text-3xl font-light text-on-surface-variant font-headline tracking-tight mb-12 max-w-2xl">
        The New Standard of Logistics Automation
      </p>
      
      <div className="flex flex-wrap gap-8 items-center mb-16">
        <div className="flex flex-col">
          <span className="text-secondary text-xs uppercase tracking-widest mb-1">Timeline</span>
          <span className="text-lg font-bold">July 2026</span>
        </div>
        <div className="w-px h-10 bg-outline-variant/30 hidden md:block"></div>
        <div className="flex flex-col">
          <span className="text-secondary text-xs uppercase tracking-widest mb-1">Hub</span>
          <span className="text-lg font-bold">Seoul, Korea</span>
        </div>
        <div className="w-px h-10 bg-outline-variant/30 hidden md:block"></div>
        <div className="flex flex-col">
          <span className="text-secondary text-xs uppercase tracking-widest mb-1">Network</span>
          <span className="text-lg font-bold">150 Leaders</span>
        </div>
      </div>
      
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-4 bg-primary text-on-primary px-8 py-5 text-lg font-bold uppercase tracking-widest hover:bg-primary-container transition-all duration-300 cursor-pointer"
      >
        Register Interest
        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
      </motion.button>
    </motion.div>
  </section>
);

const Introduction = () => (
  <section className="py-32 px-8 md:px-24 bg-surface-container-low relative">
    <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden opacity-20 pointer-events-none">
      <img 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi3aPWa_iYsHEvW7k5WNVu-BqbgmFEo_4kqoTaavin23fi8DvQpMgiThsdWEEqjNg82oUOS9DNMoCaRTkTJ4AC-LvIP7GPX0oHXeEjLnuLifX3u4PcbeAqCDa6jp9gMjNEnup9dIoapJlM76ZjhJZpf0boPEeTMUQTSsj9JtVMjNt2hNG7bhfQuYSmaE3ieTbRZ7I9hoVtVleSkMDRkXlboPtOdtl07rz23elyc2GP-CuBwCCBSW_s_QIwE5KQ02kQTHGo1EcwHg" 
        alt="Neon light particles"
        referrerPolicy="no-referrer"
      />
    </div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 text-white leading-tight">
          행사 소개
        </h2>
        <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
          <p>
            국내 물류·이커머스 업계의 실무 리더들이 한자리에 모입니다. VAULTCON 2026은 단순한 컨퍼런스를 넘어, 물류 자동화의 실제 구현 사례와 미래 비전을 공유하는 핵심 허브입니다.
          </p>
          <p>
            복잡해지는 글로벌 공급망과 급변하는 소비자 요구 속에서, 우리는 어떻게 기술을 통해 효율성을 극대화할 것인가에 대한 해답을 제시합니다.
          </p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-2 gap-4">
        {[
          { id: "01", label: "Automation", color: "text-primary" },
          { id: "02", label: "Precision", color: "text-secondary", offset: true },
          { id: "03", label: "Kinetic", color: "text-primary", negOffset: true },
          { id: "04", label: "Nexus", color: "text-secondary" }
        ].map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-surface-container-high p-8 glass-vessel border-t border-l border-primary/20 ${item.offset ? 'mt-8' : ''} ${item.negOffset ? '-mt-8' : ''}`}
          >
            <span className={`text-3xl font-headline font-bold ${item.color} mb-2 block`}>{item.id}</span>
            <p className="text-sm uppercase tracking-widest text-on-surface">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Program = () => {
  const sessions = [
    {
      type: "KEYNOTE",
      icon: Icons.Keynote,
      company: "Colosseum Corporation",
      title: "Colosseum Vault 소개 & 물류 자동화 허브 비전",
      description: "통합 물류 운영의 새로운 패러다임을 제시하는 콜로세움의 차세대 핵심 기술 공개",
      color: "text-primary",
      borderColor: "border-primary"
    },
    {
      type: "SESSION 02",
      icon: Icons.Robot,
      company: "Dematic",
      title: "물류 자동화의 미래 — 롯데칠성 사례 발표",
      description: "대규모 식음료 물류 시스템의 자동화 성공 사례와 글로벌 트렌드 분석",
      color: "text-secondary",
      borderColor: "border-secondary"
    },
    {
      type: "SESSION 03",
      icon: Icons.Building,
      company: "로지스밸리",
      title: "면세점 자동화 — 2·3층 통합 운영",
      description: "고부가가치 상품군을 위한 멀티 레이어 자동화 물류센터 운영 전략",
      color: "text-on-surface",
      borderColor: "border-on-surface"
    },
    {
      type: "SESSION 04",
      icon: Icons.Precision,
      company: "뉴빌리티",
      title: "휴머노이드 로봇 빌리 소개 및 현장 실증",
      description: "자율주행 기술을 넘어선 휴머노이드 로봇의 실제 물류 현장 투입 시나리오",
      color: "text-primary",
      borderColor: "border-primary"
    },
    {
      type: "SESSION 05",
      icon: Icons.Vision,
      company: "CEMS",
      title: "비전 검사 시스템 & 팔렛타이징 로봇 솔루션",
      description: "AI 기반 검사 시스템과 효율적인 자동 적재 솔루션의 시너지",
      color: "text-secondary",
      borderColor: "border-secondary"
    },
    {
      type: "SESSION 06",
      icon: Icons.Maintenance,
      company: "큐에이드",
      title: "자동화 설비 유지보수 & 설치 물류 서비스",
      description: "설비의 생애주기를 책임지는 고도화된 유지보수 프레임워크 공유",
      color: "text-on-surface",
      borderColor: "border-on-surface"
    }
  ];

  return (
    <section className="py-32 px-8 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-white tracking-tighter uppercase mb-4">Program</h2>
          <p className="text-secondary tracking-widest uppercase text-sm font-bold">The Blueprint of Next-Gen Logistics</p>
        </div>
        <div className="hidden md:block">
          <img 
            className="h-32 opacity-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeaufGN3KsTQlJKlUQClYUdnzk1Jp2OKVGt3eyJD9vmMmoF5EoyWWrw7Hac7VMJV7XXKFS-M4fCBUuzJp5bCynrtN3CGUPNWl50T85DfJdMsnOKNoBK-D2l5HNOKeE8LHZYOvgSCDRInnXCuHPTe-ADWeFJg55qg3Bi7zXOTg8HKq1TRu5v6z1FJ8KSYAMz_cS6k50z5VwcifhzuDrNBnCpqMzTRjvvV3Rf61U5AlEC0yPVQbFj8jDuau4SHNnfYDhG7fAvcDAzg" 
            alt="Robotic arm schematic"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {sessions.map((session, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.02, zIndex: 10 }}
            className="group bg-surface-container-low p-10 flex flex-col h-full border border-outline-variant/10 hover:border-secondary transition-all duration-500 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-12">
              <span className={`text-xs font-black tracking-widest ${session.color} border ${session.borderColor} px-2 py-1`}>
                {session.type}
              </span>
              <session.icon className="text-outline-variant w-5 h-5" />
            </div>
            <h3 className="text-on-surface-variant font-bold text-sm uppercase tracking-widest mb-2">{session.company}</h3>
            <h4 className="text-2xl font-headline font-bold text-white mb-6 group-hover:text-primary transition-colors">
              {session.title}
            </h4>
            <p className="mt-auto text-on-surface-variant text-sm leading-relaxed opacity-60">
              {session.description}
            </p>
          </motion.div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 bg-primary-container/10 p-12 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-primary-container/20 transition-all duration-500 mt-8"
        >
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Icons.Networking className="text-on-primary w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-black tracking-widest text-primary uppercase block mb-1">FINAL SESSION</span>
              <h4 className="text-3xl font-headline font-bold text-white">종합 질의응답 & 네트워킹</h4>
            </div>
          </div>
          <p className="text-on-surface-variant max-w-md text-right md:text-left">
            업계 리더들과 직접 소통하며 새로운 비즈니스 기회를 탐색하는 VAULTCON의 하이라이트 세션입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const VisualSpacer = () => (
  <section className="h-96 relative overflow-hidden">
    <img 
      className="w-full h-full object-cover grayscale opacity-30" 
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuArEKR5ZYBR4ny0Mh03sfKR29ewfzEXm9Ur-xnbHxMMMJk4Hzv7RyU6638xECNmqlC9WhD1YQtXHL5vyMbgCq75gc7UUFYkHPVIBXHRYjwVNJhPfvqNM-WZc96SUY5Dud23gaLO3Q9GOqsAphtms9QBXUyY5c6GCZycasPyIg5It9yJd8FK2fSynSoL2v0_tXwysKitajYH174dQQQ50w2fjmCxSvJLkhPqokLC1xzUETqLv9vJ9GI2Rpm7uzFU3warl1g81U4NGg" 
      alt="Futuristic warehouse"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
  </section>
);

const Footer = () => (
  <footer className="bg-neutral-950 w-full py-12 px-8 border-t border-white/5 text-xs uppercase tracking-widest">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
      <div className="text-lg font-black text-white">
        VAULTCON.
      </div>
      <div className="text-neutral-500 text-center md:text-left">
        © 2026 VAULTCON. THE KINETIC MONOLITH.
      </div>
      <div className="flex gap-8">
        <a className="text-neutral-500 hover:text-cyan-300 transition-colors" href="#">Privacy Terminal</a>
        <a className="text-neutral-500 hover:text-cyan-300 transition-colors" href="#">Transmission Protocol</a>
        <a className="text-neutral-500 hover:text-cyan-300 transition-colors" href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen kinetic-monolith-gradient selection:bg-primary selection:text-on-primary">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Program />
        <VisualSpacer />
      </main>
      <Footer />
    </div>
  );
}
