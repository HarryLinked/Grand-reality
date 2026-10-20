import {
  Award, Building2, Users, HardHat, ShieldCheck, Eye, Clock, Flag, TrendingUp, Target, House, Handshake,
  ChartColumnIncreasing, Megaphone, Presentation, MapPin, Phone, Mail, ArrowRight, ChevronDown, ChevronLeft,
  ChevronRight, Check, CircleCheck, Download, Send, Lock, CalendarDays, Star, Quote, BadgeCheck, HeartHandshake,
  TreePine, Lightbulb, Route, Landmark, Shield, Menu, X, Ruler, Map, LayoutGrid, Droplets, Trees, Waves, Car,
  BrickWall, Zap, Cctv, Baby, ArrowUpDown, Medal, Plus, Minus, Fence, Construction, Gem, ArrowUpRight,
  MessageCircle,
} from 'lucide-react';

const icons = {
  Award, Building2, Users, HardHat, ShieldCheck, Eye, Clock, Flag, TrendingUp, Target, Home: House, Handshake,
  BarChart: ChartColumnIncreasing, Megaphone, Presentation, MapPin, Phone, Mail, ArrowRight, ChevronDown,
  ChevronLeft, ChevronRight, Check, CircleCheck, Download, Send, Lock, CalendarDays, Star, Quote, BadgeCheck,
  HeartHandshake, TreePine, Lightbulb, Route, Landmark, Shield, Menu, X, Ruler, Map, LayoutGrid, Droplets, Trees,
  Waves, Car, BrickWall, Zap, Cctv, Baby, ArrowUpDown, Medal, Plus, Minus, Fence, Construction, Gem,
  ArrowUpRight, MessageCircle,
};

// Brand icons (lucide removed these in newer releases, so they are inlined)
const brand = {
  Facebook: <path d="M14 8.5V7c0-.8.2-1.3 1.4-1.3H17V3.1C16.7 3 15.8 3 14.8 3 12.6 3 11 4.3 11 6.8v1.7H8.5V12H11v9h3v-9h2.4l.4-3.5H14z" />,
  Instagram: (<><rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="16.9" cy="7.1" r="1.1" /></>),
  Linkedin: <path d="M6.2 9.3H3.3V20h2.9V9.3zM4.8 4.3a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM20.7 13.7c0-3-1.6-4.6-3.9-4.6-1.5 0-2.4.8-2.8 1.5V9.3h-2.9V20h2.9v-5.7c0-1.5.6-2.5 1.9-2.5 1.2 0 1.8.9 1.8 2.5V20h3v-6.3z" />,
  Youtube: <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />,
};

export default function Icon({ name, size = 20, strokeWidth = 1.7, className = '', ...rest }) {
  if (brand[name]) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
        {brand[name]}
      </svg>
    );
  }
  const Cmp = icons[name] || Building2;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
