import Head from 'next/head'
import { useReducer, useRef } from 'react'
import { nanoid } from 'nanoid'

interface Note {
  id: string;
  name: string;
}

type NoteState = Note[];

type NoteAction = {
  type: string;
  payload: string;
}

const initialState: Note[] = [];

const reducer = (state: NoteState = [], action: NoteAction) => {
  switch (action.type) {
    case "note/add": {
      return [
        ...state, {
          id: nanoid(),
          name: action.payload
        }
      ];
    }
    case "note/remove": {
      return state.filter((note) => note.id != action.payload);
    }
    default:
      return state;
  }
}

export default function ReducerDemo2() {
  const [notes, dispatch] = useReducer(
    reducer
    , initialState
  );

  const textRef = useRef<HTMLInputElement>(null);

  function addNote() {
    dispatch({
      type: "note/add",
      payload: textRef.current!.value
    });
    textRef.current!.value = "";
  }

  function removeNote(id:string) {
    dispatch({
      type: "note/remove",
      payload:id
    });

  }

  return (
    <div>
      <div>
        <input type="text" ref={textRef} />
        <button onClick={addNote}>add</button>
      </div>
      <ul>
        {notes!.map(
          (note) => {
            return (
              <li key={note.id}>
                {note.id} - {note.name}
                <button onClick={()=>removeNote(note.id)}>-</button>
              </li>
            )
          }
        )}
      </ul>
    </div>
  );
}