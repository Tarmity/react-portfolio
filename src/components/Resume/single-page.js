import React, { useState } from 'react';
import "./Resume.css";
import "./Resume2.pdf";
import { } from 'react-bootstrap'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




const SinglePage = (props) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function prevPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const { pdf } = props;

    return (
        < >
            <Document
                file={pdf}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div className="buttons">
                <p>
                    Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                </p>
                <button type="button" disabled={pageNumber <= 1} onClick={prevPage}>
                    Previous
                </button>{" "}
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>{" "}
                <a href='./Resume2.pdf' target="_blank" rel="noopener noreferrer" download>
                     <button>
                        <i className="fas fa-download" />
                     Download 
                     </button>
                </a>
            </div>

        </>
    );
};



export default SinglePage;