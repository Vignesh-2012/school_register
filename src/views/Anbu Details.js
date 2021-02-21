import React from "react";
import { Line } from "react-chartjs-2";
import { Row, Col, Card, CardHeader, CardTitle, CardBody, } from "reactstrap";
import Select from "react-select"





export default class AnbuDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      selected_subject: {
        value: '1',
        label: 'PHYSICS'
      },
      subject_options: [
        {
          value: '1',
          label: 'PHYSICS'
        }, {
          value: '2',
          label: 'CHEMISTRY'
        }, {
          value: '3',
          label: 'MATHS'
        }
      ]

    }

    
  }

  randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {
    let chart1_2_options = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#ff0000",
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
              color: "rgba(255,0,0,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 30,
              suggestedMax: 100,
              padding: 20,
              fontColor: "#ff0000",
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
              fontColor: "#ff0000",
            },
          },
        ],
      },
    };
    let chartExample2 = {
      data: (canvas) => {
        let ctx = canvas.getContext("2d");

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(255,165,0,0.2)");
        gradientStroke.addColorStop(0.1, "rgba(255,165,0,0.1)");
        gradientStroke.addColorStop(0, "rgba(255,165,0,1.9)"); //blue colors


        return {
          labels: ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR"],
          datasets: [
            {
              label: "Data",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: "#ff0000",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: "#ff0000",
              pointBorderColor: "rgba(255,0,0,0)",
              pointHoverBackgroundColor: "#00ff00",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [this.randomIntFromInterval(35,90),this.randomIntFromInterval(45,90),this.randomIntFromInterval(75,90),this.randomIntFromInterval(65,80),this.randomIntFromInterval(50,95),this.randomIntFromInterval(50,95),this.randomIntFromInterval(65,95),this.randomIntFromInterval(65,90),this.randomIntFromInterval(45,80),this.randomIntFromInterval(50,95),this.randomIntFromInterval(50,95)],
            },
          ],
        };
      },
      options: chart1_2_options,
    };
    return (
      <>
        <div className='content'>
          <Row>
            <Col>
              <tr>
                <td style={{ width: "220px" }}>{"Name:"}</td>
                <td style={{ color: "black" }}>{"ANBU S"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Gender:"}</td>
                <td style={{ color: "black" }}>{"Male"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Father Name:"}</td>
                <td style={{ color: "black" }}>{"SELVAKUMAR"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Mother Name:"}</td>
                <td style={{ color: "black" }}>{"SUBHASHINI"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Date of Birth:"}</td>
                <td style={{ color: "black" }}>{"16.11.1997"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Religion:"}</td>
                <td style={{ color: "black" }}>{"Hindu"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Father Occupation:"}</td>
                <td style={{ color: "black" }}>{"Buisness"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"EmailId:"}</td>
                <td style={{ color: "black" }}>{"anbus@gmail.com"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Admission Date:"}</td>
                <td style={{ color: "black" }}>{"05.01.2019"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Class:"}</td>
                <td style={{ color: "black" }}>{"10"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Section:"}</td>
                <td style={{ color: "black" }}>{"B"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Roll No:"}</td>
                <td style={{ color: "black" }}>{"410815105001"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Address:"}</td>
                <td style={{ color: "black" }}>{"No:13, Sivajothi Nagar, Chidambaram-608001"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Phone:"}</td>
                <td style={{ color: "black" }}>{"+918774292547"}</td>
              </tr>
            </Col>
            <Col className='text-center'>

              <img
                alt="..."
                className="avatar"
                style={{ width: '50%', height: '50%' }}
                src={require("assets/img/anime3.png").default}
              />
            </Col>
          </Row>
          <br />
          <hr />
          <br />
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <Row>
                    <Col md='9'>

                      <CardTitle>
                        <strong style={{color:'#ff0000'}}>Anbu acadamic scores</strong>
                      </CardTitle>
                      </Col>
                      <Col >
                      <Select
                        className="react-select info"
                        classNamePrefix="react-select"
                        name="subject_select"
                        value={this.state.selected_subject}
                        onChange={event => {
                          this.setState({
                            selected_subject: event,
                          })
                        }}
                        options={this.state.subject_options}
                      >

                      </Select>
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