import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <p> Header  </p>
      <Component {...pageProps} />
      <p> Footer </p>
    </>
  )
}

export default MyApp
