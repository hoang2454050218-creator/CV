/** Deep-space backdrop stack: aurora mesh, page graticule, film grain,
 *  and the CSS-only scroll progress bar. All layers are decorative and
 *  pointer-transparent; reduced-motion freezes the aurora. */
export function Backdrop() {
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <i />
      </div>
      <div className="page-grid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
    </>
  );
}
