import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head lang="pt-br">
                
                    <title>Podcaster</title>
                    <meta charSet="utf-8"/>
                    <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}