import React from "react";

import SinglePagePDFViewer from "./single-page";


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./Resume2.pdf";

import "./Resume.css";

export default function Resume() {
  return (
    <div className="App">

      <SinglePagePDFViewer pdf={samplePDF} />

    </div>
  );
}