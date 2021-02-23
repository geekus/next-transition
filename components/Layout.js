import Head from 'next/head'

export default function Layout(props) {
  return (
    <div id="root">
      <Head>
        <title>Shared by you</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {props.children}
      </main>

      <style jsx global>{`
        body {
          font-family: sans-serif;
        }

        .items {
          width: 100%;
        }

        .item {
          width: 320px;
          margin: 0 auto;
        }

        .byline {
          padding: 24px;
        }

        .item-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .item.item-closed {
          text-align: center;
        }

        .item.item-closed .item-image-container {
          border-radius: 6px;
          overflow: hidden;
        }

        .item.item-closed h2 {
          margin-top: 48px;
          margin-bottom: 12px;
          font-size: 40px;
          font-weight: 700;
        }

        .item.item-closed p {
          margin-top: 12px;
          margin-bottom: 40px;
          color: #333;
        }

        .item.item-open {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
        }

        .item.item-open .item-image-container {
          width: 100%;
          height: 100%;
        }

        .item.item-open .item-title, 
        .item.item-open .item-author {
          position: absolute;
          left: 24px;
          color: #eee;
          text-shadow: rgba(0, 0, 0, 0.64) 0 0 32px;
          opacity: 0;
        }

        .item.item-open .item-title {
          bottom: 0px;
          font-size: 64px;
        }

        .item.item-open .item-author {
          bottom: 0px;
        }

        .item-image-container {
          position: relative;
          overflow: hidden;
          width: 280px;
          height: 280px;
          box-shadow: rgba(0, 0, 0, .25) 0 0 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .item-image-container img {
          min-width: 100%;
          min-height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }

        a.action {
          text-decoration: none;
          display: block;
        }

        a.action.expand {
          box-shadow: rgba(0, 0, 0, .15) 0 0 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #000;
          border-radius: 50%;
          color: #fff;
          width: 64px;
          height: 64px;
          font-size: 24px;
          line-height: 1.4;
        }

        a.action.collapse {
          position: absolute;
          top: 12px;
          left: 24px;
          font-size: 32px;
          color: rgba(255, 255, 255, 0.9);
          z-index: 1000;
        }
      `}</style>
    </div>
  )
}
