import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
import { useState } from "react";

const offices = [
  {
    id: "head-office",
    name: "Head Office",
    address: "Vill + P.O – Bahiri P.S – Bolpur, Dist – Birbhum, West Bengal, India PIN – 731240",
    x: 64, y: 42,
  },
  {
    id: "asia",
    name: "Asia",
    address: "576 South Street TownPress, Malang, Indonesia. VT 13245\nPhone: (123) 456-7891",
    x: 72, y: 55,
  },
  {
    id: "europe",
    name: "Europe",
    address: "Flat 150, Trinity Square, 23-59 Staines Road, Hounslow, Middlesex, TW3 3GF",
    x: 48, y: 30,
  },
  {
    id: "north-america",
    name: "North America",
    address: "104 W Mountain Sage Drive, Phoenix, Arizona 85045, USA",
    x: 20, y: 35,
  },
  {
    id: "south-america",
    name: "South America",
    address: "639 Manoel Soares da Rocha Street, zip code 13085-055, Campinas city, São Paulo State, Brazil",
    x: 28, y: 65,
  },
  {
    id: "africa",
    name: "Africa",
    address: "Block 27 Flat C Aliyu Mustapha Street, Gwarinpa Setraco Abuja-Nigeria",
    x: 48, y: 55,
  },
  {
    id: "australia",
    name: "Australia",
    address: "4 Perlinte ViewNorth Coogee WA 6163, Perth, Australia",
    x: 82, y: 72,
  },
];

const indiaOffices = [
  {
    id: "head-office",
    name: "Head Office – Bolpur",
    address: "Vill + P.O – Bahiri P.S – Bolpur, Dist – Birbhum, West Bengal, PIN – 731240",
    x: 72, y: 38,
  },
  {
    id: "delhi",
    name: "Delhi Office",
    address: "New Delhi, India",
    x: 55, y: 28,
  },
  {
    id: "mumbai",
    name: "Mumbai Office",
    address: "Mumbai, Maharashtra, India",
    x: 42, y: 55,
  },
  {
    id: "chennai",
    name: "Chennai Office",
    address: "Chennai, Tamil Nadu, India",
    x: 58, y: 72,
  },
  {
    id: "kolkata",
    name: "Kolkata Office",
    address: "Kolkata, West Bengal, India",
    x: 74, y: 42,
  },
];

