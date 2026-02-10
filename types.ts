export interface HotelConfig {
  id: string;
  name: string;
  subtitle: string;
  whatsapp: string;
  logoUrl?: string; // Optional for now
  themeColor?: string; // Deprecated, use primaryColor
  primaryColor?: string; // e.g., #D4AF37
  enableMultiLanguage?: boolean;
  enableGarage?: boolean;
  footerText?: string;
  licenseKey?: string;
  createdAt?: string;
}

export const DEFAULT_HOTEL: HotelConfig = {
  id: 'alpha-plaza',
  name: 'Ficha Cadastral',
  subtitle: 'Alpha Plaza Hotel',
  whatsapp: '5561982062229',
  themeColor: '#10B981', // Emerald/Green (Pillar 1 Theme)
  primaryColor: '#10B981', // Emerald/Green (Pillar 1 Theme)
  enableMultiLanguage: true,
  enableGarage: true,
  footerText: '© 2026 Alpha Plaza Hotel - Todos os direitos reservados'
};
