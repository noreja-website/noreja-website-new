import { EventData } from '@/lib/events';

interface EventSchemaProps {
  events: EventData[];
}

export function EventSchema({ events }: EventSchemaProps) {
  if (events.length === 0) return null;

  const generateEventSchema = (event: EventData) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.title,
      "description": event.description,
      "startDate": event.date.toISOString(),
      "endDate": event.endDate ? event.endDate.toISOString() : event.date.toISOString(),
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": event.location.type === 'online' 
        ? "https://schema.org/OnlineEventAttendanceMode"
        : event.location.type === 'onsite'
        ? "https://schema.org/OfflineEventAttendanceMode"
        : "https://schema.org/MixedEventAttendanceMode",
      "location": event.location.type === 'online' 
        ? {
            "@type": "VirtualLocation",
            "url": event.cta?.url || window.location.origin
          }
        : {
            "@type": "Place",
            "name": event.location.address || "Event Location",
            "address": event.location.address || "To be announced"
          },
      "organizer": {
        "@type": "Organization",
        "name": "Noreja Intelligence GmbH",
        "url": window.location.origin
      },
      "offers": event.registration.required ? {
        "@type": "Offer",
        "url": event.cta?.url || event.registration.url || window.location.origin,
        "price": event.isFree ? "0" : "Contact for pricing",
        "priceCurrency": "EUR",
        "availability": event.registration.spotsLeft 
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
        "validFrom": new Date().toISOString(),
        "validThrough": event.registration.deadline?.toISOString()
      } : undefined
    };

    return JSON.stringify(schema);
  };

  const schemaData = events.map(generateEventSchema);

  return (
    <>
      {schemaData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}
    </>
  );
}