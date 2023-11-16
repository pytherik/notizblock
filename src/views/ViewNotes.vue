<script setup lang="ts">

import Note from "@/components/Notes/Note.vue";
import { useNotesStore } from "@/stores/notes";
import { storeToRefs } from "pinia";

const notesStore = useNotesStore();
const { notes, newNoteRef, newNote, editMode } = storeToRefs(notesStore);
const { addNote, submitUpdate } = notesStore;

</script>

<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
      <textarea class="textarea"
                ref="newNoteRef"
                v-model="newNote"
                placeholder="Mach deine Notiz...">
      </textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
              v-if="!editMode"
              @click="addNote"
              :disabled="!newNote"
              class="button is-link has-background-success">
            Hinzufügen
          </button>
          <button
              v-else
              @click="submitUpdate"
              :disabled="!newNote"
              class="button is-link has-background-success">
            Übernehmen
          </button>
        </div>
      </div>
    </div>
    <Note v-for="note in notes"
          :key="note.id"
          :note="note"/>
  </div>
</template>

<style scoped>

</style>