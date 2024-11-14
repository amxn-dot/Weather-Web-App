import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun
} from 'lucide-react';
import React from 'react';

interface WeatherIconProps {
  description: string;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ description, className = "" }) => {
  const getIcon = () => {
    const desc = description.toLowerCase();
    if (desc.includes('rain')) return <CloudRain className={className} />;
    if (desc.includes('snow')) return <CloudSnow className={className} />;
    if (desc.includes('thunder')) return <CloudLightning className={className} />;
    if (desc.includes('drizzle')) return <CloudDrizzle className={className} />;
    if (desc.includes('clear')) return <Sun className={className} />;
    if (desc.includes('clouds') && desc.includes('scattered')) return <CloudSun className={className} />;
    if (desc.includes('mist') || desc.includes('fog') || desc.includes('haze')) return <CloudFog className={className} />;
    return <Cloud className={className} />;
  };

  return getIcon();
};