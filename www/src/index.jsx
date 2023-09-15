/* @refresh reload */
import { Switch, render } from 'solid-js/web';
import { Router, Route, Routes, hashIntegration } from "@solidjs/router";

import './index.css';
import { Pages } from './pages/Production';

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
        <For each={Pages}>{
          (pg, i)=> <Switch fallback={<Route path={`${pg.routePrefix}/${pg.name.toLowerCase()}`} component={pg.func}/>}>
                      <Match when={pg.name.toLowerCase() == rootPage}>
                        <Route path="/" component={pg.func}/>
                      </Match>
                    </Switch>
        }</For>
      </Routes>
    </Router>
  ),
  root
);
