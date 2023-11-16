import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { Notes } from "@/service/notesTypes";


export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Notes[]>([
    {
      id: 'id1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
          'Dolorum eum laborum magni nostrum rem repellat unde. Adipisci eum' +
          ' facilis incidunt, inventore labore libero maxime natus officia' +
          ' possimus quos sed, similique.'
    },
    {
      id: 'id2',
      content: 'Das ist eine kurze Notiz. Über gar nichts.'
    },
  ]);

  const newNote = ref('');
  const newNoteRef = ref(null);
  const editMode = ref(false);
  const noteToEdit = ref<Notes>()

  const addNote = () => {
    const currentDate = new Date().getTime(),
        id = currentDate.toString();
    const note = <Notes>{
      id,
      content: newNote.value
    }
    notes.value.unshift(note)
    newNote.value = '';
    if (!newNoteRef.value) return;
    newNoteRef.value.focus();
  }

  const updateNote = (id:string) => {
    editMode.value = true;
    noteToEdit.value = notes.value.find(note => note.id === id);
    newNote.value = noteToEdit?.value?.content ? noteToEdit.value.content: '';
  }

  const submitUpdate = () => {
    notes.value = notes.value.map(note => note.id !== noteToEdit?.value?.id ? note: {...note, content: newNote.value})
    editMode.value = false;
    newNote.value = '';
  }

  const deleteNote = (id:string) => {
    notes.value = notes.value.filter(note => note.id !== id);
  }

  return {
    notes,
    newNote,
    newNoteRef,
    editMode,
    addNote,
    updateNote,
    submitUpdate,
    deleteNote,
  }
})