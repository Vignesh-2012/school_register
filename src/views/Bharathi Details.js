import React from "react";
import { Line } from "react-chartjs-2";
import { Row,Col, Card, CardHeader, CardTitle, CardBody,} from "reactstrap";


export default class BharathiDetails extends React.Component{
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
                    suggestedMin: 30,
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
                labels: ["JUN","JUL","AUG","SEP","OCT","NOV","DEC","JAN","FEB","MAR","APR"],
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
                    data: [89,98,76,82,85,67,54,45,81,72,94],
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
                    <td style={{color:"black"}}>{"BHARATHI P"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Gender:"}</td>
                    <td style={{color:"black"}}>{"Male"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Father Name:"}</td>
                    <td style={{color:"black"}}>{"PARAMASIVAM"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Mother Name:"}</td>
                    <td style={{color:"black"}}>{"JAYA"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Date of Birth:"}</td>
                    <td style={{color:"black"}}>{"20.10.1997"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Religion:"}</td>
                    <td style={{color:"black"}}>{"Hindu"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Father Occupation:"}</td>
                    <td style={{color:"black"}}>{"Buisness"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"EmailId:"}</td>
                    <td style={{color:"black"}}>{"bharathijp@gmail.com"}</td>
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
                    <td style={{color:"black"}}>{"410815105003"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Address:"}</td>
                    <td style={{color:"black"}}>{"No:11/10, Bazzar street, Chidambaram-608001"}</td>
                </tr>
                <br/>
                <tr>
                    <td style={{width:"220px"}}>{"Phone:"}</td>
                    <td style={{color:"black"}}>{"+919894797530"}</td>
                </tr>
                </Col>
                <Col>
                
                <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg").default}
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
                                            <>Bharathi acadamic scores</>
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