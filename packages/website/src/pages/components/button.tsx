import Docs from '@/components/Document';
import menus from './menus'
const anchors = []
const docs = {anchors,menus}
const ButtonDocs = () => {
  
  return <Docs {...docs}/>;
};

export default ButtonDocs;
