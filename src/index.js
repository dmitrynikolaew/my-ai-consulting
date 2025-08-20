import React, { useState } from "react";

// Single-file landing page for an AI implementation agency
// Tech: React + TailwindCSS (no external UI libs required)

export default function AIAgencyLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const features = [
    {
      title: "AI-чат-боты и помощники",
      desc: "Автоматизируем ответы, квалификацию лидов и поддержку 24/7 в WhatsApp/Telegram/сайте.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 8h10M7 12h6M21 12c0 5-4 9-9 9a8.9 8.9 0 01-4-.95L3 21l.95-5A9 9 0 1112 3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Аналитика и прогнозы",
      desc: "Внедряем BI с предиктивной аналитикой: продажи, отток, ABC/XYZ, спрос.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3v18h18M7 15l3-3 3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Автоматизация процессов",
      desc: "Интеграции с CRM/ERP, RPA, Zapier/Make. Снижаем ручной труд на 20–40%.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Генеративный контент",
      desc: "Email/сценарии/описания товаров/обучающие материалы с контролем качества.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 6v12M6 12h12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const steps = [
    { n: 1, title: "Аудит и дорожная карта", desc: "1–2 недели. Интервью, метрики, выбор быстрых побед (quick wins)." },
    { n: 2, title: "Пилот (PoC)", desc: "2–4 недели. Быстрый кейс: чат-бот, авто-отчетность или интеграция." },
    { n: 3, title: "Внедрение", desc: "4–8 недель. Интеграция с CRM/ERP, обучение команды, документация." },
    { n: 4, title: "Поддержка и рост", desc: "SLA, A/B тесты, развитие модели, измерение ROI ежемесячно." }
  ];

  const plans = [
    {
      name: "Старт",
      price: "$990",
      subtitle: "для малого бизнеса и тестов гипотез",
      items: ["Аудит процессов (3 встречи)", "Дорожная карта на 3 месяца", "Пилотный бот/отчет", "Обучение 2х сотрудников"],
      cta: "Заказать аудит"
    },
    {
      name: "Рост",
      popular: true,
      price: "$2,900",
      subtitle: "для системного внедрения",
      items: ["Пилот + интеграция с CRM", "BI-дашборд и прогноз", "Автоматизация 2–3 процессов", "SLA 5/2 и обучение"] ,
      cta: "Запросить внедрение"
    },
    {
      name: "Энтерпрайз",
      price: "Custom",
      subtitle: "индивидуальная архитектура и безопасность",
      items: ["Индивидуальная архитектура", "MLOps/он-прем", "Интеграции с ИБ-комплаенсом", "Расширенная поддержка 24/7"],
      cta: "Обсудить проект"
    }
  ];

  const faqs = [
    {
      q: "Нужно ли писать код?",
      a: "Для большинства решений используем готовые сервисы (SaaS/API) и no-code/low-code. Код — только там, где это окупается."
    },
    {
      q: "Как вы считаете ROI?",
      a: "Согласуем метрики до старта: экономия времени, снижение ошибок, рост конверсии. Считаем эффект до/после и строим отчет в BI."
    },
    {
      q: "С какими системами интегрируетесь?",
      a: "CRM (Bitrix24, amoCRM, HubSpot), ERP (1C/УНФ/УТ, SAP), мессенджеры, почта, телефония, CMS, Google/Office365, платежи."
    },
    {
      q: "Как обеспечиваете безопасность данных?",
      a: "Шифрование в транзите/покое, минимизация PII, роль- и политик-ориентированный доступ, журналы действий, подписка NDA."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      {/* ...весь JSX с хедерами, секциями и футером... */}
      {/* Остальной JSX полностью можно вставить без изменений */}
    </div>
  );
}
