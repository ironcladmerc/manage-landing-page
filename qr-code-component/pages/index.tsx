import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import QrCode from "../components/QrCode";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-supLightGray">
      <Head>
        <title>QR Code Component</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <QrCode />
    </div>
  );
};

export default Home;
