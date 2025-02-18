# useEffect Cleanup Function Not Triggering on Unmount

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function doesn't seem to execute when the component unmounts.  The example shows a simple counter component, but the expected cleanup console log is missing. The solution provides a corrected version and highlights why the original code behaved unexpectedly.