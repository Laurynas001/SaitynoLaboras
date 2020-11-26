import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import './GetPrices.css';
import CanvasJSReact from '../../lib/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}

const dataPointsA98 = [];
const dataPointsA95 = [];
const dataPointsD = [];
const dataPointsDz = [];
const dataPointsGas = [];

class GetPrices extends React.Component {
    state = {
       prices: null
   }
   
    	componentDidMount(){
            var chart = this.chart;
        if (this.state.prices == null) {
            Axios.get(`https://localhost:5001/GasStations/` + this.props.location.state.id + `/Prices`, config).then(res => {
                this.setState({
                    prices: res.data
                })
                console.log(this.state)
                for (var i = 0; i < this.state.prices.length; i++) {
                    dataPointsA98.push({
                        x: new Date(this.state.prices[i].date),
                        y: this.state.prices[i].a98Price
                    });
                    dataPointsA95.push({
                        x: new Date(this.state.prices[i].date),
                        y: this.state.prices[i].a95Price
                    });
                    dataPointsD.push({
                        x: new Date(this.state.prices[i].date),
                        y: this.state.prices[i].dPrice
                    });
                    dataPointsDz.push({
                        x: new Date(this.state.prices[i].date),
                        y: this.state.prices[i].dzPrice
                    });
                    dataPointsGas.push({
                        x: new Date(this.state.prices[i].date),
                        y: this.state.prices[i].gasPrice
                    });
                    
			}
			    chart.render();
                })
            };
            this.setState({
                prices: null
            })
            console.log(this.state.prices)
};

    render() {
        const options = {
            theme: "dark",
            title: {
                text: "Degalų kainos"
            },
            axisY: {
                title: "Litro kaina Eurais",
                prefix: "€"
            },
            data: [{
                type: "line",
                name: 'A98',
                showInLegend: true,
                xValueFormatString: "YYYY MMM DD",
                yValueFormatString: "$#,##0.00",
                dataPoints: dataPointsA98
            },
            {
                type: "line",
                name: 'A95',
                showInLegend: true,
                xValueFormatString: "YYYY MMM",
                yValueFormatString: "$#,##0.00",
                dataPoints: dataPointsA95
                },
            {
                type: "line",
                name: 'D',
                showInLegend: true,
                xValueFormatString: "YYYY MMM",
                yValueFormatString: "$#,##0.00",
                dataPoints: dataPointsD
                },
             {
                type: "line",
                name: 'Dz',
                showInLegend: true,
                xValueFormatString: "YYYY MMM",
                yValueFormatString: "$#,##0.00",
                dataPoints: dataPointsDz
                },
              {
                type: "line",
                name: 'Gas',
                showInLegend: true,
                xValueFormatString: "YYYY MMM",
                yValueFormatString: "$#,##0.00",
                dataPoints: dataPointsGas
            }
            ]
        }
        return (
            <div className='pricesOutterDiv'>
                <div className='pricesInnerDiv'>
                    {/* <CanvasJSChart options={options} onRef={ref => this.chart = ref}/> */}
                </div>
		    </div>
		);
	}
}

export default GetPrices;