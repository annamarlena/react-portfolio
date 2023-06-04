import React from 'react'
import './resume.css'
import { Container, Row } from "react-bootstrap"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

  const Resume = () => {
    const docs = [{ uri: require("./resume.pdf") }];

  return (
    <div>
      <br></br><h1>My Resume</h1><br></br>
      <Container>
        <Row>
          <DocViewer className="docViewer" pluginRenderers={DocViewerRenderers} documents={docs} />
        </Row>
        </Container>
    </div>
  )
}

export default Resume