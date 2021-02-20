import React from "react";
import { CardBody, CardHeader, CardTitle, Card, Row, Col, Table } from "reactstrap";

import { Bar} from "react-chartjs-2";




export default class Vignesh extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }


    render() {

        let chart1_2_options = {
            maintainAspectRatio: false,
            legend: {
                display: true,
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
                            suggestedMin: 60,
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

                let gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);

                gradientStroke2.addColorStop(1, "rgba(223, 1, 1, 0.2)");
                gradientStroke2.addColorStop(0.4, "rgba(223, 1, 1, 0.0)");
                gradientStroke2.addColorStop(0, "rgba(223, 1, 1, 0)"); //RED colors

                return {
                    labels: ["ABIRAM", "VIGNESH", "KATHICK"],
                    datasets: [
                        {
                            label: "PHYSICS",
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
                            data: [80, 100, 30],
                        },
                        {
                            label: "CHEMISTRY",
                            fill: true,
                            backgroundColor: gradientStroke2,
                            borderColor: "#DF0101",
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            pointBackgroundColor: "#DF0101",
                            pointBorderColor: "rgba(255,255,255,0)",
                            pointHoverBackgroundColor: "#DF0101",
                            pointBorderWidth: 20,
                            pointHoverRadius: 4,
                            pointHoverBorderWidth: 15,
                            pointRadius: 4,
                            data: [90, 80, 99],
                        }
                    ],
                };
            },
            options: chart1_2_options,
        };

        return (
            <>
                <div className='content'>
                    <Row>
                        <Col md='9'>
                            <Card>
                                <CardHeader>
                                    <Row>

                                        <Col>
                                            <CardTitle>
                                                <>Total Shipments</>
                                            </CardTitle>
                                        </Col>

                                    </Row>
                                    <Row>

                                        <Col className='text-info'>
                                            <i class="fas fa-bell"></i> &nbsp;
                                            736,896
                                        </Col>
                                    </Row>


                                </CardHeader>
                                <CardBody>

                                    <Bar
                                        data={chartExample2.data}
                                        options={chartExample2.options}
                                    />

                                </CardBody>
                            </Card>
                        </Col>
                        <Col md='3'>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        <>Card 2</>
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <br />
                    <hr />
                    <br />

                    <Row>
                        <Col>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>ROLL NUMBER</th>
                                        <th>NAME</th>
                                        <th>MARKS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{"401815105001"}</td>
                                        <td>{"ABIRAM"}</td>
                                        <td>{"56"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"401815105002"}</td>
                                        <td>{"VIGNESH"}</td>
                                        <td>{"56"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"401815105003"}</td>
                                        <td>{"KARTHICK"}</td>
                                        <td>{"56"}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </div>
            </>
        )
    }
} 