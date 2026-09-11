/* ============================================================
   MOCK SHIPMENTS — clearly-marked frontend demo data
   ------------------------------------------------------------
   Frontend-only. Replace `lookupShipment()` with a real call:
     GET /api/tracking/:trackingNumber
   when a backend exists. UI components must only use the
   `TrackingService` interface in `src/lib/tracking.ts`.
   ============================================================ */

export interface ShipmentEvent {
  /** ISO date string */
  date: string;
  title: string;
  location: string;
  detail?: string;
}

export type ShipmentStatus =
  | "Order Received"
  | "Picked Up"
  | "In Transit"
  | "Out for Delivery"
  | "Delivered";

export interface MockShipment {
  trackingNumber: string;
  status: ShipmentStatus;
  /** 0-4 index into TRACKING_STAGES */
  stageIndex: number;
  origin: string;
  destination: string;
  service: string;
  weight: string;
  pieces: string;
  estimatedDelivery: string;
  lastUpdate: string;
  events: ShipmentEvent[];
  demo: true;
}

export const TRACKING_STAGES: ShipmentStatus[] = [
  "Order Received",
  "Picked Up",
  "In Transit",
  "Out for Delivery",
  "Delivered",
];

/** Demo numbers shown in the UI so visitors can try tracking. */
export const DEMO_TRACKING_NUMBERS = [
  "UMRS-2026-001",
  "UMRS-2026-002",
  "UMRS-2026-003",
] as const;

export const MOCK_SHIPMENTS: Record<string, MockShipment> = {
  "UMRS-2026-001": {
    trackingNumber: "UMRS-2026-001",
    status: "In Transit",
    stageIndex: 2,
    origin: "Nairobi",
    destination: "Mombasa",
    service: "Freight Transportation",
    weight: "1,250 kg",
    pieces: "42 cartons",
    estimatedDelivery: "14 Sep 2026",
    lastUpdate: "11 Sep 2026, 08:20 EAT — Voi checkpoint",
    demo: true,
    events: [
      {
        date: "2026-09-08T09:00:00+03:00",
        title: "Order received",
        location: "Nairobi",
        detail: "Booking confirmed and consignment scheduled.",
      },
      {
        date: "2026-09-09T07:30:00+03:00",
        title: "Picked up",
        location: "Nairobi — Industrial Area",
        detail: "42 cartons loaded, secured and documented.",
      },
      {
        date: "2026-09-11T08:20:00+03:00",
        title: "In transit",
        location: "Voi checkpoint",
        detail: "Consignment on route to Mombasa. Next update at Mariakani.",
      },
    ],
  },
  "UMRS-2026-002": {
    trackingNumber: "UMRS-2026-002",
    status: "Out for Delivery",
    stageIndex: 3,
    origin: "Naivasha",
    destination: "Nakuru",
    service: "Last-Mile Delivery",
    weight: "180 kg",
    pieces: "12 parcels",
    estimatedDelivery: "11 Sep 2026",
    lastUpdate: "11 Sep 2026, 10:05 EAT — Nakuru depot",
    demo: true,
    events: [
      {
        date: "2026-09-10T08:00:00+03:00",
        title: "Order received",
        location: "Naivasha",
      },
      {
        date: "2026-09-10T13:45:00+03:00",
        title: "Picked up",
        location: "Naivasha",
        detail: "12 parcels received for final distribution.",
      },
      {
        date: "2026-09-11T06:30:00+03:00",
        title: "In transit",
        location: "Naivasha → Nakuru",
      },
      {
        date: "2026-09-11T10:05:00+03:00",
        title: "Out for delivery",
        location: "Nakuru depot",
        detail: "Courier assigned. Delivery run in progress.",
      },
    ],
  },
  "UMRS-2026-003": {
    trackingNumber: "UMRS-2026-003",
    status: "Delivered",
    stageIndex: 4,
    origin: "Nairobi",
    destination: "Eldoret",
    service: "Trucking Services",
    weight: "3,400 kg",
    pieces: "Full truckload",
    estimatedDelivery: "Delivered 9 Sep 2026",
    lastUpdate: "9 Sep 2026, 16:40 EAT — delivered and signed",
    demo: true,
    events: [
      {
        date: "2026-09-07T10:00:00+03:00",
        title: "Order received",
        location: "Nairobi",
      },
      {
        date: "2026-09-07T15:20:00+03:00",
        title: "Picked up",
        location: "Nairobi",
      },
      {
        date: "2026-09-08T11:00:00+03:00",
        title: "In transit",
        location: "Nakuru checkpoint",
      },
      {
        date: "2026-09-09T09:15:00+03:00",
        title: "Out for delivery",
        location: "Eldoret",
      },
      {
        date: "2026-09-09T16:40:00+03:00",
        title: "Delivered",
        location: "Eldoret",
        detail: "Received and signed off at destination.",
      },
    ],
  },
};

/** Normalise user input: trim, uppercase, collapse spaces. */
export function normaliseTrackingNumber(input: string): string {
  return input.trim().toUpperCase().replace(/\s+/g, "");
}
