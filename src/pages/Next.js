import React from "react";
import TemplatePage from "../components/TemplatePage";

const next = () => {
  return (
    <>
      <TemplatePage
        title="Next.js"
        description="est un framework gratuit et open source, développé par Vercel en 2016, s'appuyant sur la bibliothèque JavaScript React et sur la technologie Node.js."
        origin="Développé par Vercel, et V1 sortie en 2016."
        officialWebsite="https://nextjs.org"
        cheatSheet="https://nextjs.org"
      />
      {/* <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
        <p className="mb-8">
          <div className="p-4">
            <li>
              
            <li>
         
            </li>
          </div>
        </p>
      </div> */}
    </>
  );
};

export default next;
