import { redirect } from '@remix-run/node';

import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import NoteList, { links as noteListLinks } from '~/components/NoteList';
import { getStoredNotes, storeNotes } from '~/data/notes';

export default function NotesPage() {
  const notes = [ 
    {"title":"Test","content":"Test","id":"2022-10-19T09:23:11.183Z"},
    {"title":"A second note","content":"Remix is awesome!","id":"2022-10-19T10:28:10.980Z"} 
  ];
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export async function action({ request }) {
  // This "action" function is a server side function.
  // It will not be sent to the client.
  // It will only be triggered when a non "get" method is sent to
  //   <base-url>/notes
  //

  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  // noteData will be an object with the shape:
  // {
  //   title: ....,
  //   content: ...
  // }
  
  // @TODO Add validation...
  
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes');
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}
