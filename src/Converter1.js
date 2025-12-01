import React, { useEffect } from 'react'
import { Button, Card, Form, Input, Select,} from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { Option } from 'antd/es/mentions'

function Converter1() {
    const apiUrl = 'https://api.coingecko.com/api/v3/exchange_rates';
    const names = 
    [
        {
            value: "jack",
            leble: "Jack"
        },

         {
            value: "luc",
            leble: "Luc"
        },

         {
            value: "yiminghe",
            leble: "Yiming"
        },

    ];

    

    useEffect(() => {
   
        fetch(apiUrl);

    }, []);

    
    async function fetchData(params) {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        
        const data = jsonData.rates
        console.log(data);
    }


    

  return (
    <div className='container'>
        <Card className="crpto-card" title={<h1>cryto-converter</h1>}>
            <Form>
                <FormItem>
                    <Input />
                </FormItem>
            </Form>
            <div className="select-box">
                <Select options={names} defaultValue="lucy" style={{ width: 160 }} > </Select>
                <Select options={names} defaultValue="lucy" style={{ width: 160 }} > </Select>
            </div>
            <p>2 Bitcoin = 12 Ethereum</p>
        </Card>
    </div>
    
  )
}


export default Converter1