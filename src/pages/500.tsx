/** Legacy Pages Router hook so `next build` emits stable 500.html (avoids missing export on some volumes). */
export default function Custom500() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>500</h1>
      <p>Serverfehler. Bitte später erneut versuchen.</p>
      <a href='/'>Zur Startseite</a>
    </main>
  )
}
