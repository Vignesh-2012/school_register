import React from "react";
import { Line } from "react-chartjs-2";
import { Row, Col, Card, CardHeader, CardTitle, CardBody, } from "reactstrap";
import Select from "react-select"

export default class AravindrajDetails extends React.Component {
  constructor() {
    super();
    this.state =  {
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
        titleFontColor: "#00ff00",
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
              color: "rgba(0,100,0,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 30,
              suggestedMax: 100,
              padding: 20,
              fontColor: "#006400",
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(0,100,0,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#006400",
            },
          },
        ],
      },
    };
    let chartExample2 = {
      data: (canvas) => {
        let ctx = canvas.getContext("2d");

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(124,252,0,0.2)");
        gradientStroke.addColorStop(0.1, "rgba(124,252,0,0.6)");
        gradientStroke.addColorStop(0, "rgba(124,252,0,1.9)"); //green colors


        return {
          labels: ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR"],
          datasets: [
            {
              label: "Data",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: "#00ff00",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: "#00ff00",
              pointBorderColor: "rgba(255,0,0,0)",
              pointHoverBackgroundColor: "#0000ff",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [this.randomIntFromInterval(40,100),this.randomIntFromInterval(40,100),this.randomIntFromInterval(40,100),this.randomIntFromInterval(40,100),this.randomIntFromInterval(40,100),this.randomIntFromInterval(40,100),this.randomIntFromInterval(40,100),this.randomIntFromInterval(40,100),this.randomIntFromInterval(40,100),this.randomIntFromInterval(40,100),this.randomIntFromInterval(40,100)],
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
                <td style={{ color: "black" }}>{"ARAVINDRAJ S"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Gender:"}</td>
                <td style={{ color: "black" }}>{"Male"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Father Name:"}</td>
                <td style={{ color: "black" }}>{"SEKAR"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Mother Name:"}</td>
                <td style={{ color: "black" }}>{"VIDHYA"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Date of Birth:"}</td>
                <td style={{ color: "black" }}>{"16.06.1997"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Religion:"}</td>
                <td style={{ color: "black" }}>{"Hindu"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Father Occupation:"}</td>
                <td style={{ color: "black" }}>{"DRIVER"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"EmailId:"}</td>
                <td style={{ color: "black" }}>{"aravindrajs@gmail.com"}</td>
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
                <td style={{ color: "black" }}>{"410815105002"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Address:"}</td>
                <td style={{ color: "black" }}>{"No:23, t.v.k. street, Chidambaram-608001"}</td>
              </tr>
              <br />
              <tr>
                <td style={{ width: "220px" }}>{"Phone:"}</td>
                <td style={{ color: "black" }}>{"+917010676234"}</td>
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
                        <strong style={{ color: '#00ff00' }}>Aravindraj acadamic scores</strong>
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