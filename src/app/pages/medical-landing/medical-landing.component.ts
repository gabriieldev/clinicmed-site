import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

export interface NavLink {
  label: string;
  target: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Differential {
  icon: string;
  title: string;
  description: string;
  featured: boolean;
}

export interface Testimonial {
  name: string;
  description: string;
  rating: number;
  comment: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-medical-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medical-landing.component.html',
  styleUrl: './medical-landing.component.scss'
})
export class MedicalLandingComponent implements OnInit {

  // ─── Clinic Config ─────────────────────────────────────────────────────────
  readonly clinicName = 'ClinicMed';
  readonly whatsappNumber = '5583988119359';
  readonly address = 'Av. da Saúde, 1234 - Jardins, São Paulo - SP';
  readonly businessHours = 'Seg - Sex: 08:00 às 20:00 | Sáb: 08:00 às 13:00';

  // ─── Navigation ────────────────────────────────────────────────────────────
  readonly navLinks: NavLink[] = [
    { label: 'Início',   target: 'home'     },
    { label: 'Serviços', target: 'servicos' },
    { label: 'Sobre',    target: 'sobre'    },
    { label: 'Contato',  target: 'contato'  },
  ];

  // ─── Hero ──────────────────────────────────────────────────────────────────
  readonly hero = {
    badge: 'Excelência em Saúde',
    title: 'Cuidado médico com excelência, confiança e atendimento humanizado',
    subtitle: 'Agende sua consulta em uma clínica moderna, preparada para cuidar da sua saúde com segurança e atenção.',
    primaryButtonText: 'Agendar pelo WhatsApp',
    secondaryButtonText: 'Conhecer a clínica',
    imageUrl: 'assets/images/medical-team.jpg',
    imageAlt: 'Equipe médica da ClinicMed',
    floatingCard: {
      icon: 'verified',
      title: 'Atendimento Seguro',
      description: 'Protocolos rigorosos de saúde',
    },
  };

  // ─── Stats ─────────────────────────────────────────────────────────────────
  readonly stats: Stat[] = [
    { value: '15+',  label: 'Anos de Experiência'  },
    { value: '20k+', label: 'Pacientes Atendidos'  },
    { value: '30+',  label: 'Especialistas'         },
    { value: '5★',   label: 'Avaliação Média'       },
  ];

  // ─── About ─────────────────────────────────────────────────────────────────
  readonly about = {
    title: 'Sobre a Clínica',
    paragraphs: [
      'Na ClinicMed, nossa missão é transformar o cuidado com a saúde em uma experiência acolhedora, eficiente e segura.',
      'Nossa estrutura foi planejada para oferecer conforto, tecnologia e atendimento humanizado desde a recepção até o acompanhamento médico.',
    ],
    highlights: [
      'Missão: Saúde com dignidade e precisão.',
      'Visão: Ser referência em atendimento humanizado.',
      'Valores: Ética, empatia e responsabilidade.',
    ],
    images: [
      { src: 'assets/images/clinic-room.jpg',        alt: 'Consultório médico moderno'    },
      { src: 'assets/images/medical-equipment.jpg',  alt: 'Equipamentos médicos modernos' },
    ] as AboutImage[],
  };

  // ─── Services ──────────────────────────────────────────────────────────────
  readonly services: Service[] = [
    { icon: 'medical_services', title: 'Clínica Geral', description: 'Atendimento primário, check-ups completos, prevenção e acompanhamento da saúde.' },
    { icon: 'cardiology',       title: 'Cardiologia',   description: 'Consultas e acompanhamento especializado para cuidar da saúde do coração.'     },
    { icon: 'child_care',       title: 'Pediatria',     description: 'Cuidado humanizado e especializado para crianças e adolescentes.'               },
    { icon: 'biotech',          title: 'Exames',        description: 'Estrutura preparada para realização e encaminhamento de exames com segurança.'  },
  ];

  // ─── Differentials ─────────────────────────────────────────────────────────
  readonly differentials: Differential[] = [
    { icon: 'diversity_3',   title: 'Atendimento Humanizado',   description: 'Ouvimos cada paciente com empatia, respeito e atenção individualizada.',                             featured: true  },
    { icon: 'verified_user', title: 'Equipe Qualificada',       description: 'Profissionais preparados para oferecer atendimento seguro, ético e eficiente.',                       featured: false },
    { icon: 'domain',        title: 'Ambiente Moderno',         description: 'Estrutura confortável, limpa, acessível e planejada para o bem-estar dos pacientes.',                 featured: false },
    { icon: 'location_on',   title: 'Localização Estratégica',  description: 'Clínica de fácil acesso, com estacionamento privativo e segurança 24h para sua comodidade.',          featured: false },
  ];

  // ─── Testimonials ──────────────────────────────────────────────────────────
  readonly testimonials: Testimonial[] = [
    {
      name: 'Maria Eduarda Silva',
      description: 'Paciente há 2 anos',
      rating: 5,
      comment: 'A experiência foi excelente do início ao fim. Atendimento humanizado, médicos atenciosos e equipe muito preparada.',
    },
  ];

  // ─── Contact Form ──────────────────────────────────────────────────────────
  contactForm: ContactForm = { name: '', phone: '', email: '', message: '' };

  // ─── Footer ────────────────────────────────────────────────────────────────
  readonly footer = {
    description: 'Referência em atendimento de saúde premium, humanizado e seguro.',
    quickLinks: ['Início', 'Nossos Serviços', 'Nossa Equipe', 'Agendamentos'],
    supportLinks: ['Política de Privacidade', 'Termos de Uso', 'FAQ'],
    copyright: '© 2026 ClinicMed. Todos os direitos reservados.',
    social: [
      { icon: 'photo_camera', label: 'Instagram', href: '#' },
      { icon: 'share',        label: 'Facebook',  href: '#' },
    ],
  };

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('ClinicMed | Clínica Médica com Atendimento Humanizado');
    this.metaService.updateTag({ name: 'description', content: 'Agende sua consulta em uma clínica médica moderna, com atendimento humanizado, estrutura profissional e equipe qualificada.' });
    this.metaService.updateTag({ name: 'keywords', content: 'clínica médica, consulta médica, atendimento médico, clínica humanizada, agendamento médico' });
  }

  // ─── Methods ───────────────────────────────────────────────────────────────

  getWhatsAppLink(message = 'Olá! Gostaria de agendar uma consulta.'): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  submitContactForm(): void {
    const { name, phone, email, message } = this.contactForm;
    const text = `Olá! Me chamo ${name}.\nTelefone: ${phone}${email ? '\nE-mail: ' + email : ''}${message ? '\nMensagem: ' + message : ''}`;
    window.open(this.getWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  }

  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getStarArray(rating: number): number[] {
    return Array.from({ length: rating }, (_, i) => i);
  }
}
