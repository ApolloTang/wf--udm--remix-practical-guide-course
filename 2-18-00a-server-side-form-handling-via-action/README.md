# 18 Server side form handling via action function

*file: ~/app/route/notes.jsx*

```jsx
export async function action({ request }) {
  console.dir(request, {showHidden: false, depth: 2, colors: false});

  return null
}
```



Console output:

```
  NodeRequest [Request] {
    size: 0,
    follow: 20,
    compress: true,
    counter: 0,
    agent: undefined,
    highWaterMark: 16384,
    insecureHTTPParser: false,
    [Symbol(Body internals)]: {
      body: ReadableStream {
        _state: 'readable',
        _reader: undefined,
        _storedError: undefined,
        _disturbed: false,
        _readableStreamController: [ReadableStreamDefaultController]
      },
      type: null,
      size: null,
      boundary: null,
      disturbed: false,
      error: null
    },
    [Symbol(Request internals)]: {
      method: 'POST',
      redirect: 'follow',
      headers: Headers { [Symbol(query)]: [Array], [Symbol(context)]: null },
      credentials: 'same-origin',
      parsedURL: URL {
        [Symbol(context)]: [URLContext],
        [Symbol(query)]: [URLSearchParams]
      },
      signal: AbortSignal {}
    }
  }
  POST /notes 200 - - 11.767 ms
```



