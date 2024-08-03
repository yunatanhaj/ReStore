import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box
} from '@mui/material';
import agent from '../../app/api/agent';
import { Product } from '../../app/models/product';
import {  OpenAI } from 'openai';
import { json } from 'react-router-dom';



const Generator: React.FC = () => {
  const [inputString, setInputString] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputString(event.target.value);
  };

  const handleGenerateStore = async () => {
    let response =agent.Admin.deleteAllProduct();    
  
 
    const openai = new OpenAI({ apiKey: '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',dangerouslyAllowBrowser: true  });

  const completion =await openai.chat.completions.create({
    messages: [{ role: "system", content: inputString + "Here is the inventory of a store, convert it to a JSON FORMAT with the fields(only this fileds and nothing more):id,name,description,pictureUrl=/images/products/sb-ang1.png, price, brand, type, quantityInStock." }],
    model: "gpt-4o-mini",
  })
  const handleProduct = (product: any) => {
    response= agent.Admin.createProductGEN(product);
    
      };
  console.log(completion.choices[0].message.content);
  let jsonData=JSON.parse(completion!.choices[0]!.message!.content!.replace(/`json|`/g, "").trim());

  jsonData.forEach((product: Product) => handleProduct(product));

   // console.log('Generated Store:', inputString);
    // You can add additional logic here to handle the input string
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        String Input
      </Typography>
      <TextField
        value={inputString}
        onChange={handleInputChange}
        label="store inventory"
        multiline
        rows={10}
        variant="outlined"
        fullWidth
        placeholder="store_inventory"
      />
      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          onClick={handleGenerateStore}
          variant="contained"
          color="primary"
          size="large"
        >
          Generate Store
        </Button>
      </Box>
    </Container>
  );
};

export default Generator;
