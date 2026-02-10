import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Robust Back Logic:
    // 1. Try browser history if available (preserves form state in previous page)
    // 2. Fallback to default check-in route if opened directly or in new tab
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 pt-24 flex flex-col items-center justify-center font-sans relative">
      {/* Sticky Header Back Button */}
      <div className="fixed top-0 left-0 w-full p-6 z-50 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none">
        <button 
          onClick={handleBack}
          className="pointer-events-auto flex items-center gap-2 text-[var(--primary)] hover:text-white transition-colors uppercase tracking-widest text-xs font-bold group"
        >
          <div className="p-2 rounded-full border border-[var(--primary)]/30 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-black transition-all">
            <ArrowLeft size={16} />
          </div>
          <span>Voltar</span>
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-2xl font-bold text-[var(--primary)] mb-6 tracking-widest uppercase text-center">
          Termos e Condições
        </h1>
        
        <div className="space-y-6 text-white/80 leading-relaxed text-sm text-justify">
          <p>
            Bem-vindo ao sistema de Check-in Digital. Ao utilizar esta plataforma, você concorda com as seguintes condições de uso e privacidade.
          </p>

          <div className="p-6 bg-black/50 border border-[var(--primary)]/30 rounded-lg">
            <h2 className="text-[var(--primary)] font-bold mb-2 uppercase tracking-wider text-xs">
              Cláusula de Não-Armazenamento
            </h2>
            <p className="font-medium text-white">
              "A desenvolvedora fornece apenas a infraestrutura de interface (Front-End). O usuário reconhece que nenhum dado inserido é salvo em banco de dados da provedora, ocorrendo a transmissão instantânea e criptografada (Ponta-a-Ponta via WhatsApp) para o dispositivo do hotel."
            </p>
          </div>

          <p>
            <strong>1. Objetivo:</strong> Esta ferramenta visa agilizar o processo de check-in, formatando os dados inseridos em uma mensagem padronizada para envio via WhatsApp diretamente ao estabelecimento.
          </p>

          <p>
            <strong>2. Privacidade (LGPD):</strong> Em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), reforçamos que não realizamos a coleta, armazenamento ou tratamento de seus dados pessoais em nossos servidores. A responsabilidade pela guarda e proteção das informações, após o envio, é exclusiva do estabelecimento hoteleiro destinatário.
          </p>

          <p>
            <strong>3. Responsabilidade:</strong> O usuário é responsável pela veracidade das informações fornecidas. A desenvolvedora não se responsabiliza por erros no preenchimento ou pelo uso indevido dos dados por terceiros após a transmissão.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsScreen;
