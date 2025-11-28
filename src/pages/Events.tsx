import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getUpcomingEvents, getPastEvents, getEventDescription, type EventData } from '@/lib/events';
import { EventSchema } from '@/components/EventSchema';

const Events = () => {
  const { t, language } = useLanguage();
  const [showPastEvents, setShowPastEvents] = useState(false);
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `
  } as const;

  const formatEventDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatEventTime = (date: Date, endDate?: Date) => {
    const timeFormat = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    if (endDate) {
      return `${timeFormat.format(date)} - ${timeFormat.format(endDate)}`;
    }
    return timeFormat.format(date);
  };

  const getLocationText = (location: EventData['location']) => {
    switch (location.type) {
      case 'online':
        return `${t.events.online}${location.platform ? ` (${location.platform})` : ''}`;
      case 'onsite':
        return location.address || t.events.onsite;
      case 'hybrid':
        return `${t.events.hybrid}${location.address ? ` - ${location.address}` : ''}`;
      default:
        return '';
    }
  };

  const EventCard = ({ event, isPast = false }: { event: EventData; isPast?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border-border/50 hover:border-primary/30">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {event.featured && !isPast && (
                  <Badge variant="default" className="text-xs">
                    Featured
                  </Badge>
                )}
                <Badge variant="secondary" className="text-xs capitalize">
                  {event.type.replace('-', ' ')}
                </Badge>
              </div>
              <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                {event.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {getEventDescription(event, language)}
          </p>

          <div className="space-y-3 mb-6">
            {/* Date */}
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="h-4 w-4 text-primary shrink-0" />
              <span className="font-medium">{formatEventDate(event.date)}</span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span>{formatEventTime(event.date, event.endDate)}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{getLocationText(event.location)}</span>
            </div>

            {/* Capacity/Registration */}
            {event.registration.required && event.registration.capacity && (
              <div className="flex items-center gap-3 text-sm">
                <Users className="h-4 w-4 text-primary shrink-0" />
                <span>
                  {event.registration.spotsLeft 
                    ? `${event.registration.spotsLeft} ${t.events.spotsLeft}`
                    : t.events.soldOut
                  }
                </span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          {event.cta && !isPast && (
            <Button 
              className="w-full group/btn" 
              variant={event.cta.type === 'register' ? 'default' : 'outline'}
              asChild
            >
              <a href={event.cta.url} className="flex items-center justify-center gap-2">
                {event.cta.text}
                <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <div className="max-w-md mx-auto">
        <Calendar className="h-16 w-16 mx-auto mb-6 text-muted-foreground/50" />
        <h3 className="text-2xl font-semibold mb-4">
          {t.events.noUpcomingEvents}
        </h3>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {t.events.noUpcomingDescription}
        </p>
        <Button asChild>
          <a href="/contact" className="flex items-center gap-2">
            {t.events.subscribeNewsletter}
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );

  return (
    <>
      <EventSchema events={upcomingEvents} />
      <main className="min-h-screen relative overflow-hidden" style={gradientStyle}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.navigation.events}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t.events.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t.events.upcomingEvents}</h2>
            <p className="text-muted-foreground">
              {upcomingEvents.length > 0 
                ? `${upcomingEvents.length} upcoming event${upcomingEvents.length > 1 ? 's' : ''}`
                : t.events.stayTuned
              }
            </p>
          </motion.div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setShowPastEvents(!showPastEvents)}
                className="w-full md:w-auto flex items-center gap-2 text-left justify-start p-0 h-auto hover:bg-transparent"
              >
                <h2 className="text-3xl font-bold">{t.events.pastEvents}</h2>
                {showPastEvents ? (
                  <ChevronUp className="h-6 w-6" />
                ) : (
                  <ChevronDown className="h-6 w-6" />
                )}
              </Button>
              <p className="text-muted-foreground mt-2">
                {pastEvents.length} past event{pastEvents.length > 1 ? 's' : ''}
              </p>
            </motion.div>

            {showPastEvents && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} isPast />
                ))}
              </motion.div>
            )}
          </div>
        </section>
      )}
        </div>
      </main>
    </>
  );
};

export default Events;