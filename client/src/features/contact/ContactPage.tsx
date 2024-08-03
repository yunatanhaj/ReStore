import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

export default function ContactPage() {

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
      
        const handleSubmit = (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log('Name:', name);
          console.log('Email:', email);
          console.log('Message:', message);
        };
    
    return (
        <>
        <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 4,
          p: 4,
          boxShadow: 1,
          borderRadius: 1,
        }}
      >
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Contact Us
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </Box>
    </Container>
        </>

    )
}