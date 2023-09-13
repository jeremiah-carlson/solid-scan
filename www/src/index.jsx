/* @refresh reload */
import { Switch, render } from 'solid-js/web';
import { Router, Route, Routes, hashIntegration } from "@solidjs/router";

import './index.css';
import * as Page from './pages/Production';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const routerSrc = (["hash", "HASH"].includes(import.meta.env.VITE_ROUTING))? hashIntegration() : null;
const rootPage = import.meta.env.VITE_ROOT_PAGE ?? "default"

render(() =>  (
    <Router source={routerSrc}>
      <Routes>
        <For each={Object.entries(Page)}>{
          (pg, i)=> <Switch fallback={<Route path={`/${pg[0].toLowerCase()}`} component={pg[1]}/>}>
                      <Match when={pg[0].toLowerCase() == rootPage}>
                        <Route path="/" component={pg[1]}/>
                      </Match>
                    </Switch>
        }</For>
      </Routes>
    </Router>
  ),
  root
);
