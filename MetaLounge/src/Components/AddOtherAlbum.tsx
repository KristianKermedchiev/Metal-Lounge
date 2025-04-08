import React, { useState } from "react";
import { db } from "../db/firebase";
import { collection, addDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const AddOtherAlbum = () => {
    const [band, setBand] = useState('');
    const [album, setAlbum] = useState('');
    const [country, setCountry] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "other-albums"), {
                band,
                album,
                country,
                genre,
                year: parseInt(year),
            });

            navigate("/other-bands");
            console.log("Album added with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding album: ", error);
        }
    };

    return (
        <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
            <h2 style={{ textAlign: 'center' }}>Добави нов албум</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Група"
                    variant="outlined"
                    fullWidth
                    value={band}
                    onChange={(e) => setBand(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Албум"
                    variant="outlined"
                    fullWidth
                    value={album}
                    onChange={(e) => setAlbum(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Държава"
                    variant="outlined"
                    fullWidth
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Жанр"
                    variant="outlined"
                    fullWidth
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Година"
                    variant="outlined"
                    fullWidth
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3,
                        mb: 2,
                        py: 1.5,
                        backgroundColor: '#333',
                        height: 54,
                        '&:hover': {
                            backgroundColor: '#555',
                        },
                    }}
                >
                    Добави
                </Button>
            </form>
        </Box>
    );
};

export default AddOtherAlbum;
