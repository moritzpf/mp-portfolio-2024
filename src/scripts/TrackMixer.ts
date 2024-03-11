import * as Tone from 'tone';

class TrackMixer {
  private tracks: Map<string, Tone.Player>;
  private volumeControls: Map<string, Tone.Volume>;

  constructor() {
    this.tracks = new Map();
    this.volumeControls = new Map();
  }

  // Use this method to load a track and wait until it's fully loaded
  async loadTrack(name: string, url: string): Promise<void> {
    // Create a new player without starting it
    const player = new Tone.Player();
    const volume = new Tone.Volume().toDestination();
    player.connect(volume);
    
    // Load the buffer asynchronously
    await player.load(url);

    // Once loaded, store the player and its volume control
    this.tracks.set(name, player);
    this.volumeControls.set(name, volume);
  }

  setVolume(name: string, db: number): void {
    const volumeControl = this.volumeControls.get(name);
    if (!volumeControl) {
      console.error(`Track '${name}' not found`);
      return;
    }
    volumeControl.volume.value = db;
  }

  playTrack(name: string): void {
    const track = this.tracks.get(name);
    if (!track) {
      console.error(`Track '${name}' not found`);
      return;
    }
    if (track.loaded) { // Check if the track is loaded before playing
      track.stop(); // Ensure the track is stopped before starting playback
      track.start();
    } else {
      console.error(`Track '${name}' is not loaded yet.`);
    }
  }

  // Additional utility methods can be added here (pause, stop, etc.)
}

export default TrackMixer;
