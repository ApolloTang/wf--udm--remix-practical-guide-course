import NewNote, { links as newNoteLinks } from '~/components/NewNote';

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export async function action({ request }) {
  // This "action" function is a server side function.
  // It will not be sent to the client.
  // It will only be triggered when a non "get" method is sent to
  //   <base-url>/notes
  //
  
  console.dir(request, {showHidden: false, depth: 2, colors: false});

  /*
  GET /notes 200 - - 10.771 ms
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
  */

  return null
}

export function links() {
  return [...newNoteLinks()];
}
