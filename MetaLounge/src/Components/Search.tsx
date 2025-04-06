import * as React from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchButton() {
    const [searchText, setSearchText] = React.useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleSearchClick = () => {
        console.log('Search query:', searchText);
        // Implement search functionality here
    };

    return (
        <TextField
            value={searchText}
            onChange={handleSearchChange}
            variant="outlined"
            placeholder="Search"
            sx={{ width: 400,  }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleSearchClick} edge="end">
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}
