import './doc.scss';
import Icon from '../heplper/icon';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

function Doc() {
	pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
	const [numPages, setNumPages] = useState(null);
	// const [pageNumber, setPageNumber] = useState(1);
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div className="pdf-backgound ">
			<div className=" pdf-container ">
				<div className=" pfd-title-button-pc ">
					<button className="button-doc">
						<img className="doc-imgback" src={Icon.Iconback1} />
					</button>
					<div className="pfd-title">Sống 24h mỗi ngày</div>
					<button className="pfd-button">
						<img src={Icon.Playhead} />
						<div className="audio">Nghe Audio</div>
					</button>
				</div>
				<div className="pdf-content">
					<div>
						<Document
							file="https://file.mentor.vn/files/books/lesson/file-1627615860729.pdf"
							onLoadSuccess={onDocumentLoadSuccess}
						>
							<Page pageNumber={numPages} />
							<Page pageNumber={numPages + 1} />
						</Document>

					</div>
					<button className='button-pri' >
						<img className='pri-img' src={Icon.pore}/>
					</button>
					<button className='button-next' >
						<img className='next-img' src={Icon.nexttop}/>
					</button>
				</div>

			</div>
			<div className='pdf-tools_container'>
				<div className='pdf-tools'>
					<div className='pdf-tools-img1'>
						<img src={Icon.Actions}/>
					</div>
					<div className='pdf-tools-img2'>
						<img src={Icon.Vectors}/>
					</div>
					<div className='pdf-tools-img3'>
						<img src={Icon.Play}/>
					</div>
					<div className='pdf-tools-img4'>
						<img src={Icon.codicon}/>
					</div>
					<div className='pdf-tools-img5'>
						<img src={Icon.cil}/>
					</div>
					<div className='pdf-tools-img6'>
						<img src={Icon.Grid}/>
					</div>
					<div className='pdf-tools-img7'>
						<img src={Icon.Bullets}/>
					</div>

					<div className='pdf-tools-img8'>
						<img src={Icon.Vectorabc}/>
					</div>
					<div className='pdf-tools-img9'>
						<img src={Icon.Full}/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Doc;
