interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    song: "Mess",
    songDuration: 36,
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}

const {details: {author:autor}} = audioPlayer;
console.log('Song: ',autor);

const dbz: string[] = ['Goku', 'Vegeta'];

const [, , trunks = 'Not Found']:string[] = dbz;

console.error('Personaje 3: ', trunks);