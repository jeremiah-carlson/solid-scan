/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes, hashIntegration } from "@solidjs/router";

import './index.css';
import { Concert, Default } from './pages/Production';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const routerSrc = (import.meta.env['HASH_ROUTING'] == true)? hashIntegration() : null;

render(() =>  (
    <Router source={routerSrc}>
      <Routes>
        <Route path="/" component={Default} />
        <Route path="/concert/" component={Concert} />
      </Routes>
    </Router>
  ),
  root
);