function OfficeMarker({ office, index }: { office: typeof offices[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="absolute group z-10"
      style={{ left: `${office.x}%`, top: `${office.y}%`, transform: "translate(-50%, -50%)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer ring */}
      <div className="relative w-8 h-8 flex items-center justify-center cursor-pointer">
        <div className="absolute inset-0 rounded-full border-2 border-orange-500 bg-transparent" />
        <div className="w-4 h-4 rounded-full bg-orange-500" />
        {hovered && (
          <div className="absolute inset-0 rounded-full border-2 border-orange-500 animate-ping opacity-30" />
        )}
      </div>

      {/* Tooltip */}
      {hovered && (
        <div className="absolute z-50 w-56 shadow-elevated rounded-md overflow-hidden"
          style={{
            left: office.x > 60 ? "auto" : "100%",
            right: office.x > 60 ? "100%" : "auto",
            top: office.y > 50 ? "auto" : "0",
            bottom: office.y > 50 ? "0" : "auto",
            marginLeft: office.x > 60 ? 0 : 8,
            marginRight: office.x > 60 ? 8 : 0,
          }}
        >
          <div className="bg-foreground text-primary-foreground px-3 py-2 text-sm font-semibold">
            {office.name}
          </div>
          <div className="bg-card px-3 py-3 text-xs text-foreground leading-relaxed whitespace-pre-line">
            {office.address}
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Real world map SVG using simplified but recognizable continent paths
function WorldMapSVG() {
  return (
    <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1" fill="hsl(var(--muted-foreground))" opacity="0.3" />
        </pattern>
      </defs>
      {/* Background dots */}
      <rect width="1000" height="500" fill="url(#dots)" opacity="0.5" />
      {/* North America */}
      <path d="M120,80 L180,60 L220,70 L250,90 L260,130 L240,170 L220,200 L200,210 L180,190 L160,200 L140,180 L120,160 L100,140 L90,120 L100,90 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
      {/* Central America */}
      <path d="M180,190 L200,210 L210,230 L200,250 L190,240 L180,220 L170,210 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
      {/* South America */}
      <path d="M210,250 L240,260 L270,290 L280,330 L290,370 L280,400 L260,420 L240,410 L230,380 L220,350 L210,320 L200,290 L200,270 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
      {/* Europe */}
      <path d="M420,70 L460,60 L500,70 L520,90 L510,120 L490,140 L470,150 L450,140 L430,130 L420,110 L410,90 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
      {/* Africa */}
      <path d="M430,180 L470,170 L510,180 L530,210 L540,250 L530,300 L510,340 L490,360 L470,370 L450,360 L440,330 L430,290 L420,250 L420,210 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
      {/* Middle East / Central Asia */}
      <path d="M520,120 L560,110 L600,120 L620,140 L610,170 L580,180 L550,170 L530,150 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
      {/* India */}
      <path d="M600,160 L630,150 L650,170 L660,200 L650,240 L630,260 L610,250 L600,220 L590,190 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
      {/* East Asia */}
      <path d="M660,80 L720,70 L760,90 L780,120 L770,150 L740,170 L710,160 L680,150 L660,130 L650,100 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
      {/* Southeast Asia */}
      <path d="M680,180 L720,170 L750,190 L760,220 L740,250 L710,260 L690,240 L680,210 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
      {/* Australia */}
      <path d="M760,310 L820,300 L860,320 L880,350 L870,380 L840,400 L800,400 L770,380 L750,350 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
      {/* Japan / Korea */}
      <path d="M790,100 L800,90 L810,100 L810,130 L800,140 L790,130 Z" fill="hsl(var(--muted-foreground))" opacity="0.15" />
    </svg>
  );
}

function IndiaMapSVG() {
  return (
    <svg viewBox="0 0 500 600" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="dots-india" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1" fill="hsl(var(--muted-foreground))" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="500" height="600" fill="url(#dots-india)" opacity="0.5" />
      {/* Simplified India outline */}
      <path d="M180,50 L220,40 L280,30 L340,40 L380,60 L400,90 L410,130 L400,170 L380,200 L360,240 L340,280 L320,320 L300,360 L280,400 L270,440 L260,470 L250,500 L240,510 L230,490 L220,450 L200,400 L180,350 L160,300 L140,260 L130,220 L120,180 L130,140 L150,100 L170,70 Z"
        fill="hsl(var(--muted-foreground))" opacity="0.12" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeOpacity="0.2" />
      {/* Kashmir region */}
      <path d="M180,50 L200,30 L240,20 L280,30 L260,50 L220,55 L190,55 Z"
        fill="hsl(var(--muted-foreground))" opacity="0.08" />
      {/* Sri Lanka */}
      <ellipse cx="280" cy="530" rx="20" ry="25" fill="hsl(var(--muted-foreground))" opacity="0.1" />
    </svg>
  );
}

export function WorldMapSection() {
  const [view, setView] = useState<"global" | "india">("global");
  const currentOffices = view === "global" ? offices : indiaOffices;

  return (
    <section className="py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12 flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
              Our Offices
            </h2>
          </div>

          {/* Toggle */}
          <div className="flex bg-muted rounded-lg p-1 gap-1">
            <button
              onClick={() => setView("global")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === "global"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Global
            </button>
            <button
              onClick={() => setView("india")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                view === "india"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              India
            </button>
          </div>
        </motion.div>

        {/* Map Container */}
        <motion.div
          key={view}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-5xl mx-auto bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden"
        >
          <div className="relative w-full" style={{ paddingTop: view === "global" ? "50%" : "70%" }}>
            <div className="absolute inset-0">
              {view === "global" ? <WorldMapSVG /> : <IndiaMapSVG />}
            </div>

            {/* Office markers */}
            {currentOffices.map((office, i) => (
              <OfficeMarker key={office.id} office={office} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
