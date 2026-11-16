import { ArrowLeftRight, BrainCircuit, Sparkles } from 'lucide-react';

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <div className="eyebrow eyebrow-inline">
        <Sparkles size={14} />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
