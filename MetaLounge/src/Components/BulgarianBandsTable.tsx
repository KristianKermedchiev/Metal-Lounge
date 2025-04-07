import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FloatingActionButtons from "./FloatingActionButton.tsx";


function createData(
    name: string,
    album: string,
    genre: string,
    year: number,
    score: number,
    button: string,
) {
    return { name, album, genre, year, score, button };
}

const rows = [
    createData('Dissection', "Storm of the light's bane", 'Black Metal', 1995, 5.0, ''),
    createData('Dissection', "Storm of the light's bane", 'Black Metal', 1995, 5.0, ''),

];

export default function BasicTable() {
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.album}</TableCell>
                            <TableCell align="center">{row.genre}</TableCell>
                            <TableCell align="center">{row.year}</TableCell>
                            <TableCell align="center">{row.score}</TableCell>
                            <TableCell align="center">
                                <FloatingActionButtons/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}