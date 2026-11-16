import { ArrowLeftRight, Zap } from 'lucide-react';

function TranslatorPanel({
  languages,
  fromLanguage,
  toLanguage,
  setFromLanguage,
  setToLanguage,
  inputText,
  setInputText,
  translatedText,
  handleLanguageSwap,
  presetPrompts,
}) {
  return (
    <div className="translator-card">
      <div className="translator-toolbar">
        <div className="lang-select-wrap">
          <label htmlFor="from-language">From</label>
          <select
            id="from-language"
            value={fromLanguage}
            onChange={(event) => setFromLanguage(event.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <button type="button" className="swap-button" onClick={handleLanguageSwap} aria-label="Swap languages">
          <ArrowLeftRight size={18} />
        </button>

        <div className="lang-select-wrap">
          <label htmlFor="to-language">To</label>
          <select
            id="to-language"
            value={toLanguage}
            onChange={(event) => setToLanguage(event.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="quick-prompts">
        {presetPrompts.map((prompt) => (
          <button key={prompt} type="button" onClick={() => setInputText(prompt)}>
            {prompt}
          </button>
        ))}
      </div>

      <div className="translator-grid">
        <div className="translation-box">
          <div className="box-header">
            <span>{languages.find((lang) => lang.value === fromLanguage)?.label}</span>
            <Zap size={16} />
          </div>
          <textarea
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            aria-label="Source text"
          />
        </div>

        <div className="translation-box output-box">
          <div className="box-header">
            <span>{languages.find((lang) => lang.value === toLanguage)?.label}</span>
            <BrainCircuit size={16} />
          </div>
          <textarea value={translatedText} readOnly aria-label="Translated text" />
        </div>
      </div>
    </div>
  );
}

export default TranslatorPanel;
