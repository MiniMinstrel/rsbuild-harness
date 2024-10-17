import {
  useFeatureFlagsLoading,
  useFeatureFlags,
} from "@harnessio/ff-react-client-sdk";

const SampleComponent = () => {
  const isLoading = useFeatureFlagsLoading();
  const flags = useFeatureFlags();

  return (
    <div className="content">
        <h1>Below is the example of a running flag</h1>
        <p>SDK ready. Feature flag ENABLE_NEW_REACT_COMPONENT is {isLoading} {JSON.stringify(flags, null, 2)}</p>
      </div>
  );
};

export default SampleComponent;
