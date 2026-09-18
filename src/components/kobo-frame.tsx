export function KoboFrame({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <iframe
        src={url}
        title={title}
        width="100%"
        height="950"
        className="kobo-frame"
        style={{ border: "none" }}
        allow="geolocation"
      />
    </div>
  );
}
