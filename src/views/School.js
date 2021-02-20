import React from "react";
import { Line } from "react-chartjs-2";
import { Row,Col,Table, Card, CardHeader, CardTitle, CardBody,} from "reactstrap";


export default class School extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
   render(){
    let chart1_2_options = {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent",
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                padding: 20,
                fontColor: "#9a9a9a",
              },
            },
          ],
          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.1)",
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a",
              },
            },
          ],
        },
      };
      let chartExample2 = {
        data: (canvas) => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
          gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
          return {
            labels: ["ABIRAM", "PRAKASH", "UDHAYAN", "VIGNESH"],
            datasets: [
              {
                label: "Data",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#1f8ef1",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#1f8ef1",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#1f8ef1",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: [91,76,54,84],
              },
            ],
          };
        },
        options: chart1_2_options,
      };

       return(
           <>
        <div className='content'>
            
           
            <Row>
                <Col>
                     <Table>
                         <thead>
                             <tr>
                             <th>ROLL NUMBER</th>
                             <th>NAME</th>
                             <th>MARKS</th>
                             </tr>
                             </thead>
                            <tbody>
                                <tr>
                                    <td>410815105002</td>
                                    <td>Abiram</td>
                                    <td>91</td>
                                    </tr>
                                <tr>
                                    <td>410815105018</td>
                                    <td>Prakash</td>
                                    <td>76</td>
                                </tr>
                                <tr>
                                    <td>410815105028</td>
                                    <td>udhayan</td>
                                    <td>54</td>
                                </tr>
                                <tr>
                                    <td>410815105030</td>
                                    <td>vignesh</td>
                                    <td>84</td>
                                </tr>
                            </tbody>
                     </Table>
                
                </Col> 
                 </Row>
                
                <br/>
                <hr/>
                <br/>
                       <Row>
                           <Col>
                                <Card>
                                    <CardHeader>
                                        <Row>
                                            <Col>
                                            
                                            <CardTitle>
                                            <>Stundent Marks</>
                                           </CardTitle>
                                            
                                    </Col>
                                        </Row>

                                    </CardHeader>
                                    <CardBody>
                                        <Line
                                        data={chartExample2.data}
                                        options={chartExample2.options}
                                        />
                                    </CardBody>
                                </Card>
                           </Col>
                       </Row>
             </div>
           </>
       )
   }
}