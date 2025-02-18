```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
    return () => {
      // Cleanup function
      console.log('Unmounted!');
    };
  }, []);

  return (
    <div>
      {shouldRender && (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setShouldRender(false)}>Unmount</button>
      </div>
      )}
    </div>
  );
}
```