/* ============================================================
   TRACKING SERVICE — frontend interface, backend-ready
   ------------------------------------------------------------
   Today this resolves against `MOCK_SHIPMENTS` with a simulated
   delay + skeleton state. To go live, replace the body of
   `fetchShipment()` with:
     const res = await fetch(`/api/tracking/${encodeURIComponent(id)}`);
   and keep the same return type. No component changes needed.
   ============================================================ */

import {
  MOCK_SHIPMENTS,
  normaliseTrackingNumber,
  type MockShipment,
} from "../data/mockShipments";

export type TrackingResult =
  | { found: true; shipment: MockShipment }
  | { found: false; query: string };

const SIMULATED_LATENCY_MS = 650;

export async function fetchShipment(raw: string): Promise<TrackingResult> {
  const query = normaliseTrackingNumber(raw);
  // Simulate network latency so skeleton/loading states are exercised.
  await new Promise((r) => setTimeout(r, SIMULATED_LATENCY_MS));
  const shipment = MOCK_SHIPMENTS[query];
  if (shipment) return { found: true, shipment };
  return { found: false, query };
}

/** Validate tracking format: UMRS-XXXX-XXX (lenient on purpose). */
export function isPlausibleTrackingNumber(raw: string): boolean {
  const q = normaliseTrackingNumber(raw);
  if (!q) return false;
  return /^[A-Z0-9-]{6,24}$/.test(q);
}
