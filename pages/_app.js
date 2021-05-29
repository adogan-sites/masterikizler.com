import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // TODO: lang cookie check
  // TODO: lang detect
  return (
    <>
      <Component {...pageProps} />
      <div id="modal-root" />
    </>
  );
}

export default MyApp;
