/**
 * Split a long-form body string into paragraphs on `\n\n` boundaries and
 * render each as its own `<p>`. Tolerates null/undefined/empty input by
 * rendering nothing — call sites can pass optional fields without guarding.
 *
 * Used by the area modal for `long_form.full` and the named sub-sections,
 * and by the project modal for `long_form.full` and friends. Centralising
 * the split here means a single source of truth for prose formatting in
 * the browser UI — adding markdown or rich rendering later is a one-place
 * change.
 */
export default function ProseBlock({
  body,
}: {
  body: string | null | undefined;
}) {
  if (!body || body.trim().length === 0) return null;
  const paragraphs = body.includes("\n\n") ? body.split("\n\n") : [body];
  return (
    <>
      {paragraphs.map((p, i) => {
        const trimmed = p.trim();
        if (!trimmed) return null;
        return <p key={i}>{trimmed}</p>;
      })}
    </>
  );
}
