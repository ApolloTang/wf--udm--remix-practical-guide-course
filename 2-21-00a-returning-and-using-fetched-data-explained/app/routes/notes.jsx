import {
  redirect,
  Response,
  json
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import NoteList, { links as noteListLinks } from '~/components/NoteList';
import { getStoredNotes, storeNotes } from '~/data/notes';

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
