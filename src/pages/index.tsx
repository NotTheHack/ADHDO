import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>ADHDo!</title>
        <meta name="description" content="ADHDo!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="container flex flex-col items-center justify-center gap-6 py-16 border-2 rounded-md border-[#90abfe]">
          <button className="bg-[#0033ff]">primary button color</button>
          <button className="bg-[#90abfe]">secondary button color</button>
          <div className="bg-[#02a1a1] flex">this is an accented div</div>
        </div>
      </main>
    </>
  );
};

export default Home;
