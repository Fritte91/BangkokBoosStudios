export type Locale = 'en' | 'th'

type NavLink = {
  id: string
  label: string
}

type Audience = {
  key: string
  title: string
  description: string
}

type Service = {
  title: string
  description: string
  price: string
}

type Plan = {
  name: string
  price: string
  description: string
  whoThisIsFor: string
  features: string[]
  highlighted?: boolean
}

type BeforeAfterExample = {
  title: string
  before: string
  after: string
  projectUrl?: string
}

type WorkflowStep = {
  label: string
  description: string
}

type HowItWorksStep = {
  title: string
  description: string
}

type FAQ = {
  question: string
  answer: string
}

type Testimonial = {
  name: string
  role: string
  text: string
  stars: number
}

type Translation = {
  nav: {
    cta: string
    links: NavLink[]
  }
  hero: {
    badge: string
    title: {
      start: string
      highlight: string
      end?: string
    }
    description: string
    primaryCta: string
    secondaryCta: string
    trust: string
    phoneLabel: string
    laptopLabel: string
  }
  about: {
    title: string
    description: string
    storyTitle: string
    storyParagraphs: string[]
    bilingualSupport: string
    teamPlaceholder: string
    audiences: Audience[]
  }
  services: {
    title: string
    subtitle: string
    list: Service[]
    workflowTitle: string
    workflowShots: string[]
  }
  workflow: {
    title: string
    subtitle: string
    steps: WorkflowStep[]
    diagramTitle: string
    diagramCaption: string
  }
  beforeAfter: {
    title: string
    subtitle: string
    beforeLabel: string
    afterLabel: string
    beforePlaceholder: string
    afterPlaceholder: string
    examples: BeforeAfterExample[]
  }
  pricing: {
    title: string
    subtitle: string
    mostPopularLabel: string
    perMonth: string
    choose: (planName: string) => string
    plans: Plan[]
  }
  postPricingCta: {
    eyebrow: string
    headline: string
    supportingText: string
    primaryCta: string
    secondaryLink: string
    trustReassurance: string
  }
  testimonials: {
    title: string
    subtitle: string
    entries: Testimonial[]
  }
  howItWorks: {
    title: string
    subtitle: string
    steps: HowItWorksStep[]
  }
  faq: {
    title: string
    subtitle: string
    items: FAQ[]
    ctaQuestion: string
    ctaButton: string
    trustLine: string
  }
    contact: {
      title: string
      subtitle: string
      cardTitle: string
      cardSubtitle: string
      nameLabel: string
      namePlaceholder: string
      phoneLabel: string
      phonePlaceholder: string
      businessTypeLabel: string
      businessOptions: {
        value: string
        label: string
      }[]
      challengeLabel: string
      challengePlaceholder: string
      preferredContactLabel: string
      preferredContactOptions: {
        value: string
        label: string
      }[]
      submit: string
      submitLoading: string
      trustMicrocopy: string
      successTitle: string
      successMessage: string
      errorMessage: string
      validationErrors: {
        nameRequired: string
        phoneRequired: string
        businessTypeRequired: string
      }
    }
  footer: {
    tagline: string
    servicesTitle: string
    companyTitle: string
    services: string[]
    company: string[]
    contactTitle: string
    lineLabel: string
    phoneLabel: string
    emailLabel: string
    copyright: string
    operatedBy: string
    policies: {
      privacy: string
      terms: string
    }
  }
}

const enChoose = (planName: string) => `Choose ${planName}`
const thChoose = (planName: string) => `เลือกแพ็กเกจ ${planName}`

