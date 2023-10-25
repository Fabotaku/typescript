
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Yonaguni",
    details: {
        author: "Bad Bunny",
        year: 2021
    }
}
const song: string = "Safaera";
const {
    song:anothersong, 
    songDuration: duration, 
    audioVolume: audio,
    details
} = audioPlayer; 
const {author} = details;
const {year} = details;

// console.log(song);
// console.log(duration);
// console.log(audio);
// console.log(author);
// console.log(year);
// console.log('song:' + anothersong+ ' by:' + audioPlayer.details.author + ' year:' + audioPlayer.details.year);


const [p1,p2,trunks = 'not found']:string[] = ['Goku', 'Vegeta'];

console.log(trunks);

export {};