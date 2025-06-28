/**
 * soundManager - Simple Audio Playback Controller
 * Author: MaryGiochi
 * License: Custom
 */

const soundManager = {
    /**
     * Plays a sound from the specified file path.
     * @param {string} src - Path to the audio file.
     * @param {number} [volume=1] - Volume level (0.0 to 1.0).
     */
    play(src, volume = 1) {
        if (typeof src !== 'string' || src.trim() === '') {
            console.error('[soundManager] Invalid audio source.');
            return;
        }
        if (typeof volume !== 'number' || volume < 0 || volume > 1) {
            console.warn('[soundManager] Invalid volume. Defaulting to 1.');
            volume = 1;
        }

        const audio = new Audio(src);
        audio.volume = volume;
        audio.play().catch(err => {
            console.error('[soundManager] Failed to play sound:', err);
        });
    }
};

// Example usage:
// soundManager.play('assets/sounds/click.mp3', 0.8);

module.exports = soundManager;
