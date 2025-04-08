import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FloatingActionButtons from './FloatingActionButton.tsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db/firebase.tsx';

interface Album {
    id: string;
    name: string;
    album: string;
    genre: string;
    year: number | string;
}

export default function BulgarianBandsTable() {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const albumsCollection = collection(db, 'bulgarian-albums');
                const albumSnapshot = await getDocs(albumsCollection);

                const albumList: Album[] = [];
                for (const docSnapshot of albumSnapshot.docs) {
                    const albumData = docSnapshot.data();

                    albumList.push({
                        id: docSnapshot.id,
                        name: albumData.band,
                        album: albumData.album,
                        genre: albumData.genre,
                        year: albumData.year,
                    });
                }

                setAlbums(albumList);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching albums: ', err);
                setError('Error loading albums');
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []);

    if (loading) return <div>Loading albums...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Група</TableCell>
                        <TableCell align="center">Албум</TableCell>
                        <TableCell align="center">Жанр</TableCell>
                        <TableCell align="center">Година</TableCell>
                        <TableCell align="center">Оценка (1)</TableCell>
                        <TableCell align="center">Добави ревю</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {albums.map((album) => (
                        <TableRow
                            key={album.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {album.name}
                            </TableCell>
                            <TableCell align="center">{album.album}</TableCell>
                            <TableCell align="center">{album.genre}</TableCell>
                            <TableCell align="center">{album.year}</TableCell>
                            <TableCell align="center">
                                0
                            </TableCell>
                            <TableCell align="center">
                                <FloatingActionButtons />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}