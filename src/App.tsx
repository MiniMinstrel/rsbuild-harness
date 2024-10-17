import "./App.css";
import { useEffect } from "react";
import {
  FFContextProvider
} from '@harnessio/ff-react-client-sdk'
import SampleComponent from "./SampleComponent";
declare const BUILD_CHECK: string;

const App = () => {
  const isNewBuildToolEnabled = BUILD_CHECK === 'enabled';

  useEffect(() => {
    if (isNewBuildToolEnabled) {
      console.log('New build tool configuration enabled');
    } else {
      console.log('Using default build tool configuration');
    }
  }, [isNewBuildToolEnabled]);

  return (
    <FFContextProvider
      apiKey={import.meta.env.PUBLIC_CLIENT_KEY}
      target={{
        identifier: 'USER1'
      }}
      options={{ // OPTIONAL: advanced options
        debug: true
      }}
      fallback={<p>Loading...</p>}
    >
      <SampleComponent />
    </FFContextProvider>
  );
};

export default App;
