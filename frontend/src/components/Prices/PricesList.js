import React from 'react'
import './PricesList.css';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import DeletePrice from './DeletePrice';
import RefreshToken from '../Token/RefreshToken';
import { format } from 'date-fns';
import dateFormat from 'dateformat';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}

class PricesList extends React.Component {
    state = {
        prices: []
    }

    counter = 0;

    componentDidMount() {
        config.headers.Authorization = 'Bearer ' + cookies.get('accessToken');
        Axios.get(`https://localhost:5001/GasStations/` + this.props.props.location.state.id + `/Prices`, config).then(res => {
             this.setState({
                    prices: res.data
             })
            });
    }

    render() {
        return (
        RefreshToken(),
        <div className='pricesListInnerDiv'>
            <h1 className='pricesListTitle'>Kainos</h1>
            <table className='pricesListTable'>
                <thead>
                    <tr>
                    <th>Nr.</th>
                    <th>A98 Kaina</th>
                    <th>A95 Kaina</th>
                    <th>D Kaina</th>
                    <th>Dz Kaina</th>
                    <th>Dujų Kaina</th>
                    <th>Įkėlimo data</th>
                </tr>
                </thead>
                <tbody>
                        {
                            this.counter = 0,
                            this.state.prices.map((item) => (
                            <tr key={item.id}>
                                <td>{this.counter += 1}</td>
                                <td>{item.a98Price}</td>
                                <td>{item.a95Price}</td>
                                <td>{item.dPrice}</td>
                                <td>{item.dzPrice}</td>
                                <td>{item.gasPrice}</td>
                                <td>{dateFormat(item.date, "yyyy-mm-dd hh:mm:ss")}</td>
                                <td>
                                    <div className='priceChangeValues' key={item.id + 'changeValues'}>
                                        <Link to={{pathname: '/changePrice', state: item}} className='iconLink'>
                                            <i className="fas fa-cog" />
                                        </Link>
                                        <i className="fas fa-trash-alt" onClick={event => DeletePrice(item)}/>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
      </div>  
    );
}
}

export default PricesList;