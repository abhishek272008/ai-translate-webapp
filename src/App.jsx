import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Languages,
  MessageSquareText,
  Mic,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';
import SectionTitle from './components/SectionTitle';
import TranslatorPanel from './components/TranslatorPanel';
import { languages, translationSamples } from './data/translationData';

const featurePills = [
  '100+ Language Possibilities',
  'AI-Powered Translation',
  'Smart Context Understanding',
];

const highlights = [
  {
    icon: BrainCircuit,
    title: 'What is AI translation?',
    description:
      'AI translation uses neural networks to understand language patterns and generate meaningful translations in real time.',
  },
  {
    icon: Workflow,
    title: 'How does it work?',
    description:
      'Models analyze context, syntax, grammar, and tone before producing a polished translation for the target language.',
  },
  {
    icon: Sparkles,
    title: 'Why is it important?',
    description:
      'It breaks down communication barriers in education, business, healthcare, and global collaboration.',
  },
  {
    icon: Globe2,
    title: 'Real-world applications',
    description:
      'From travel and customer support to multilingual classrooms and content localization, AI translation improves reach and understanding.',
  },
];

const technologyCards = [
  {
    title: 'Google Translate & Similar Systems',
    description:
      'Leading systems rely on neural machine translation and large multilingual datasets to translate text, speech, and document content efficiently.',
  },
  {
    title: 'NLP Foundations',
    description:
      'Natural language processing helps machines understand grammar, sentiment, and meaning, enabling more accurate adaptation across languages.',
  },
  {
    title: 'Machine Translation',
    description:
      'Large-scale translation pipelines use encoder-decoder architectures to decode meaning into fluent, context-aware output.',
  },
  {
    title: 'Language Models',
    description:
      'Modern language models learn patterns across millions of text examples and generalize to new translation tasks with higher quality.',
  },
];

const stats = [
  { value: '100+', label: 'Languages' },
  { value: '90%', label: 'Context Match' },
  { value: '24/7', label: 'Global Access' },
  { value: '3x', label: 'Faster Workflow' },
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Google Translate', href: '#google-translate' },
  { label: 'NLP', href: '#nlp' },
  { label: 'Machine Translation', href: '#machine-translation' },
  { label: 'Language Models', href: '#language-models' },
  { label: 'Contact', href: '#contact' },
];

const presetPrompts = [
  'Hello, how are you today?',
  'I would like to learn a new language.',
  'Your AI translation is impressive.',
  'Please explain this in simple terms.',
];

