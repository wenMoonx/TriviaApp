import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'

type Props = {
  children?: React.ReactChild[]; 
	quiz: string,
  index: number,
  total: number
}

export const QuizBox: React.FC<Props> = ({ quiz, index, total }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          p: 2,
          border: '1px solid black',
          '& > :not(style)': {
            m: 1,
            width: 400,
            height: 200,
          },
        }}
      >
        <Paper variant="outlined" square style={{ backgroundColor: '#a9abad', border: '0' }}>
          {quiz}
        </Paper>
      </Box>
      <Typography variant="h6" component="h6" align="center" style={{ marginTop: 10 }}>
        {index+1} of {total}
      </Typography>
    </>
  );
}
