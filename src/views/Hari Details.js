import React from "react";
import { Line } from "react-chartjs-2";
import { Row,Col, Card, CardHeader, CardTitle, CardBody,} from "reactstrap";


export default class HariDetails extends React.Component{
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
              titleFontColor: "#A52A2A",
              bodyFontColor: "#000000",
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
                    color: "rgba(165,42,42,0.0)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    suggestedMin: 30,
                    suggestedMax: 100,
                    padding: 20,
                    fontColor: "#a52a2a",
                  },
                },
              ],
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(165,42,42,0.1)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "a52a2a",
                  },
                },
              ],
            },
          };
          let chartExample2 = {
            data: (canvas) => {
              let ctx = canvas.getContext("2d");
          
              let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
          
              gradientStroke.addColorStop(1, "rgba(165,42,42,0.2)");
              gradientStroke.addColorStop(0.4, "rgba(165,42,42,0.4)");
              gradientStroke.addColorStop(0, "rgba(165,42,42,1.9)"); //brown colors
          
              return {
                labels: ["JUN","JUL","AUG","SEP","OCT","NOV","DEC","JAN","FEB","MAR","APR"],
                datasets: [
                  {
                    label: "Data",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: "#a52a2a",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: "#a52a2a",
                    pointBorderColor: "rgba(165,42,42,0)",
                    pointHoverBackgroundColor: "#1f8ef1",
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [67,76,56,45,87,56,94,76,87,65,89],
                  },
                ],
              };
            },
            options: chart1_2_options,
          };
        return(
            <>
            <div className= 'content'> 
            <Row>
            <Col>
                <tr>
                    <td style={{width:"220px"}}>{"Name:"}</td>
                    <td style={{color:"black"}}>{"HARI P"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Gender:"}</td>
                    <td style={{color:"black"}}>{"Male"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Father Name:"}</td>
                    <td style={{color:"black"}}>{"PARTHIBAN"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Mother Name:"}</td>
                    <td style={{color:"black"}}>{"MANONMANI"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Date of Birth:"}</td>
                    <td style={{color:"black"}}>{"02.06.1997"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Religion:"}</td>
                    <td style={{color:"black"}}>{"Hindu"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Father Occupation:"}</td>
                    <td style={{color:"black"}}>{"Salesman"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"EmailId:"}</td>
                    <td style={{color:"black"}}>{"harip@gmail.com"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Admission Date:"}</td>
                    <td style={{color:"black"}}>{"05.01.2019"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Class:"}</td>
                    <td style={{color:"black"}}>{"10"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Section:"}</td>
                    <td style={{color:"black"}}>{"B"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Roll No:"}</td>
                    <td style={{color:"black"}}>{"410815105004"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Address:"}</td>
                    <td style={{color:"black"}}>{"No:10, West car street, Chidambaram-608001"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Phone:"}</td>
                    <td style={{color:"black"}}>{"+917010998765"}</td>
                </tr>
                </Col>
                <Col>
                
                <img
                      alt="..."
                      className="avatar"
                      style={{ width: '50%', height: '50%' }}
                      src={require("assets/img/anime3.png").default}
                    />
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
                                            <strong style={{color:'#a52a2a'}}>Hari acadamic scores</strong>
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