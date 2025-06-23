Okay, here's a React Hooks cheatsheet covering the most common and important ones.

## React Hooks Cheatsheet

**Core Rules of Hooks:**
1.  **Only Call Hooks at the Top Level:** Don't call Hooks inside loops, conditions, or nested functions.
2.  **Only Call Hooks from React Functions:** Call them from React function components or custom Hooks, not regular JavaScript functions.

---

### Basic Hooks

#### 1. `useState`
*   **Purpose:** Add state to functional components.
*   **Syntax:** `const [state, setState] = useState(initialState);`
*   **Returns:** An array with two elements:
    1.  `state`: The current state value.
    2.  `setState`: A function to update the state.
*   **Notes:**
    *   `initialState` can be a value or a function `() => initialValue` for lazy initialization.
    *   `setState` can take a new value or a function `(prevState) => newState`.
    *   Calling `setState` triggers a re-render.
*   **Example:**
    ```jsx
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);
      return (
        <>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </>
      );
    }
    ```

#### 2. `useEffect`
*   **Purpose:** Perform side effects in functional components (e.g., data fetching, subscriptions, manually changing the DOM).
*   **Syntax:** `useEffect(() => { /* effect code */ return () => { /* cleanup code (optional) */ }; }, [dependencies]);`
*   **Arguments:**
    1.  `callback`: Function containing side effect logic. Can optionally return a cleanup function.
    2.  `dependencies` (optional array):
        *   If **omitted**: Effect runs after every render.
        *   If **`[]` (empty array)**: Effect runs only once after the initial render (mount) and cleanup runs on unmount.
        *   If **`[prop, state]`**: Effect runs after initial render and whenever any dependency value changes.
*   **Notes:**
    *   Cleanup function is important for preventing memory leaks (e.g., unsubscribing, clearing timers).
*   **Example (Data Fetching):**
    ```jsx
    import React, { useState, useEffect } from 'react';

    function UserData({ userId }) {
      const [user, setUser] = useState(null);

      useEffect(() => {
        console.log('Effect running for userId:', userId);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then(response => response.json())
          .then(data => setUser(data));

        // Cleanup (optional, not strictly needed for a single fetch but good practice for subscriptions)
        return () => {
          console.log('Cleaning up effect for userId:', userId);
          // e.g., abortController.abort(); if you were using AbortController
        };
      }, [userId]); // Re-run effect if userId changes

      if (!user) return <p>Loading...</p>;
      return <p>Name: {user.name}</p>;
    }
    ```

#### 3. `useContext`
*   **Purpose:** Consume values from React Context without prop drilling.
*   **Syntax:** `const value = useContext(MyContext);`
*   **Argument:** `MyContext`: The context object created by `React.createContext()`.
*   **Returns:** The current context value for `MyContext`, determined by the `value` prop of the nearest `<MyContext.Provider>` above the component in the tree.
*   **Example:**
    ```jsx
    import React, { createContext, useContext } from 'react';

    const ThemeContext = createContext('light'); // Default value

    function App() {
      return (
        <ThemeContext.Provider value="dark">
          <ThemedButton />
        </ThemeContext.Provider>
      );
    }

    function ThemedButton() {
      const theme = useContext(ThemeContext);
      return <button style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#333' }}>
        I am a {theme} button
      </button>;
    }
    ```

---

### Additional Hooks

#### 4. `useReducer`
*   **Purpose:** An alternative to `useState` for managing more complex state logic, or when the next state depends on the previous one.
*   **Syntax:** `const [state, dispatch] = useReducer(reducer, initialArg, init?);`
*   **Arguments:**
    1.  `reducer`: A function `(state, action) => newState`.
    2.  `initialArg`: The initial state value.
    3.  `init` (optional): A function to lazily compute the initial state: `init(initialArg)`.
*   **Returns:**
    1.  `state`: The current state.
    2.  `dispatch`: A function to dispatch actions to the reducer.
*   **Example:**
    ```jsx
    import React, { useReducer } from 'react';

    const initialState = { count: 0 };

    function reducer(state, action) {
      switch (action.type) {
        case 'increment': return { count: state.count + 1 };
        case 'decrement': return { count: state.count - 1 };
        case 'reset': return { count: action.payload };
        default: throw new Error();
      }
    }

    function Counter() {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
        </>
      );
    }
    ```

