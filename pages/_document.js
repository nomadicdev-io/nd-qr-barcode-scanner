
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/touch-icon-iphone.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/touch-icon-ipad.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/touch-icon-iphone-retina.png" />
                    <link rel="apple-touch-icon" sizes="167x167" href="/touch-icon-ipad-retina.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
                    <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;