// methods that modify the original array
//         Mutability
//shift()

const colors = ['Yellow', 'Black', 'White', 'Green', 'Blue']
const removeColors = colors.shift()

console.log(colors)
console.log(removeColors)

//unshift()
const newColors = colors.unshift('Pink', 'Grey')
console.log(colors)
console.log(newColors)


//Exercises : Managing playlist
function managePlaylist(playlist, newSong){
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}
const initialPlaylist = ['Shape of You - Ed Sheeran',
'Blinding Lights - The Weeknd',
'Dance Monkey - Tones and I',
'Drivers License - Olivia Rodrigo']
const newSongToAdd = 'Save Your Tears - The Weeknd'

const updatePlaylist = managePlaylist(initialPlaylist, newSongToAdd)


console.log('Initial playlist: ', initialPlaylist)
console.log('New song to add: ', newSongToAdd)
console.log('Update playlist: ', updatePlaylist)