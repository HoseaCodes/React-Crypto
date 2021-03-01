import React, { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { GlobalState } from '../GlobalState';

const CryptoTable = () => {
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
                        <th>7 Day Change</th>
                        <th>Market Cap</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptos.map(crypto => {
                        return (<>
                            <tr key={crypto.id}>
                                <td>{crypto.cmc_rank}</td>
                                <td>{crypto.symbol} {crypto.name} </td>
                                <td style={{ width: '12%' }}>$ {formatter.format(Math.round(crypto.quote.USD.price * 100) / 100)}</td>
                                <td style={{ color: Math.sign(crypto.quote.USD.percent_change_24h) === -1 ? "red" : "green" }} id="dayChange">{formatter.format(crypto.quote.USD.percent_change_24h)} %</td>
                                <td style={{ color: Math.sign(crypto.quote.USD.percent_change_7d) === -1 ? "red" : "green" }} id="weekChange">{formatter.format(crypto.quote.USD.percent_change_7d)} %</td>
                                <td style={{ width: '17%' }}>$  {formatter.format(crypto.quote.USD.market_cap)}</td>
                                <td style={{ width: '17%' }}>$ {formatter.format(crypto.quote.USD.volume_24h)}</td>
                            </tr>
                        </>)
                    })}

                </tbody>
            </Table>
        </Container>
    )

}

export default CryptoTable
