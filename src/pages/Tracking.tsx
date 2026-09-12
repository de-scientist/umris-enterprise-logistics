import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import TrackingForm from "../components/logistics/TrackingForm";
import ShipmentCard from "../components/logistics/ShipmentCard";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/sections/CtaBand";
import { fetchShipment, type TrackingResult } from "../lib/tracking";
import { DEMO_TRACKING_NUMBERS } from "../data/mockShipments";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";

/**
 * /tracking — frontend-only demo. Swap `fetchShipment` for
 * GET /api/tracking/:trackingNumber when a backend exists.
 */
export default function Tracking() {
  const [params] = useSearchParams();
  const initial = params.get("tn") ?? "";
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [searched, setSearched] = useState(false);

  useSeo({
    title: "Track Your Shipment",
    description:
      "Track your Umri's shipment using a demo tracking number. This page demonstrates shipment tracking with sample data — live tracking is not yet available.",
    path: "/tracking",
  });

  const search = async (tn: string) => {
    setLoading(true);
    setSearched(true);
    const r = await fetchShipment(tn);
    setResult(r);
    setLoading(false);
  };

  useEffect(() => {
    if (initial) {
      void search(initial);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Tracking", path: "/tracking" }])]} />
      <PageHero
        eyebrow="Shipment Tracking"
        title="Know Where Your Shipment Stands."
        description="Enter a demo tracking number to view a sample shipment status. This is a demonstration of tracking functionality — live tracking is not yet available."
        image="/testimonials/t2.jpeg"
        imageAlt="Umri's Enterprises truck arrived at a health facility during delivery operations in Kenya"
        crumbs={[{ name: "Tracking" }]}
      />

      <section className="section">
        <div className="container container-narrow">
          <TrackingForm variant="page" initial={initial} onSearch={search} loading={loading} />

          <div className="mt-4" aria-live="polite">
            {loading && (
              <div className="shipment shipment--skeleton" aria-label="Loading shipment">
                <span className="sk sk--line" />
                <span className="sk sk--line" />
                <span className="sk sk--block" />
                <span className="sk sk--line" />
              </div>
            )}

            {!loading && searched && result?.found === true && (
              <ShipmentCard shipment={result.shipment} />
            )}

            {!loading && searched && result?.found === false && (
              <div className="card text-center">
                <h2 className="h3">No shipment found for “{result.query}”</h2>
                <p className="text-muted mt-2">
                  Check the number and try again — or try a demo shipment:{" "}
                  {DEMO_TRACKING_NUMBERS.join(" · ")}. If your shipment was
                  booked recently, it may not be in the demo dataset.
                </p>
                <div className="mt-4 flex gap-3 wrap" style={{ justifyContent: "center" }}>
                  <Link to="/contact" className="btn btn--primary">
                    Contact support
                  </Link>
                  <Link to="/quote" className="btn btn--ghost">
                    Get a Quote
                  </Link>
                </div>
              </div>
            )}

            {!loading && !searched && (
              <div className="card mt-4">
              <h2 className="h3">How tracking works</h2>
              <ol className="track-how">
                <li><strong>Book</strong> — request a quote and confirm your shipment.</li>
                <li><strong>Receive a number</strong> — your tracking number (format UMRS-XXXX-XXX).</li>
                <li><strong>Try the demo</strong> — enter a demo number to preview the tracking interface.</li>
              </ol>
              <p className="text-muted text-sm mt-3">
                Live tracking is currently being developed. Use the demo numbers above to preview the interface, or{" "}
                <a href="tel:+254764268280">+254 764 268 280</a> or{" "}
                <Link to="/contact">contact the team</Link> for real shipment assistance.
              </p>
              </div>
            )}
          </div>

          {/* GEO/AEO answer block */}
            <div className="answer-block mt-5">
              <h2 className="h3">How can I track a shipment with Umri's?</h2>
              <p>
                Enter the tracking number issued at booking into the form above
                to preview the shipment interface. Currently, tracking is
                demonstrated with sample shipment data — live GPS and
                real-time carrier updates are under development.
              </p>
            </div>
        </div>
      </section>

      <CtaBand title="Can't find your shipment?" text="Share your booking details and the team will help you locate it." />
    </>
  );
}
