import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/selectors';
import { TextField, Box } from '@mui/material';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <Box
      sx={{ padding: '20px' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      maxWidth={500}
      margin="auto"
    >
      <TextField
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="Name"
        variant="outlined"
        label="Filter contacts by name"
      />
    </Box>
  );
}
