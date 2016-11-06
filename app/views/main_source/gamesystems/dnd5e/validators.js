// Validation Functions

export const NewPlayerSaved = (player) => {
  // Receive validation from Web server that new player has been saved.
    return true;
}
export const Stats = (stats) => {
  // Validate correct names and valid range for Stats (e.g. Strength, Wisdom, Charisma, etc.)
  return true;
}
export const AllowMessage = (player, msg) => {
  // request player specific restrictions via Electron IPC
  return true;
}
