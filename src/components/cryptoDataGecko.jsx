import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { GlobalState } from '../GlobalState';

const NewCryptoTable = () => {
    const state = useContext(GlobalState)
    const cryptos = state.coinMarketAPI.crypto[0]
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <Container>

            <Table responsive="lg" hover>
                <thead>
                    <tr>
                        <th>Rankings</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24 Hour Change</th>
                        <th>Market Cap</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptos.map(crypto => {
                        return (<>
                            <tr>
                                <td>{crypto.market_cap_rank}</td>
                                <td><img src={crypto.image} alt={crypto.name} width="40px" /> {crypto.name} </td>
                                <td style={{ width: '12%' }}>$ {formatter.format(crypto.current_price)}</td>
                                <td style={{ color: Math.sign(crypto.price_change_percentage_24h) === -1 ? "red" : "green" }} id="dayChange">{formatter.format(crypto.price_change_percentage_24h)} %</td>
                                <td style={{ width: '17%' }}>$  {formatter.format(crypto.market_cap)}</td>
                                <td style={{ width: '17%' }}>$ {formatter.format(crypto.total_volume)}</td>
                            </tr>
                        </>)
                    })}

                </tbody>
            </Table>
        </Container>
    )

}

export default NewCryptoTable
