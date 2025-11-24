import { useState } from 'react';
import { useTheme, Theme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Palette, Check } from 'lucide-react';

const THEMES = [
  { id: 'default', name: 'Standard', color: 'hsl(200 95% 35%)' },
  { id: 'dark', name: 'Dunkel', color: 'hsl(215 25% 15%)' },
  { id: 'warm', name: 'Warm', color: 'hsl(25 90% 45%)' },
  { id: 'professional', name: 'Professionell', color: 'hsl(220 50% 30%)' },
  { id: 'modern', name: 'Modern', color: 'hsl(280 60% 50%)' },
] as const;

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-card border border-border rounded-lg shadow-lg p-3 mb-2 min-w-[200px]">
          <h3 className="text-sm font-semibold mb-3 text-foreground">Design wählen</h3>
          <div className="space-y-2">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id as Theme);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-secondary transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full border-2 border-border"
                    style={{ backgroundColor: t.color }}
                  />
                  <span className="text-sm font-medium text-foreground">{t.name}</span>
                </div>
                {theme === t.id && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </button>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Theme-Auswahl für Präsentationszwecke
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
