<script setup lang="ts">
import { ref } from 'vue';

// The playlist ID to display in the iframe.
// It's reactive, so when it changes, the iframe will update.
const displayPlaylistId = ref('4qeWUopt2bzOhnxIbWIeaT');

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// IMPORTANT: This token is hardcoded and will expire.
// For a production app, you should implement an OAuth 2.0 flow to get a token.
const token = 'BQDwcS0o4wfhrkg6uGqASOGk2qeSCdf-eS-HCEwfFcyzplRP1vQaYL1OrSfjfZ1c6Si00m-8vx7TKhS4i7KzhjlTbH3_E06oE17lwPv59efol3COdgNViDDxX44TD4MTspmSzmlKBfiRN5OYBt81UUj8yz36M7VSO5cLZ0EMmFdcra6T_h6ABSyul0t2vCJQeMWCDZf6pfGj_jQdqLLnrFzTJUAqi5aiKrFQYTdODGGv4XD8lDr8ue1O59G5pMTo88To4ofFx5gaspkiolx3BpSZJZfJWDMoM8QBWbaVebrMQveAd-RQVBullh7LvYHIH7pZ'; // Replace with a valid token

async function fetchWebApi(endpoint: string, method: string, body?: object) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body)
  });
  return await res.json();
}

const tracksUri = [
  'spotify:track:65c6VCikt7f5sAS1heoYQC', // Existing song
  'spotify:track:0ZcMt3GYvVkBjdomag59NP', // Existing song
  'spotify:track:0hL7tvMKBLW30sige6ctu7', // Existing song
  'spotify:track:2UKK9UEbKlykbmLVP1zWIQ', // Existing song
  'spotify:track:1dFrZr9eMUsFqeag04ClqD', // Existing song
  'spotify:track:0VjIjW4GlUZAMYd2vXMi3b', // Blinding Lights - The Weeknd
  'spotify:track:7qiZfU4dY1lWllzX7mP3wj', // Shape of You - Ed Sheeran
  'spotify:track:2XU0oxnq2qxCpomAAuJY8K', // Dance Monkey - Tones and I
];

const isCreating = ref(false);

async function handleCreatePlaylist() {
  isCreating.value = true;
  try {
    // 1. Get user ID
    const { id: user_id } = await fetchWebApi('v1/me/top/tracks?time_range=long_term&limit=6', 'GET');
    if (!user_id) {
      throw new Error("Could not get user ID. Is the token valid?");
    }

    // 2. Create a new playlist
    const playlist = await fetchWebApi(
      `v1/users/${user_id}/playlists`, 'POST', {
      "name": "My Awesome Playlist",
      "description": `Playlist created on ${new Date().toLocaleString()}`,
      "public": false
    });

    // 3. Add tracks to the new playlist
    await fetchWebApi(
      `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
      'POST'
    );

    console.log(`Playlist "${playlist.name}" created with ID: ${playlist.id}`);

    // 4. Update the iframe to show the new playlist
    displayPlaylistId.value = playlist.id;

  } catch (error) {
    console.error('Error creating playlist:', error);
    alert('Failed to create playlist. Check the console for details. Your token may have expired.');
  } finally {
    isCreating.value = false;
  }
}

</script>
<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-btn @click="handleCreatePlaylist" :loading="isCreating" color="primary" class="mb-4">
            Create and Show My Playlist
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <iframe v-if="displayPlaylistId" title="Spotify Embed: Recommendation Playlist"
            :src="`https://open.spotify.com/embed/playlist/${displayPlaylistId}?utm_source=generator&theme=0`"
            width="100%" height="100%" style="min-height: 360px; border-radius: 12px;" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
          <v-alert v-else type="info">
            Click the button to create a playlist.
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
