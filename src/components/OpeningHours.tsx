import { Clock, CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMemo } from "react";

const openingHours = [
  { day: "Montag", dayIndex: 1, morning: "08:00–12:00", afternoon: "16:00–19:00" },
  { day: "Dienstag", dayIndex: 2, morning: "08:00–12:00", afternoon: null },
  { day: "Mittwoch", dayIndex: 3, morning: "08:00–12:00", afternoon: null },
  { day: "Donnerstag", dayIndex: 4, morning: null, afternoon: "15:00–18:00" },
  { day: "Freitag", dayIndex: 5, morning: "08:00–12:00", afternoon: null },
  { day: "Samstag", dayIndex: 6, morning: null, afternoon: null, closed: true },
  { day: "Sonntag", dayIndex: 0, morning: null, afternoon: null, closed: true },
];

const parseTime = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

const isCurrentlyOpen = (morning: string | null, afternoon: string | null, closed?: boolean) => {
  if (closed) return false;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const checkTimeRange = (range: string) => {
    const [start, end] = range.split('–');
    const startMinutes = parseTime(start);
    const endMinutes = parseTime(end);
    return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
  };

  if (morning && checkTimeRange(morning)) return true;
  if (afternoon && checkTimeRange(afternoon)) return true;

  return false;
};

const OpeningHours = () => {
  const { currentDayIndex, isOpen, todayHours } = useMemo(() => {
    const now = new Date();
    const dayIndex = now.getDay();
    const today = openingHours.find(h => h.dayIndex === dayIndex);

    return {
      currentDayIndex: dayIndex,
      isOpen: today ? isCurrentlyOpen(today.morning, today.afternoon, today.closed) : false,
      todayHours: today
    };
  }, []);
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-slide-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4 px-4">
              Öffnungszeiten
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Wir sind für Sie da
            </p>
          </div>

          {/* Status Banner */}
          <div className={`mb-6 sm:mb-8 p-4 rounded-lg border-2 ${
            isOpen
              ? 'bg-green-50 dark:bg-green-950/20 border-green-500/30'
              : 'bg-orange-50 dark:bg-orange-950/20 border-orange-500/30'
          }`}>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {isOpen ? (
                <>
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-500 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-semibold text-green-700 dark:text-green-400">
                    Wir haben geöffnet
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-500 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-semibold text-orange-700 dark:text-orange-400">
                    Aktuell geschlossen
                  </p>
                </>
              )}
            </div>
          </div>
          
          <Card className="bg-card shadow-lg border-0 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-semibold text-foreground text-base sm:text-lg">Wochentag</TableHead>
                  <TableHead className="font-semibold text-foreground text-base sm:text-lg text-center">Vormittags</TableHead>
                  <TableHead className="font-semibold text-foreground text-base sm:text-lg text-center">Nachmittags</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {openingHours.map((item, index) => {
                  const isCurrentDay = item.dayIndex === currentDayIndex;
                  const isClosed = item.closed || (!item.morning && !item.afternoon);

                  return (
                    <TableRow
                      key={item.day}
                      className={`transition-all ${
                        isCurrentDay
                          ? 'bg-primary/5 border-l-4 border-l-primary'
                          : 'hover:bg-secondary/50'
                      } ${isClosed ? 'opacity-60' : ''}`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <TableCell className="font-semibold text-base sm:text-lg">
                        <div className="flex items-center gap-2">
                          <span className={isCurrentDay ? 'text-primary' : 'text-foreground'}>
                            {item.day}
                          </span>
                          {isCurrentDay && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                              Heute
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-center text-base sm:text-lg">
                        {isClosed ? (
                          <span className="text-muted-foreground italic">–</span>
                        ) : item.morning ? (
                          <span className="text-primary font-medium">{item.morning}</span>
                        ) : (
                          <span className="text-muted-foreground">–</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center text-base sm:text-lg">
                        {isClosed ? (
                          <span className="text-muted-foreground italic">–</span>
                        ) : item.afternoon ? (
                          <span className="text-primary font-medium">{item.afternoon}</span>
                        ) : (
                          <span className="text-muted-foreground">–</span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Card>
          
          <div className="mt-6 sm:mt-8 text-center px-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Termine nach Vereinbarung • Notfälle werden umgehend behandelt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
