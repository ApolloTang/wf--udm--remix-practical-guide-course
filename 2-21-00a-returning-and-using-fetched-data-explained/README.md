# 21 Returning and using fetched data explained



```jsx
export default function NotesPage() {
  const useLoaderData_demo = useLoaderData();
  console.log('useLoaderData_demo: ', useLoaderData_demo)

  return (
    <main>
      <NewNote />
      {useLoaderData_demo}
      {/* <NoteList notes={notes} /> */}
    </main>
  );
}
```



```js
export async function loader() {
  // This "action" function is a server side function.
  // It will not be sent to the client.

  const someRandomNumber = Math.random()
  console.log('xxxxxxxxxx this message is from loader')
  const dataToClient = 'this is from loader function ' + someRandomNumber

  // return dataToClient;

  // return new Response(
  //   JSON.stringify(dataToClient),
  //   {headers: {'Content-Type': 'application/json'}});

  return json(dataToClient)
}
```

