import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="component">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
