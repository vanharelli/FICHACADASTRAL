import React from 'react';

interface LegalShieldProps {
    isChecked: boolean;
    onChange: (checked: boolean) => void;
    themeColor?: 'emerald' | 'amethyst' | 'gold';
}

export const LegalShield: React.FC<LegalShieldProps> = ({ isChecked, onChange, themeColor = 'gold' }) => {
    const themeStyles = {
        emerald: {
            check: 'checked:bg-emerald-500 checked:border-emerald-500 focus:ring-emerald-500/30',
            text: 'text-emerald-500',
            hover: 'hover:text-emerald-400'
        },
        amethyst: {
            check: 'checked:bg-violet-500 checked:border-violet-500 focus:ring-violet-500/30',
            text: 'text-violet-500',
            hover: 'hover:text-violet-400'
        },
        gold: {
            check: 'checked:bg-gold-500 checked:border-gold-500 focus:ring-gold-500/30',
            text: 'text-gold-500',
            hover: 'hover:text-gold-400'
        }
    };

    const theme = themeStyles[themeColor];

    return (
        <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/10 mt-8 transition-colors hover:bg-white/[0.07]">
            <div className="relative flex items-center">
                <input
                    type="checkbox"
                    id="legal-check"
                    checked={isChecked}
                    onChange={(e) => onChange(e.target.checked)}
                    className={`peer w-5 h-5 appearance-none rounded border border-white/30 bg-black/20 cursor-pointer transition-all ${theme.check}`}
                />
                <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <label htmlFor="legal-check" className="text-xs text-gray-400 cursor-pointer leading-relaxed select-none">
                Concordo que esta interface é uma ferramenta facilitadora de envio. Reconheço que a 
                <span className={`font-bold ${theme.text} mx-1`}> Marketelli </span> 
                não possui vínculo governamental e não armazena meus dados.
            </label>
        </div>
    );
};

export const LegalFooter: React.FC<{ themeColor?: 'emerald' | 'amethyst' | 'gold' }> = ({ themeColor = 'gold' }) => {
    const themeStyles = {
        emerald: 'text-emerald-500/80 hover:text-emerald-400',
        amethyst: 'text-violet-500/80 hover:text-violet-400',
        gold: 'text-gold-500/80 hover:text-gold-400'
    };
    const linkClass = themeStyles[themeColor];

    return (
        <div className="mt-12 text-center opacity-60 hover:opacity-100 transition-opacity duration-300 relative z-10">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                Tecnologia Stateless (Sem Armazenamento)
            </p>
            <p className="text-[10px] text-gray-600 mt-1">
                A responsabilidade pelo envio à FNRH (Lei 11.771/2008) é exclusiva do Estabelecimento.
            </p>
            <a 
                href="mailto:atendimento@marketelli.com" 
                className={`text-[10px] mt-2 block font-medium transition-colors ${linkClass}`}
            >
                Suporte: atendimento@marketelli.com
            </a>
        </div>
    );
};
