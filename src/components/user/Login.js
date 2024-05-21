import { Grid, TextField, Typography } from '@mui/material';
import { Button } from 'bootstrap';
import { Container } from 'reactstrap';

<Container
  component='main'
  maxWidth='xs'
  style={{ margin: '200px auto' }}
>
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography component='h1' variant='h5'>
        로그인
      </Typography>
    </Grid>
  </Grid>

  <form noValidate onSubmit={loginHandler}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          variant='outlined'
          required
          fullWidth
          id='email'
          label='email address'
          name='email'
          autoComplete='email'
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant='outlined'
          required
          fullWidth
          name='password'
          label='on your password'
          type='password'
          id='password'
          autoComplete='current-password'
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
        >
          로그인
        </Button>
      </Grid>
    </Grid>
  </form>
</Container>;
