import React from 'react';
import './App.css';
import {DaikuRouter} from "./route/DaikuRouter";
import {MediaQueryProvider} from "./context/MediaContext";

export const App = () => {
  return (
      <MediaQueryProvider>
        <DaikuRouter />
      </MediaQueryProvider>
  );
}
