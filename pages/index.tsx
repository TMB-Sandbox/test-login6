import type { NextPage } from "next";
import Head from "next/head";
import LoginFormContainer from "../components/login-form-container";

const Desktop2: NextPage = () => {
  return (
    <>
      <Head>
        <title>Experimental 01</title>
        <meta name="description" content="Experimental 01" />
      </Head>
      <div className="relative bg-white w-full overflow-hidden flex flex-col py-[236px] px-[328px] box-border items-end justify-end">
        <LoginFormContainer />
      </div>
    </>
  );
};

export default Desktop2;
