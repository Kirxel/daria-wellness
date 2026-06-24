import { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Leaf,
  Phone,
  Salad,
  Send,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";
import { initAnalytics, reachGoal } from "./analytics";

const telegramHandle = "@da_badumtss";
const telegramLink = "https://t.me/da_badumtss";
const maxLink = "https://web.max.ru/97179858";
const phoneNumber = "+7 996 509-18-84";
const phoneLink = `tel:${phoneNumber.replace(/\D/g, "")}`;

const services = [
  {
    icon: Waves,
    title: "Массаж тела",
    text: "Работа с напряжением, усталостью, мышечными зажимами и ощущением тяжести в теле.",
    meta: "60-120 минут",
  },
  {
    icon: HeartPulse,
    title: "Восстановление",
    text: "Бережные сеансы для спины, шеи, плеч и общего расслабления после нагрузки.",
    meta: "индивидуально",
  },
  {
    icon: Salad,
    title: "Нутрициология",
    text: "Разбор питания и привычек без жестких запретов, с понятными шагами на каждый день.",
    meta: "очно / онлайн",
  },
];

const principles = [
  "Перед началом Дарья уточняет запрос, самочувствие и ограничения",
  "Интенсивность подбирается по ощущениям, без лишнего давления",
  "После встречи остаются простые рекомендации по восстановлению",
  "Можно сочетать массаж и нутрициологический подход",
];

const formats = [
  {
    title: "Первичная встреча",
    price: "от 2 000 ₽",
    text: "Знакомство, разбор запроса и мягкая работа с основной зоной напряжения.",
  },
  {
    title: "Полный массаж",
    price: "от 4 000 ₽",
    text: "Комплексная работа с телом для расслабления, легкости и восстановления.",
  },
  {
    title: "Тело + питание",
    price: "от 5 000 ₽",
    text: "Массаж и нутрициологическая консультация для более комплексной поддержки.",
  },
];

const faqs = [
  {
    question: "Можно ли обратиться без точного запроса?",
    answer: "Да. Достаточно описать, что беспокоит: усталость, спина, шея, питание, восстановление или общее состояние.",
  },
  {
    question: "Нужно ли сразу брать курс?",
    answer: "Нет. Можно начать с одной встречи и уже после нее понять, какой формат подходит дальше.",
  },
  {
    question: "Как проходит консультация по питанию?",
    answer: "Дарья разбирает текущий рацион, режим, жалобы и цель, а затем предлагает реалистичные рекомендации без жестких ограничений.",
  },
];

export function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar" aria-label="Основная навигация">
        <a className="brand" href="#top" aria-label="Андроненкова Дарья">
          <span className="brand-mark">Д</span>
          <span>
            <strong>Дарья Андроненкова</strong>
            <small>массажист · нутрициолог</small>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#services">Услуги</a>
          <a href="#approach">Подход</a>
          <a href="#formats">Форматы</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a
          className="nav-action"
          href={telegramLink}
          target="_blank"
          rel="noreferrer"
          onClick={() => reachGoal("contact_telegram", { place: "header" })}
        >
          <Send size={18} />
          Telegram
        </a>
      </header>

      <main id="top">
        <section className="hero section-band">
          <div className="hero-copy reveal">
            <span className="eyebrow">
              <Sparkles size={16} />
              бережная работа с телом
            </span>
            <h1>
              <span>Андроненкова</span>
              <span>Дарья</span>
            </h1>
            <p>
              Массажист и нутрициолог. Помогает вернуть телу легкость, снизить напряжение и выстроить спокойную заботу о себе.
            </p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => reachGoal("contact_telegram", { place: "hero" })}
              >
                <Send size={18} />
                {telegramHandle}
              </a>
              <a className="secondary-button" href={phoneLink} onClick={() => reachGoal("contact_phone", { place: "hero" })}>
                <Phone size={18} />
                {phoneNumber}
              </a>
            </div>
            <div className="trust-row" aria-label="Ключевые преимущества">
              <span>
                <ShieldCheck size={16} />
                индивидуально
              </span>
              <span>
                <Clock3 size={16} />
                60-120 минут
              </span>
              <span>
                <Leaf size={16} />
                без жестких запретов
              </span>
            </div>
          </div>

          <div className="portrait-panel reveal">
            <picture>
              <source srcSet="/daria-portrait-mobile.png" media="(max-width: 640px)" />
              <img src="/daria-portrait.png" alt="Портрет Дарьи Андроненковой" />
            </picture>
            <div className="portrait-caption">
              <strong>Массаж · восстановление · питание</strong>
              <span>мягкий подход к телу и привычкам</span>
            </div>
          </div>
        </section>

        <section className="content-section" id="services">
          <div className="section-heading reveal">
            <span className="eyebrow">услуги</span>
            <h2>Что помогает телу чувствовать себя легче</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card reveal" key={service.title}>
                <service.icon className="card-icon" size={28} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>{service.meta}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="approach section-band" id="approach">
          <div className="approach-copy reveal">
            <span className="eyebrow">подход</span>
            <h2>Не продавить, а услышать</h2>
            <p>
              В работе важны спокойный темп, контакт с ощущениями и понятные рекомендации. Дарья смотрит на состояние шире:
              нагрузка, восстановление, питание, сон и ежедневные привычки.
            </p>
          </div>
          <div className="principles-list reveal">
            {principles.map((item) => (
              <div className="principle-item" key={item}>
                <CheckCircle2 size={21} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="formats">
          <div className="section-heading reveal">
            <span className="eyebrow">форматы</span>
            <h2>Можно начать с одной встречи</h2>
          </div>
          <div className="format-grid">
            {formats.map((format) => (
              <article className="format-card reveal" key={format.title}>
                <h3>{format.title}</h3>
                <strong>{format.price}</strong>
                <p>{format.text}</p>
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => reachGoal("format_details", { format: format.title })}
                >
                  Обсудить формат
                  <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section faq-section">
          <div className="section-heading reveal">
            <span className="eyebrow">вопросы</span>
            <h2>Перед первым обращением</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item reveal" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section section-band" id="contacts">
          <div className="contact-copy reveal">
            <span className="eyebrow">контакты</span>
            <h2>Связаться с Дарьей</h2>
            <p>Напишите в удобный мессенджер или позвоните. В сообщении можно коротко описать запрос и желаемый формат.</p>
          </div>
          <div className="contact-actions reveal">
            <a
              className="contact-card telegram-card"
              href={telegramLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => reachGoal("contact_telegram", { place: "contacts" })}
            >
              <Send size={22} />
              <span>
                <small>Telegram</small>
                <strong>{telegramHandle}</strong>
              </span>
            </a>
            <a className="contact-card phone-card" href={phoneLink} onClick={() => reachGoal("contact_phone", { place: "contacts" })}>
              <Phone size={22} />
              <span>
                <small>Телефон</small>
                <strong>{phoneNumber}</strong>
              </span>
            </a>
            <a
              className="contact-card max-card"
              href={maxLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => reachGoal("contact_max", { place: "contacts" })}
            >
              <Send size={22} />
              <span>
                <small>MAX</small>
                <strong>Андроненкова Дарья</strong>
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Андроненкова Дарья</span>
        <a
          href={telegramLink}
          target="_blank"
          rel="noreferrer"
          onClick={() => reachGoal("contact_telegram", { place: "footer" })}
        >
          Telegram {telegramHandle}
        </a>
      </footer>
    </div>
  );
}