export const translations: Record<Locale, Translation> = {
  en: {
    nav: {
      cta: 'Get Free Audit',
      links: [
        { id: 'services', label: 'Services' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'contact', label: 'Contact' },
      ],
    },
    hero: {
      badge: '✨ For Thai Businesses',
      title: {
        start: 'Digital Growth',
        highlight: 'Made Simple',
      },
      description:
        'Automation, Google Business Optimization & Social Media Support – Done For You. Let us handle the digital side while you focus on your business.',
      primaryCta: 'Get Free Audit',
      secondaryCta: 'View Services',
      trust: 'Trusted by 50+ Thai businesses',
      phoneLabel: 'Google Profile',
      laptopLabel: 'Website',
    },
    about: {
      title: 'About Us',
      description:
        'Bangkok Boost Studio is a collaboration between a Swedish digital expert and a Thai business owner. We bring bilingual expertise, deep local knowledge, and reliable support to help Thai small businesses thrive online.',
      storyTitle: 'Our Story',
      storyParagraphs: [
        'We started Bangkok Boost Studio because we saw Thai business owners struggling with digital marketing. Our Swedish partner brings technical expertise and automation knowledge, while our Thai partner ensures we truly understand local business needs. Together, we deliver solutions that work.',
      ],
      bilingualSupport: 'Bilingual Support: We communicate in Thai and English, making everything simple and stress-free.',
      teamPlaceholder: 'Team Photo Placeholder',
      audiences: [
        {
          key: 'restaurants',
          title: 'Restaurants',
          description: 'Increase reservations and attract local diners through optimized Google profiles and social media.',
        },
        {
          key: 'salons',
          title: 'Salons & Spas',
          description: 'Automate booking confirmations and showcase your services to more customers online.',
        },
        {
          key: 'retail',
          title: 'Retail Shops',
          description: 'Drive foot traffic with better online visibility and consistent social media presence.',
        },
      ],
    },
    services: {
      title: 'Our Services',
      subtitle: 'Everything your business needs to succeed online, handled by our team.',
      list: [
        {
          title: 'Google Business Profile Optimization',
          description: 'We optimize your Google Business Profile to rank higher in local searches and attract more customers.',
          price: 'From 2,500 THB',
        },
        {
          title: 'Automated Social Media Posting',
          description: 'Daily posts scheduled via Make.com automation. Stay consistent without the daily effort.',
          price: 'From 1,500 THB',
        },
        {
          title: 'Workflow Automation',
          description: 'Automate lead capture, auto-replies, contact forms, and customer notifications.',
          price: 'From 3,000 THB',
        },
        {
          title: 'Website & Menu Updates',
          description: 'Keep your website and online menus fresh with regular updates and SEO improvements.',
          price: 'From 2,000 THB',
        },
      ],
      workflowTitle: 'Our Proven Workflow in Action',
      workflowShots: ['Screenshot 1', 'Screenshot 2', 'Screenshot 3'],
    },
    workflow: {
      title: 'Automation in Action',
      subtitle: 'See how our workflow automation works to capture leads and keep you connected.',
      steps: [
        {
          label: 'Customer Message',
          description: 'Received on Facebook/Website',
        },
        {
          label: 'Make.com Automation',
          description: 'Triggered instantly',
        },
        {
          label: 'Auto-Reply',
          description: 'Sent to customer',
        },
        {
          label: 'Owner Notification',
          description: 'Alert in spreadsheet',
        },
      ],
      diagramTitle: 'Detailed Workflow Diagram Placeholder',
      diagramCaption: 'Automation Flow Visualization',
    },
    beforeAfter: {
      title: 'Real Results',
      subtitle: 'See the transformation we deliver for Thai businesses like yours.',
      beforeLabel: 'BEFORE',
      afterLabel: 'AFTER',
      beforePlaceholder: 'Before Screenshot',
      afterPlaceholder: 'After Screenshot',
      examples: [
        {
          title: 'Google Business Profile',
          before: 'Basic info, few photos',
          after: 'Optimized, high-ranking, customer reviews',
        },
        {
          title: 'Social Media Presence',
          before: 'Inconsistent posting',
          after: 'Daily automated posts, engagement boost',
        },
        {
          title: 'Website Performance',
          before: 'Outdated content, low SEO',
          after: 'Fresh content, better rankings, more visitors',
        },
      ],
    },
    pricing: {
      title: 'Monthly Packages',
      subtitle: 'Choose the plan that fits your business growth.',
      mostPopularLabel: 'Most Popular',
      perMonth: '/ month',
      choose: enChoose,
      plans: [
        {
          name: 'Starter',
          price: '3,500',
          description: 'Perfect for getting started',
          whoThisIsFor: 'New businesses establishing their online presence',
          features: [
            'Google Business Profile optimization',
            '4 social media posts per week',
            'Basic email support',
            'Monthly reporting',
          ],
        },
        {
          name: 'Growth',
          price: '6,500',
          description: 'Most popular for growing businesses',
          whoThisIsFor: 'Established businesses ready to scale',
          features: [
            'Everything in Starter',
            'Daily social media posts',
            'Workflow automation setup',
            'Priority email support',
            'Lead capture form',
            'Bi-weekly check-ins',
          ],
          highlighted: true,
        },
        {
          name: 'Royal Boost',
          price: '12,000',
          description: 'Complete digital transformation',
          whoThisIsFor: 'Businesses seeking comprehensive digital excellence',
          features: [
            'Everything in Growth',
            'Website updates & maintenance',
            'Advanced automation workflows',
            'Phone support',
            'Monthly strategy sessions',
            'Custom integrations',
            'Dedicated account manager',
          ],
        },
      ],
    },
    postPricingCta: {
      eyebrow: 'Need help deciding?',
      headline: 'Not sure which plan fits your business?',
      supportingText: 'Get a free, no-obligation audit of your online presence. We\'ll tell you exactly what you need — and what you don\'t.',
      primaryCta: 'Get Free Audit',
      secondaryLink: 'Or contact us directly',
      trustReassurance: 'No sales pressure. Honest advice.',
    },
    testimonials: {
      title: 'What Clients Say',
      subtitle: "Real feedback from Thai businesses we've helped.",
      entries: [
        {
          name: 'Somchai',
          role: 'Restaurant Owner',
          text: 'Bangkok Boost helped us get more reservations. Our Google profile is now showing up first in searches!',
          stars: 5,
        },
        {
          name: 'Niran',
          role: 'Salon Owner',
          text: 'The automation saved us so much time. Customers are impressed with the quick responses to their inquiries.',
          stars: 5,
        },
        {
          name: 'Pim',
          role: 'Retail Shop Owner',
          text: 'Professional team that understands Thai business. They explain everything clearly. Highly recommend!',
          stars: 5,
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'From consultation to launch in just 4 simple steps.',
      steps: [
        {
          title: 'Free Consultation',
          description: 'A quick, friendly chat on LINE. No pressure—just tell us about your business.',
        },
        {
          title: 'Setup & Creation',
          description: 'We build your website, optimize Google profile, and set up social media.',
        },
        {
          title: 'Automation Setup',
          description: 'We configure automations to capture leads and send updates automatically.',
        },
        {
          title: 'Monthly Support',
          description: 'We stay with you. Ongoing updates, maintenance, and support—you\'re never alone.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Got questions? We have answers.',
      items: [
        {
          question: 'How fast is delivery?',
          answer: 'Most setups are complete within 5-7 business days. Rush options available upon request.',
        },
        {
          question: 'Do I need to understand technology?',
          answer: 'No! We handle all technical aspects. You just focus on your business. We explain everything in simple terms.',
        },
        {
          question: 'Can you manage my page for me?',
          answer: "Yes, that's included in our Royal Boost package. We manage everything from content to customer responses.",
        },
        {
          question: 'How do I pay?',
          answer: 'We accept bank transfers, credit cards, and mobile payment. Invoices are sent monthly.',
        },
        {
          question: 'Can I change plans later?',
          answer: 'You can upgrade or downgrade your plan anytime with just a message to us.',
        },
        {
          question: 'What if I have technical issues?',
          answer: 'We provide support based on your package. Starter plan gets email support, while Growth & Royal Boost get priority support.',
        },
      ],
      ctaQuestion: 'Still have questions?',
      ctaButton: 'Get Free Audit',
      trustLine: 'No pressure. Honest advice for Thai businesses.',
    },
    contact: {
      title: 'Ready to Get Started?',
      subtitle: 'Book your free consultation today.',
      cardTitle: 'Get Your Free Audit',
      cardSubtitle: "Tell us about your business and we'll provide a personalized assessment.",
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      phoneLabel: 'Phone',
      phonePlaceholder: '+66...',
      businessTypeLabel: 'Business Type',
      businessOptions: [
        { value: '', label: 'Select your business' },
        { value: 'restaurant', label: 'Restaurant' },
        { value: 'salon', label: 'Salon / Spa' },
        { value: 'retail', label: 'Retail Shop' },
        { value: 'other', label: 'Other' },
      ],
      challengeLabel: 'What are your main challenges?',
      challengePlaceholder: 'Tell us about your business and what you need help with...',
      preferredContactLabel: 'Preferred Contact Method',
      preferredContactOptions: [
        { value: '', label: 'No preference' },
        { value: 'line', label: 'LINE' },
        { value: 'phone', label: 'Phone' },
      ],
      submit: 'Get My Free Audit',
      submitLoading: 'Submitting...',
      trustMicrocopy: 'No pressure. No spam. We support both Thai and English.',
      successTitle: 'Thank you!',
      successMessage: "Your free audit request has been received. We'll contact you within 24 hours.",
      errorMessage: 'Something went wrong. Please try again or contact us directly.',
      validationErrors: {
        nameRequired: 'Name is required',
        phoneRequired: 'Phone number is required',
        businessTypeRequired: 'Please select your business type',
      },
    },
    footer: {
      tagline: 'Digital growth and automation for Thai small businesses.',
      servicesTitle: 'Services',
      companyTitle: 'Company',
      services: ['Google Business', 'Social Media', 'Automation', 'Website Design'],
      company: ['About Us', 'Pricing', 'How It Works', 'Contact'],
      contactTitle: 'Get In Touch',
      lineLabel: 'LINE ID',
      phoneLabel: '+66 XX XXX XXXX',
      emailLabel: 'hello@bangkokboost.com',
      copyright: '© 2025 Bangkok Boost Studio. All rights reserved.',
      operatedBy: 'Operated by Thai Partner Name',
      policies: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  },
  th: {
    nav: {
      cta: 'ขอรับการตรวจสุขภาพฟรี',
      links: [
        { id: 'services', label: 'บริการ' },
        { id: 'pricing', label: 'ราคา' },
        { id: 'how-it-works', label: 'ขั้นตอนการทำงาน' },
        { id: 'contact', label: 'ติดต่อเรา' },
      ],
    },
    hero: {
      badge: '✨ เพื่อธุรกิจไทย',
      title: {
        start: 'ปั้นการเติบโตดิจิทัล',
        highlight: 'ให้ง่ายกว่าที่เคย',
      },
      description:
        'งานออโต้เมชัน ปรับแต่ง Google Business และดูแลโซเชียลมีเดียแบบครบวงจร ให้เราจัดการโลกออนไลน์แทนคุณ เพื่อที่คุณจะได้โฟกัสกับธุรกิจได้เต็มที่',
      primaryCta: 'ขอรับการตรวจสุขภาพฟรี',
      secondaryCta: 'ดูบริการทั้งหมด',
      trust: 'ได้รับความไว้วางใจจากธุรกิจไทยกว่า 50 แห่ง',
      phoneLabel: 'โปรไฟล์ Google',
      laptopLabel: 'เว็บไซต์',
    },
    about: {
      title: 'เกี่ยวกับเรา',
      description:
        'Bangkok Boost Studio เกิดจากการร่วมมือของผู้เชี่ยวชาญดิจิทัลชาวสวีเดนและผู้ประกอบการชาวไทย เราผสานทักษะสองภาษา ความเข้าใจท้องถิ่น และการดูแลที่ไว้ใจได้ เพื่อช่วยให้ธุรกิจขนาดเล็กของไทยเติบโตออนไลน์',
      storyTitle: 'จุดเริ่มต้นของเรา',
      storyParagraphs: [
        'เราเห็นเจ้าของธุรกิจไทยจำนวนมากลำบากกับการตลาดออนไลน์ พาร์ทเนอร์ชาวสวีเดนของเรานำประสบการณ์ด้านเทคนิคและออโต้เมชัน ส่วนพาร์ทเนอร์ชาวไทยทำให้เราเข้าใจความต้องการของธุรกิจท้องถิ่นอย่างแท้จริง จึงเกิดเป็นโซลูชันที่ใช้งานได้จริง',
      ],
      bilingualSupport: 'ดูแลสองภาษา: สื่อสารได้ทั้งไทยและอังกฤษ ง่าย สบายใจ ไม่ต้องกังวล',
      teamPlaceholder: 'พื้นที่รูปทีมงาน',
      audiences: [
        {
          key: 'restaurants',
          title: 'ร้านอาหาร',
          description: 'เพิ่มการจองและดึงดูดลูกค้าใกล้เคียงด้วยโปรไฟล์ Google และโซเชียลมีเดียที่โดดเด่น',
        },
        {
          key: 'salons',
          title: 'ร้านเสริมสวย & สปา',
          description: 'ยืนยันการจองแบบอัตโนมัติและโชว์บริการให้ลูกค้าเห็นมากขึ้นบนโลกออนไลน์',
        },
        {
          key: 'retail',
          title: 'ร้านค้าปลีก',
          description: 'เพิ่มคนเดินหน้าร้านด้วยการมองเห็นที่ดีขึ้นและโพสต์โซเชียลที่สม่ำเสมอ',
        },
      ],
    },
    services: {
      title: 'บริการของเรา',
      subtitle: 'ทุกอย่างที่ธุรกิจต้องใช้เพื่อประสบความสำเร็จออนไลน์ เราดูแลให้ครบ',
      list: [
        {
          title: 'ปรับแต่ง Google Business Profile',
          description: 'เพิ่มอันดับการค้นหาในพื้นที่ ดึงลูกค้าใหม่ด้วยข้อมูลและรีวิวที่น่าเชื่อถือ',
          price: 'เริ่มต้น 2,500 บาท',
        },
        {
          title: 'โพสต์โซเชียลมีเดียอัตโนมัติ',
          description: 'ตั้งเวลาโพสต์รายวันด้วย Make.com ให้คอนเทนต์สม่ำเสมอโดยไม่ต้องเหนื่อย',
          price: 'เริ่มต้น 1,500 บาท',
        },
        {
          title: 'เวิร์กโฟลว์ออโต้เมชัน',
          description: 'เก็บลีด ตอบกลับอัตโนมัติ ฟอร์มติดต่อ และแจ้งเตือนลูกค้าในที่เดียว',
          price: 'เริ่มต้น 3,000 บาท',
        },
        {
          title: 'อัปเดตเว็บไซต์ & เมนู',
          description: 'ปรับคอนเทนต์และ SEO ให้เว็บไซต์และเมนูออนไลน์สดใหม่เสมอ',
          price: 'เริ่มต้น 2,000 บาท',
        },
      ],
      workflowTitle: 'ตัวอย่างเวิร์กโฟลว์ที่พิสูจน์แล้ว',
      workflowShots: ['สกรีนช็อต 1', 'สกรีนช็อต 2', 'สกรีนช็อต 3'],
    },
    workflow: {
      title: 'ออโต้เมชันทำงานอย่างไร',
      subtitle: 'เห็นภาพขั้นตอนการเก็บลีดและอัปเดตเจ้าของกิจการแบบเรียลไทม์',
      steps: [
        {
          label: 'ลูกค้าทักหา',
          description: 'ผ่าน Facebook หรือเว็บไซต์',
        },
        {
          label: 'Make.com ทำงาน',
          description: 'ทริกเกอร์ทันที',
        },
        {
          label: 'ตอบกลับอัตโนมัติ',
          description: 'ส่งข้อความถึงลูกค้า',
        },
        {
          label: 'แจ้งเจ้าของร้าน',
          description: 'อัปเดตในสเปรดชีต',
        },
      ],
      diagramTitle: 'พื้นที่แสดงไดอะแกรมเวิร์กโฟลว์',
      diagramCaption: 'ภาพรวมการไหลของออโต้เมชัน',
    },
    beforeAfter: {
      title: 'ผลลัพธ์จริง',
      subtitle: 'ชมการเปลี่ยนแปลงที่เราสร้างให้กับธุรกิจไทย',
      beforeLabel: 'ก่อนปรับ',
      afterLabel: 'หลังปรับ',
      beforePlaceholder: 'ภาพก่อนปรับ',
      afterPlaceholder: 'ภาพหลังปรับ',
      examples: [
        {
          title: 'Google Business Profile',
          before: 'มีข้อมูลพื้นฐาน ภาพน้อย',
          after: 'ปรับเต็มรูปแบบ ติดอันดับ พร้อมรีวิวลูกค้า',
        },
        {
          title: 'โซเชียลมีเดีย',
          before: 'โพสต์ไม่สม่ำเสมอ',
          after: 'โพสต์รายวันแบบอัตโนมัติ ยอดมีส่วนร่วมเพิ่ม',
        },
        {
          title: 'เว็บไซต์',
          before: 'คอนเทนต์เก่า SEO ต่ำ',
          after: 'คอนเทนต์ใหม่ อันดับดี คนเข้าเพิ่ม',
        },
      ],
    },
    pricing: {
      title: 'แพ็กเกจรายเดือน',
      subtitle: 'เลือกแพ็กเกจที่เหมาะกับการเติบโตของคุณ',
      mostPopularLabel: 'ยอดนิยม',
      perMonth: '/ เดือน',
      choose: thChoose,
      plans: [
        {
          name: 'Starter',
          price: '3,500',
          description: 'เริ่มต้นทำตลาดออนไลน์',
          whoThisIsFor: 'ธุรกิจใหม่ที่กำลังสร้างตัวตนออนไลน์',
          features: [
            'ปรับแต่ง Google Business Profile',
            'ดูแลโพสต์โซเชียล 4 ครั้ง/สัปดาห์',
            'ซัพพอร์ตอีเมลพื้นฐาน',
            'รายงานผลทุกเดือน',
          ],
        },
        {
          name: 'Growth',
          price: '6,500',
          description: 'เหมาะกับธุรกิจที่กำลังโต',
          whoThisIsFor: 'ธุรกิจที่พร้อมขยายตัว',
          features: [
            'ทุกอย่างใน Starter',
            'โพสต์โซเชียลทุกวัน',
            'ตั้งค่าเวิร์กโฟลว์ออโต้เมชัน',
            'ซัพพอร์ตอีเมลด่วน',
            'ฟอร์มเก็บลีด',
            'เช็กอินทุก 2 สัปดาห์',
          ],
          highlighted: true,
        },
        {
          name: 'Royal Boost',
          price: '12,000',
          description: 'ยกระดับดิจิทัลครบวงจร',
          whoThisIsFor: 'ธุรกิจที่ต้องการความเป็นเลิศด้านดิจิทัลแบบครบวงจร',
          features: [
            'ทุกอย่างใน Growth',
            'อัปเดตและดูแลเว็บไซต์',
            'ออโต้เมชันขั้นสูง',
            'ซัพพอร์ตทางโทรศัพท์',
            'เวิร์กช็อปกลยุทธ์รายเดือน',
            'เชื่อมต่อระบบเฉพาะ',
            'ผู้จัดการโครงการเฉพาะ',
          ],
        },
      ],
    },
    postPricingCta: {
      eyebrow: 'ต้องการความช่วยเหลือในการตัดสินใจ?',
      headline: 'ไม่แน่ใจว่าแพ็กเกจไหนเหมาะกับธุรกิจคุณ?',
      supportingText: 'รับการตรวจสอบออนไลน์ฟรี ไม่มีข้อผูกมัด เราจะบอกคุณว่าคุณต้องการอะไร — และไม่ต้องการอะไร',
      primaryCta: 'รับการตรวจสอบฟรี',
      secondaryLink: 'หรือติดต่อเราโดยตรง',
      trustReassurance: 'ไม่มีการบังคับขาย คำแนะนำที่ซื่อสัตย์',
    },
    testimonials: {
      title: 'เสียงจากลูกค้า',
      subtitle: 'ประสบการณ์จริงจากธุรกิจไทยที่เราได้ช่วยเหลือ',
      entries: [
        {
          name: 'สมชาย',
          role: 'เจ้าของร้านอาหาร',
          text: 'Bangkok Boost ช่วยให้ร้านเรามีการจองเพิ่ม โปรไฟล์ Google ขึ้นโชว์อันดับแรกๆ แล้วครับ!',
          stars: 5,
        },
        {
          name: 'นิรันดร์',
          role: 'เจ้าของซาลอน',
          text: 'ระบบอัตโนมัติช่วยประหยัดเวลา ลูกค้าประทับใจที่ตอบกลับไวมาก',
          stars: 5,
        },
        {
          name: 'พิม',
          role: 'เจ้าของร้านค้าปลีก',
          text: 'ทีมงานเข้าใจธุรกิจไทยจริงๆ อธิบายง่าย ทำงานมืออาชีพ แนะนำเลยค่ะ',
          stars: 5,
        },
      ],
    },
    howItWorks: {
      title: 'ขั้นตอนการทำงาน',
      subtitle: 'จากการคุยครั้งแรกจนเปิดใช้งานจริงใน 4 ขั้นตอน',
      steps: [
        {
          title: 'ปรึกษาฟรี',
          description: 'แค่คุยผ่าน LINE แบบสบายๆ ไม่กดดัน แค่เล่าให้เราฟังเรื่องธุรกิจของคุณ',
        },
        {
          title: 'เตรียมและสร้าง',
          description: 'ทำเว็บไซต์ ปรับ Google Profile และตั้งค่าโซเชียล',
        },
        {
          title: 'ติดตั้งออโต้เมชัน',
          description: 'ตั้งระบบเก็บลีดและแจ้งเตือนอัตโนมัติ',
        },
        {
          title: 'ดูแลรายเดือน',
          description: 'เราอยู่เคียงข้างคุณเสมอ อัปเดต ดูแล และซัพพอร์ตต่อเนื่อง—คุณไม่ต้องทำคนเดียว',
        },
      ],
    },
    faq: {
      title: 'คำถามที่พบบ่อย',
      subtitle: 'สงสัยเรื่องไหน เรารวมคำตอบไว้ให้แล้ว',
      items: [
        {
          question: 'ใช้เวลานานแค่ไหน?',
          answer: 'ส่วนใหญ่ใช้เวลา 5-7 วันทำการ หากต้องการเร่งด่วนแจ้งเราได้',
        },
        {
          question: 'ต้องเข้าใจเทคโนโลยีไหม?',
          answer: 'ไม่จำเป็นเลย เราดูแลทุกอย่างให้ พร้อมอธิบายแบบเข้าใจง่าย',
        },
        {
          question: 'ช่วยดูแลเพจแทนได้ไหม?',
          answer: 'ได้ค่ะ อยู่ในแพ็กเกจ Royal Boost เราดูแลตั้งแต่คอนเทนต์ถึงการตอบข้อความ',
        },
        {
          question: 'จ่ายเงินอย่างไร?',
          answer: 'รับโอนผ่านธนาคาร บัตรเครดิต และ Mobile Banking ออกบิลทุกเดือน',
        },
        {
          question: 'เปลี่ยนแพ็กเกจทีหลังได้หรือไม่?',
          answer: 'อัปเกรดหรือลดแพ็กเกจเมื่อไรก็ได้ แค่ทักมาบอกเรา',
        },
        {
          question: 'ถ้ามีปัญหาด้านเทคนิคทำอย่างไร?',
          answer: 'เรามีทีมซัพพอร์ตตามแพ็กเกจ Starter ได้รับอีเมลซัพพอร์ต ส่วน Growth และ Royal Boost ได้คิวด่วน',
        },
      ],
      ctaQuestion: 'ยังมีคำถามอยู่?',
      ctaButton: 'รับการตรวจสอบฟรี',
      trustLine: 'ไม่บีบ ไม่กดดัน คำแนะนำจริงใจสำหรับธุรกิจไทย',
    },
    contact: {
      title: 'พร้อมเริ่มหรือยัง?',
      subtitle: 'จองเวลาปรึกษาฟรีวันนี้',
      cardTitle: 'รับรายงานตรวจสุขภาพดิจิทัลฟรี',
      cardSubtitle: 'บอกเราเกี่ยวกับธุรกิจของคุณ แล้วเราจะให้การประเมินที่เหมาะกับคุณ',
      nameLabel: 'ชื่อ',
      namePlaceholder: 'กรอกชื่อของคุณ',
      phoneLabel: 'เบอร์โทร',
      phonePlaceholder: '+66...',
      businessTypeLabel: 'ประเภทธุรกิจ',
      businessOptions: [
        { value: '', label: 'เลือกประเภทธุรกิจ' },
        { value: 'restaurant', label: 'ร้านอาหาร' },
        { value: 'salon', label: 'ร้านเสริมสวย / สปา' },
        { value: 'retail', label: 'ร้านค้าปลีก' },
        { value: 'other', label: 'อื่นๆ' },
      ],
      challengeLabel: 'ปัญหาหลักที่อยากให้ช่วยคืออะไร?',
      challengePlaceholder: 'เล่าให้เราฟังเกี่ยวกับธุรกิจและสิ่งที่อยากให้ช่วย...',
      preferredContactLabel: 'วิธีติดต่อที่ต้องการ',
      preferredContactOptions: [
        { value: '', label: 'ไม่ระบุ' },
        { value: 'line', label: 'LINE' },
        { value: 'phone', label: 'โทรศัพท์' },
      ],
      submit: 'รับการตรวจสอบฟรี',
      submitLoading: 'กำลังส่ง...',
      trustMicrocopy: 'ไม่บีบ ไม่สแปม รองรับทั้งภาษาไทยและอังกฤษ',
      successTitle: 'ขอบคุณ!',
      successMessage: 'เราได้รับคำขอตรวจสอบฟรีของคุณแล้ว เราจะติดต่อกลับภายใน 24 ชั่วโมง',
      errorMessage: 'เกิดข้อผิดพลาด กรุณาลองอีกครั้งหรือติดต่อเราโดยตรง',
      validationErrors: {
        nameRequired: 'กรุณากรอกชื่อ',
        phoneRequired: 'กรุณากรอกเบอร์โทรศัพท์',
        businessTypeRequired: 'กรุณาเลือกประเภทธุรกิจ',
      },
    },
    footer: {
      tagline: 'โซลูชันดิจิทัลและออโต้เมชันเพื่อธุรกิจไทยขนาดเล็ก',
      servicesTitle: 'บริการ',
      companyTitle: 'ข้อมูลบริษัท',
      services: ['Google Business', 'โซเชียลมีเดีย', 'ออโต้เมชัน', 'ออกแบบเว็บไซต์'],
      company: ['เกี่ยวกับเรา', 'ราคา', 'ขั้นตอนการทำงาน', 'ติดต่อ'],
      contactTitle: 'ติดต่อเรา',
      lineLabel: 'LINE ID',
      phoneLabel: '+66 XX XXX XXXX',
      emailLabel: 'hello@bangkokboost.com',
      copyright: '© 2025 Bangkok Boost Studio สงวนลิขสิทธิ์',
      operatedBy: 'ดูแลโดยทีมพาร์ทเนอร์ชาวไทย',
      policies: {
        privacy: 'นโยบายความเป็นส่วนตัว',
        terms: 'เงื่อนไขการให้บริการ',
      },
    },
  },
}

export type TranslationSchema = typeof translations.en


