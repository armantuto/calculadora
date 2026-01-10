import { createRoot } from 'react-dom/client';
import HomePage from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.body);
root.render(<HomePage/>);