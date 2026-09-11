import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import TrackingForm from "../components/logistics/TrackingForm";
import ShipmentCard from "../components/logistics/ShipmentCard";
import Breadcrumbs from "../components/ui/Breadcrumbs";
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
      "Track your Umris shipment by tracking number. Enter your tracking number to see status, origin, destination and delivery progress.",
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
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Tracking" }]} />
          <h1>Track your shipment</h1>
          <p>
            Enter your tracking number to see where your goods are — from
            pickup to delivery. Demonstration uses sample shipment data.
          </p>
        </div>
      </section>

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
                  <li><strong>Follow progress</strong> — from pickup through transit to delivery.</li>
                </ol>
                <p className="text-muted text-sm mt-3">
                  Need help? Call <a href="tel:+254764268280">+254 764 268 280</a> or{" "}
                  <Link to="/contact">contact the team</Link>.
                </p>
              </div>
            )}
          </div>

          {/* GEO/AEO answer block */}
          <div className="answer-block mt-5">
            <h2 className="h3">How can I track a shipment with Umris?</h2>
            <p>
              Enter the tracking number issued at booking into the form above.
              You&apos;ll see the current status, origin, destination, estimated
              delivery and a stage-by-stage history. For live help, contact
              Umris by phone, WhatsApp or the contact page.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Can't find your shipment?" text="Share your booking details and the team will help you locate it." />
    </>
  );
}