#### 5. `useCallback`
*   **Purpose:** Memoize callback functions, preventing them from being re-created on every render unless their dependencies change. Useful for performance optimization, especially when passing callbacks to memoized child components.
*   **Syntax:** `const memoizedCallback = useCallback(() => { /* callback logic */ }, [dependencies]);`
*   **Returns:** A memoized version of the callback that only changes if one of the dependencies has changed.
*   **Example:**
    ```jsx
    import React, { useState, useCallback } from 'react';

    const MyButton = React.memo(({ onClick, children }) => {
      console.log('Button rendered:', children);
      return <button onClick={onClick}>{children}</button>;
    });

    function Parent() {
      const [count, setCount] = useState(0);
      const [otherState, setOtherState] = useState(false);

      // Without useCallback, handleClick would be a new function on every Parent render
      // causing MyButton to re-render even if its props didn't visually change.
      const handleClick = useCallback(() => {
        setCount(c => c + 1);
      }, []); // No dependencies, so handleClick is created once.

      return (
        <>
          <p>Count: {count}</p>
          <MyButton onClick={handleClick}>Increment Count</MyButton>
          <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
        </>
      );
    }
    ```

#### 6. `useMemo`
*   **Purpose:** Memoize the result of an expensive computation. The function will only re-run if one of its dependencies has changed.
*   **Syntax:** `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
*   **Returns:** The memoized value.
*   **Example:**
    ```jsx
    import React, { useState, useMemo } from 'react';

    function ExpensiveCalculationComponent({ num1, num2 }) {
      const [unrelatedState, setUnrelatedState] = useState(0);

      const expensiveResult = useMemo(() => {
        console.log('Calculating expensive result...');
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) { // Simulate expensive calculation
          sum += (num1 * num2 * i) % 1000;
        }
        return num1 + num2 + (sum % 10); // Simplified result for demo
      }, [num1, num2]); // Only re-calculate if num1 or num2 changes

      return (
        <>
          <p>Expensive Result: {expensiveResult}</p>
          <p>Unrelated State: {unrelatedState}</p>
          <button onClick={() => setUnrelatedState(s => s + 1)}>Change Unrelated State</button>
        </>
      );
    }
    ```

#### 7. `useRef`
*   **Purpose:**
    1.  Access DOM elements directly.
    2.  Store a mutable value that does *not* cause a re-render when it changes.
*   **Syntax:** `const myRef = useRef(initialValue);`
*   **Returns:** A mutable ref object whose `.current` property is initialized to `initialValue`.
*   **Notes:**
    *   When used for DOM refs, React sets `.current` to the DOM element after render and `null` on unmount.
    *   Changing `ref.current` does *not* trigger a re-render.
*   **Example (DOM access & mutable value):**
    ```jsx
    import React, { useRef, useEffect, useState } from 'react';

    function TextInputWithFocusButton() {
      const inputEl = useRef(null); // For DOM element
      const renderCount = useRef(0); // For mutable value (doesn't trigger re-render)
      const [text, setText] = useState('');

      useEffect(() => {
        renderCount.current = renderCount.current + 1;
      });

      const onButtonClick = () => {
        inputEl.current.focus(); // Accessing the DOM element
      };

      return (
        <>
          <input ref={inputEl} type="text" value={text} onChange={e => setText(e.target.value)} />
          <button onClick={onButtonClick}>Focus the input</button>
          <p>Component has rendered {renderCount.current} times.</p>
          <p>Current text: {text}</p>
        </>
      );
    }
    ```

#### 8. `useLayoutEffect`
*   **Purpose:** Similar to `useEffect`, but fires *synchronously* after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.
*   **Syntax:** Same as `useEffect`.
*   **Notes:**
    *   Prefer `useEffect` when possible to avoid blocking visual updates.
    *   Useful for DOM measurements (e.g., getting scroll position or element dimensions) right after mutations, before the browser paints.
*   **Example (less common, usually for specific layout needs):**
    ```jsx
    import React, { useState, useLayoutEffect, useRef } from 'react';

    function Tooltip() {
      const [show, setShow] = useState(false);
      const [position, setPosition] = useState({ top: 0, left: 0 });
      const buttonRef = useRef(null);
      const tooltipRef = useRef(null);

      useLayoutEffect(() => {
        if (show && buttonRef.current && tooltipRef.current) {
          const btnRect = buttonRef.current.getBoundingClientRect();
          const tooltipRect = tooltipRef.current.getBoundingClientRect();
          setPosition({
            top: btnRect.bottom + window.scrollY,
            left: btnRect.left + (btnRect.width / 2) - (tooltipRect.width / 2) + window.scrollX
          });
        }
      }, [show]); // Re-calculate when `show` changes

      return (
        <>
          <button ref={buttonRef} onClick={() => setShow(!show)}>
            Toggle Tooltip
          </button>
          {show && (
            <div ref={tooltipRef} style={{ position: 'absolute', top: position.top, left: position.left, background: 'black', color: 'white', padding: '5px' }}>
              I'm a tooltip!
            </div>
          )}
        </>
      );
    }
    ```

#### 9. `useImperativeHandle`
*   **Purpose:** Customize the instance value that is exposed to parent components when using `ref`. Should be used with `forwardRef`.
*   **Syntax:** `useImperativeHandle(ref, createHandle, [dependencies]);`
*   **Arguments:**
    1.  `ref`: The ref passed from the parent.
    2.  `createHandle`: A function that returns the imperative methods/values to expose.
    3.  `dependencies`: If present, `createHandle` is re-run only if dependencies change.
*   **Example:**
    ```jsx
    import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

    const FancyInput = forwardRef((props, ref) => {
      const inputRef = useRef();
      useImperativeHandle(ref, () => ({
        focusInput: () => {
          inputRef.current.focus();
        },
        getValue: () => {
          return inputRef.current.value;
        }
      }));
      return <input ref={inputRef} type="text" {...props} />;
    });

    function App() {
      const fancyInputRef = useRef();
      const [value, setValue] = useState('');

      const handleFocus = () => {
        fancyInputRef.current.focusInput();
      };
      const handleShowValue = () => {
        setValue(fancyInputRef.current.getValue());
      }

      return (
        <>
          <FancyInput ref={fancyInputRef} placeholder="Enter text..." />
          <button onClick={handleFocus}>Focus Fancy Input</button>
          <button onClick={handleShowValue}>Show Value</button>
          <p>Value: {value}</p>
        </>
      );
    }
    ```

#### 10. `useDebugValue`
*   **Purpose:** Display a label for custom Hooks in React DevTools.
*   **Syntax:** `useDebugValue(value, formatFn?)`
*   **Arguments:**
    1.  `value`: The value to display.
    2.  `formatFn` (optional): A function that receives the debug value and returns a formatted display value. Only called when DevTools are open.
*   **Note:** Primarily useful for custom Hook authors.
*   **Example (inside a custom hook):**
    ```jsx
    import React, { useState, useDebugValue } from 'react';

    function useFriendStatus(friendID) {
      const [isOnline, setIsOnline] = useState(null);

      // ... logic to subscribe to friend's status ...

      // Display a label in DevTools
      useDebugValue(isOnline ? 'Online' : 'Offline');
      // Or with a formatter:
      // useDebugValue(isOnline, status => status ? '🟢 Online' : '🔴 Offline');

      return isOnline;
    }
    ```

#### 11. `useId`
*   **Purpose:** Generate unique, stable IDs that are consistent between server and client rendering. Useful for accessibility attributes like `htmlFor` and `aria-labelledby`.
*   **Syntax:** `const id = useId();`
*   **Returns:** A string representing a unique ID.
*   **Example:**
    ```jsx
    import React, { useId } from 'react';

    function MyForm() {
      const emailId = useId();
      const passwordId = useId();

      return (
        <form>
          <div>
            <label htmlFor={emailId}>Email:</label>
            <input id={emailId} type="email" />
          </div>
          <div>
            <label htmlFor={passwordId}>Password:</label>
            <input id={passwordId} type="password" />
          </div>
        </form>
      );
    }
    ```

---

This cheatsheet should give you a good overview. Remember to check the official React documentation for the most detailed and up-to-date information!