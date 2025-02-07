import { AnalyticsWrapper } from "../components/analytics";

import "../styles/globals.css";
import { CSPostHogProvider } from "./provider";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import LiveChat from './livechat'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <title>Overeasy</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥚</text></svg>"></link>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
        <meta name="title" content="Talk, Record, Earn." />
        <meta name="description" content="At Overeasy, we're seeking native speakers from around the world for flexible, part‐time roles with competitive compensation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://overeasy.sh/" />
        <meta property="og:title" content="Talk, Record, Earn." />
        <meta property="og:description" content="At Overeasy, we're seeking native speakers from around the world for flexible, part‐time roles with competitive compensation." />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://overeasy.sh/" />
        <meta property="twitter:title" content="Talk, Record, Earn." />
        <meta property="twitter:description" content="At Overeasy, we're seeking native speakers from around the world for flexible, part‐time roles with competitive compensation." />
        <meta property="twitter:image" content="" />

      </head>



      <CSPostHogProvider>
      <LiveChat/>

        <body>
          <div>
            <main className="bg-page-gradient pt-navigation-height">
              {children}
            </main>
          </div>
          <AnalyticsWrapper />
        </body>
      </CSPostHogProvider>

      <GoogleAnalytics gaId="G-BXV7T7MJLK" />
      <GoogleTagManager gtmId="AW-829256223" />



    </html>
  );
}