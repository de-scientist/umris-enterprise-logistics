import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaXmark,
  FaArrowRight as FaCta,
} from "react-icons/fa6";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import {
  getFeaturedStory,
  getSupportingStories,
  successStories,
  type SuccessStory,
} from "../../data/successStories";

/**
 * Success Stories — "Real Work. Real Movement."
 * Editorial proof-of-work grid built from the company's own
 * photographs. Copy describes only what each photo shows.
 */
export default function SuccessStories() {
  const featured = getFeaturedStory();
  const supporting = getSupportingStories();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) =>
        i === null ? i : (i + dir + successStories.length) % successStories.length,
      ),
    [],
  );

  /* Lightbox: focus management, ESC / arrow keys, scroll lock. */
  useEffect(() => {
    if (openIndex === null) return;
    lastFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
      /* Keep Tab cycling inside the dialog while it is open. */
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled])",
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocused.current?.focus();
    };
  }, [openIndex, close, step]);

  const openAt = (story: SuccessStory) =>
    setOpenIndex(successStories.findIndex((s) => s.id === story.id));

  const active = openIndex !== null ? successStories[openIndex] : null;

  return (
    <section
      className="section section--surface stories"
      aria-labelledby="stories-heading"
    >
      <div className="container">
        <span id="stories-heading" className="sr-only">
          Success stories
        </span>
        <SectionHeading
          eyebrow="Our Work"
          title="Real Work. Real Movement."
          intro="A look at Umri's Enterprises in action — the people, movement and logistics work behind the service we provide. Every photograph below is from our own operations."
        />

        <div className="stories-grid">
          <Reveal className="stories-featured-wrap">
            <StoryTile
              story={featured}
              size="featured"
              onOpen={() => openAt(featured)}
            />
          </Reveal>
          {supporting.slice(0, 2).map((s) => (
            <Reveal key={s.id}>
              <StoryTile story={s} size="standard" onOpen={() => openAt(s)} />
            </Reveal>
          ))}
          {supporting.slice(2).map((s) => (
            <Reveal key={s.id}>
              <StoryTile story={s} size="standard" onOpen={() => openAt(s)} />
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/portfolio" className="btn btn--ghost btn--lg">
            View all our work <FaCta aria-hidden />
          </Link>
        </div>
      </div>

      {active && openIndex !== null && (
        <div
          className="stories-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — image ${openIndex + 1} of ${successStories.length}`}
          onClick={close}
        >
          <div
            ref={dialogRef}
            className="stories-lightbox__inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              className="stories-lightbox__close"
              onClick={close}
              aria-label="Close image viewer"
            >
              <FaXmark aria-hidden />
            </button>
            <button
              type="button"
              className="stories-lightbox__nav stories-lightbox__nav--prev"
              onClick={() => step(-1)}
              aria-label="Previous image"
            >
              <FaArrowLeft aria-hidden />
            </button>
            <figure>
              <img src={active.image} alt={active.alt} />
              <figcaption>
                <span className="chip">{active.category}</span>
                <strong>{active.title}</strong>
                <span>
                  {active.description} ({openIndex + 1} of{" "}
                  {successStories.length})
                </span>
              </figcaption>
            </figure>
            <button
              type="button"
              className="stories-lightbox__nav stories-lightbox__nav--next"
              onClick={() => step(1)}
              aria-label="Next image"
            >
              <FaArrowRight aria-hidden />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function StoryTile({
  story,
  size,
  onOpen,
}: {
  story: SuccessStory;
  size: "featured" | "standard";
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className={`stories-tile stories-tile--${size}`}
      onClick={onOpen}
      aria-label={`View image: ${story.title}`}
      aria-haspopup="dialog"
    >
      <img src={story.image} alt={story.alt} loading="lazy" />
      <span className="stories-tile__overlay">
        <span className="chip chip--light">{story.category}</span>
        <span className="stories-tile__title">{story.title}</span>
        {size === "featured" && (
          <span className="stories-tile__desc">{story.description}</span>
        )}
      </span>
    </button>
  );
}