function App() {
  const defaultFrom = 'en';
  const defaultTo = 'hi';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fromLanguage, setFromLanguage] = useState(defaultFrom);
  const [toLanguage, setToLanguage] = useState(defaultTo);
  const [inputText, setInputText] = useState('Hello, how are you today?');

  const translatedText = useMemo(() => {
    const key = `${fromLanguage}-${toLanguage}`;
    const valueMap = translationSamples[key] || {};
    return valueMap[inputText] || 'नमस्कार, आप आज कैसे हैं?';
  }, [fromLanguage, toLanguage, inputText]);

  const handleLanguageSwap = () => {
    const currentFrom = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(currentFrom);
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <nav className="navbar container">
          <a href="#home" className="brand" aria-label="AI Translate home">
            <span className="brand-mark">AI</span>
            <span>Translate</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#translator" className="nav-button">
              Try Translator
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">AI-Powered Multilingual Communication</div>
            <h1>Break Language Barriers with Artificial Intelligence</h1>
            <p>
              Discover how AI transforms communication through intelligent language translation,
              natural language processing, machine learning, and advanced language models.
            </p>
            <div className="hero-actions">
              <a href="#about" className="primary-button">
                Explore Technology
                <ArrowRight size={18} />
              </a>
              <a href="#translator" className="secondary-button">
                Try Translation
              </a>
            </div>

            <div className="feature-pills">
              {featurePills.map((item) => (
                <span key={item} className="feature-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="AI translation system illustration">
            <div className="visual-panel">
              <div className="bubble bubble-en">English</div>
              <div className="bubble bubble-hi">Hindi</div>
              <div className="bubble bubble-kn">Kannada</div>

              <div className="neural-core">
                <div className="core-ring ring-one" />
                <div className="core-ring ring-two" />
                <div className="core-ring ring-three" />
                <div className="core-icon">
                  <Languages size={24} />
                </div>
              </div>

              <div className="network network-1" />
              <div className="network network-2" />
              <div className="network network-3" />
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <SectionTitle
            eyebrow="About AI-based language translation"
            title="What is AI-Based Language Translation?"
            description="AI-Based Language Translation is the process of using Artificial Intelligence to automatically convert text or speech from one language into another while maintaining meaning, context, and grammatical accuracy."
          />

          <div className="card-grid four-columns">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article className="info-card" key={title}>
                <div className="icon-wrap">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="google-translate" className="section alt-bg">
          <div className="container">
            <SectionTitle
              eyebrow="Google Translate & Similar Translation Systems"
              title="Google Translate & Similar Translation Platforms"
              description="Modern translation systems combine statistical learning, neural networks, and multilingual language understanding to provide faster, more natural results across different languages."
            />

            <div className="card-grid four-columns">
              {technologyCards.map((card) => (
                <article className="feature-card" key={card.title}>
                  <div className="feature-number">0{technologyCards.indexOf(card) + 1}</div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nlp" className="section container">
          <SectionTitle
            eyebrow="Natural Language Processing"
            title="NLP powers context-aware translations"
            description="Natural language processing helps AI understand grammar, intent, and semantics so translations preserve tone and meaning rather than simply converting words literally."
          />

          <div className="stacked-showcase">
            <div className="showcase-card">
              <div className="mini-list">
                <span><CheckCircle2 size={16} /> Semantic analysis</span>
                <span><CheckCircle2 size={16} /> Grammar alignment</span>
                <span><CheckCircle2 size={16} /> Tone preservation</span>
              </div>
            </div>
            <div className="showcase-card accent-card">
              <MessageSquareText size={28} />
              <h3>Context matters</h3>
              <p>
                High-quality translation understands idioms, cultural nuance, and user intent, not just literal word substitutions.
              </p>
            </div>
          </div>
        </section>

        <section id="machine-translation" className="section alt-bg">
          <div className="container">
            <SectionTitle
              eyebrow="Machine Translation"
              title="From raw text to natural output"
              description="Machine translation models encode the source meaning and decode it into a fluent target language using patterns learned from large-scale multilingual corpora."
            />

            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-box" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="language-models" className="section container">
          <SectionTitle
            eyebrow="Language Models"
            title="AI language models bring accuracy and fluency"
            description="Large language models analyze text patterns, improve context retention, and support multilingual interactions with increasingly human-like output."
          />

          <div className="process-grid">
            <div className="process-step">
              <span>01</span>
              <h3>Input understanding</h3>
              <p>The system interprets the source text, intent, and context before generating a translation.</p>
            </div>
            <div className="process-step">
              <span>02</span>
              <h3>Translation generation</h3>
              <p>It creates a candidate translation while considering tone, grammar, and sentence structure.</p>
            </div>
            <div className="process-step">
              <span>03</span>
              <h3>Output refinement</h3>
              <p>Language quality checks improve readability, clarity, and naturalness in the target language.</p>
            </div>
          </div>
        </section>

        <section id="translator" className="section container translator-wrap">
          <SectionTitle
            eyebrow="Live translator demo"
            title="Try a local AI translation demo"
            description="This frontend-only translator uses predefined sample translations to simulate how multilingual communication can work with intelligent language models."
          />

          <TranslatorPanel
            languages={languages}
            fromLanguage={fromLanguage}
            toLanguage={toLanguage}
            setFromLanguage={setFromLanguage}
            setToLanguage={setToLanguage}
            inputText={inputText}
            setInputText={setInputText}
            translatedText={translatedText}
            handleLanguageSwap={handleLanguageSwap}
            presetPrompts={presetPrompts}
          />
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">AI</span>
              <span>Translate</span>
            </div>
            <p>Enabling human connection beyond language barriers.</p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#google-translate">Google Translate</a>
            <a href="#language-models">Language Models</a>
            <a href="#translator">Translator</a>
          </div>

          <div className="contact-cta">
            <div className="contact-pill">
              <Mic size={16} />
              multilingual support
            </div>
            <a href="mailto:hello@aitranslate.dev" className="footer-button">
              Contact us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
