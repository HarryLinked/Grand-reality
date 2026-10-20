// Google Maps embed (no API key needed). The static image is a fallback while it loads / offline.
export default function MapEmbed({ query, fallback, title = 'Map', height = 300, children }) {
  return (
    <div className="map" style={{ height, backgroundImage: fallback ? `url(${fallback})` : undefined }}>
      <iframe
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        allowFullScreen
      />
      {children}
    </div>
  );
}
