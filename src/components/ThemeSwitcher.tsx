import { useState } from 'react';
import { useTheme, Theme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Palette, Check } from 'lucide-react';

const THEMES = [
  {
    id: 'default',
    name: 'Standard',
    color: 'hsl(200 95% 35%)',
    description: 'Klassische Schriftarten, ausgewogene Abstände'
  },
  {
    id: 'dark',
    name: 'Dunkel',
    color: 'hsl(215 25% 15%)',
    description: 'Optimierte Lesbarkeit, großzügige Abstände'
  },
  {
    id: 'warm',
    name: 'Warm',
    color: 'hsl(25 90% 45%)',
    description: 'Organische Schrift, weiche Rundungen, große Abstände'
  },
  {
    id: 'professional',
    name: 'Professionell',
    color: 'hsl(220 50% 30%)',
    description: 'Business-Schrift, kompaktes Layout, scharfe Kanten'
  },
  {
    id: 'modern',
    name: 'Modern',
    color: 'hsl(280 60% 50%)',
    description: 'Fette Schrift, geometrische Formen, breites Layout'
  },
] as const;

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-card border border-border rounded-lg shadow-lg p-3 mb-2 min-w-[280px] max-w-[320px]">
          <h3 className="text-sm font-semibold mb-3 text-foreground">Design wählen</h3>
          <div className="space-y-2">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id as Theme);
                  setIsOpen(false);
                }}
                className="w-full flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors text-left group"
              >
                <div
                  className="w-5 h-5 rounded-full border-2 border-border flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: t.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-medium text-foreground">{t.name}</span>
                    {theme === t.id && (
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Ändert Farben, Typografie und Layout für Präsentationszwecke
            </p>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all"
        variant="default"
        title="Design wechseln"
      >
        <Palette className="w-6 h-6" />
      </Button>
    </div>
  );
};
