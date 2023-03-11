# 18 Server side form handling via action function

*file: / app/route/notes.jsx*

```jsx
  // ....
  
export async function action({ request }) {
  // This "action" function is a server side function.
  // It will not be sent to the client.
  // It will only be triggered when a non "get" method is sent to
  //   <base-url>/notes
  //

  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  // Add validation...
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes');
}

  ); 
  
  // ....
}
```

This form is behaves just normal HTML form: When `<button>` is clicked, it will post to whatever the url this Remix app is running (http://192.168.2.14:3000) using the `post` method (method is specify by the `method` attribute on the `<form>` element).



