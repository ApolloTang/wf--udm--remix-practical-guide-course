# 21b Returning and using fetched data

*...routes/notes.jsx*

```jsx
export default function NotesPage() {
  const notes = useLoaderData();


  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}
```

```js
export async function loader() {
  // This "action" function is a server side function.
  // It will not be sent to the client.
  
  const notes = await getStoredNotes();
  return notes;
}
```

