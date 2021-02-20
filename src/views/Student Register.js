import React from "react";
import { Row, Col, Table } from "reactstrap";





export default class StudentRegister extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <>
            <div className= 'content'>
            <Row>
                <Col>
                     <Table>
                         <thead>
                             <tr>
                             <th>ROLL NUMBER</th>
                             <th>NAME</th>
                             <th>CGPA</th>
                             </tr>
                             </thead>
                             <tbody>
                                    <tr>
                                        <td>{"410815105001"}</td>
                                        <td>{"ANBU S"}</td>
                                        <td>{"58 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105002"}</td>
                                        <td>{"ARAVINDRAJ S"}</td>
                                        <td>{"87 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105003"}</td>
                                        <td>{"BHARATHI P"}</td>
                                        <td>{"94 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105004"}</td>
                                        <td>{"HARI P"}</td>
                                        <td>{"79 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105005"}</td>
                                        <td>{"HARIHARAN B"}</td>
                                        <td>{"35 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105006"}</td>
                                        <td>{"JEEVA S"}</td>
                                        <td>{"58 %"}</td>
                                    </tr>
                                   <tr>
                                        <td>{"410815105007"}</td>
                                        <td>{"KABILESH K"}</td>
                                        <td>{"43 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105008"}</td>
                                        <td>{"KALAIMANI P"}</td>
                                        <td>{"73 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"401815105009"}</td>
                                        <td>{"KANDASAMY R"}</td>
                                        <td>{"83 %"}</td>
                                    </tr>
                                   <tr>
                                        <td>{"410815105010"}</td>
                                        <td>{"NIRANJAN E"}</td>
                                        <td>{"49 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105011"}</td>
                                        <td>{"PARTHASARATHY G"}</td>
                                        <td>{"78 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105012"}</td>
                                        <td>{"PRABAKARAN R"}</td>
                                        <td>{"74 %"}</td>
                                    </tr>
                                   <tr>
                                        <td>{"410815105013"}</td>
                                        <td>{"PRAVEEN J"}</td>
                                        <td>{"55 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105014"}</td>
                                        <td>{"PREM K"}</td>
                                        <td>{"69 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105015"}</td>
                                        <td>{"RAJESH S"}</td>
                                        <td>{"48 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105016"}</td>
                                        <td>{"SIVAKUMAR M"}</td>
                                        <td>{"91 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105017"}</td>
                                        <td>{"SRIRAM R"}</td>
                                        <td>{"83 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105018"}</td>
                                        <td>{"SRI VISHNU V"}</td>
                                        <td>{"80 %"}</td>
                                    </tr>
                                   <tr>
                                        <td>{"410815105019"}</td>
                                        <td>{"SULAIMAN R"}</td>
                                        <td>{"71 %"}</td>
                                    </tr>
                                    <tr>
                                        <td>{"410815105020"}</td>
                                        <td>{"VAFI M"}</td>
                                        <td>{"98 %"}</td>
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
