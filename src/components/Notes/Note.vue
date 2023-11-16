<script setup lang="ts">

import { computed } from "vue";
import { useNotesStore } from "@/stores/notes";

const notesStore = useNotesStore();
const { deleteNote, updateNote } = notesStore;

const { note } = defineProps(['note']);
const characterLength = computed(() => {
  const messageLength = note.content.length;
  const oneOrMore = messageLength > 1 ? 'Buchstaben': 'Buchstabe'
  return `${messageLength} ${oneOrMore}`;
})

</script>

<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a @click.prevent="updateNote(note.id)" class="card-footer-item">Bearbeiten</a>
      <a  @click.prevent="deleteNote(note.id)" class="card-footer-item">Löschen</a>
    </footer>
  </div>

</template>

<style scoped>

</style>