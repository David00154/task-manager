import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head >
					<Script id="my-script-1" strategy="lazyOnload">{`
						if ("serviceWorker" in navigator) {
							// window.addEventListener("load", () => {
							navigator.serviceWorker
								.register("/service-worker.js")
								.then((req) => {
									if (!req.active) {
										console.log("Service Worker: Registering...");
									}
								})
								.catch((err) => console.error('Service Worker ', err));
							// });
						}
					`}</Script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
