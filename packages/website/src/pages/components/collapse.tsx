import Docs from '@/components/Document';
import { Container,Collapse } from '@sui/core';
import { useState } from 'react';
import menus from './menus'
const anchors = []
const docs = {anchors,menus}
const CollapseDocs = () => {
  const [expand,setExpand] = useState(false)
  
  return <Docs {...docs}>

    <Container>
        <Collapse title='12421' {...{expand,onChange:()=>setExpand(v=>!v)}}>
           <Container background={'black'} pa='1em'>124124</Container>
        </Collapse>
    </Container>
  </Docs>;
};

export default CollapseDocs;
