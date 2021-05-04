import React, { Component } from 'react';
import logo from './logo.svg';
import IotReciever from './components/iot-reciever-aws'
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap'
import {isMobile} from "react-device-detect"
import "./App.css"
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"
import img5 from "./images/5.jpg"
import img6 from "./images/6.jpg"
import img7 from "./images/7.jpg"

function calcFrec(num, vector) {
  var num_veces = 0
  for (var pos in vector) {
    if (vector[pos] === num) {
      num_veces++
    }
  }
  return num_veces
}

function obtainMaxPos(vector_values) {
  var posMax = 0
  var numMax = vector_values[0]
  for (var pos in vector_values) {
    if (vector_values[pos] > numMax) {
      numMax = vector_values[pos]
      posMax = pos
    }
  }
  return posMax
}

function statisticalMode(vector_values) {
  var frec = new Array(vector_values.length)
  for (var pos in vector_values) {
    var num = vector_values[pos]
    frec[pos] = calcFrec(num, vector_values)
  }
  var posMode = obtainMaxPos(frec)
  return vector_values[posMode]

}

const res = ["Beryllium hummingbird", "Mexican carpenter", "Mexican finke", "Nothing", "Red-eyed tordo", "Tailor", "Zanate Mayor"]
const img_array = [img1, img2, img3, img4, img5, img6, img7]
const info = ["Medium-sized hummingbird. It lives from southern Arizona in the United States, to Honduras. In Mexico he is a resident. Lays 1 to 2 white eggs. The male is much more colorful than the female. He eats nectar and some insects.",
  "Medium-sized resident carpenter, native to Central America and North America. It lives in hollows dug into logs or even cacti. It eats insects and their larvae, as well as some fruits. It lays two to seven eggs in the nest.",
  "Medium find mainly resident in urban and suburban areas of southern Canada, United States to the north center of Oaxaca and Chiapas. Eat berries, seeds, grains and small insects.",
  "Nothing Detected Yet",
  "Medium to small bird. It lives from the southern United States to Panama. He is a resident and summer migrant. Eat seeds and insects and snails. It is parasitic of other birds, leaving its eggs in nests of other species.",
  "Very small bird, relatively long tail. It lives from southwestErn Alaska to Guatemala along mexico's Sierras Madre. It eats small insects and aacnids, it is seen in mixed groups with chips.",
  "Large bird that lives from the southern United States to the coastal area of southern Ecuador. Eat fruits, seeds and invertebrates. In urban areas he eats everything. It's very smart and common, sometimes it forms brown."]
let in_array = []
let flag = true

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 3,
      birds: [3]
    }
    this.callBackIoT = this.callBackIoT.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  callBackIoT = (IoTData) => {
    const temp = JSON.parse(IoTData[1])
    in_array.push(parseInt(temp.Classification))
    console.log(in_array)
    if (in_array.length > 6) {
      let temps = this.state.birds

      if (flag && temps.find(element => element === (statisticalMode(in_array) - 1)) === undefined && (statisticalMode(in_array) - 1) !== 3) {
        flag = false
        temps.pop()
        temps.push(statisticalMode(in_array) - 1)
        this.setState({
          birds: temps
        })
      }
      else if (temps.find(element => element === (statisticalMode(in_array) - 1)) === undefined && (statisticalMode(in_array) - 1) !== 3) {
        temps.push(statisticalMode(in_array) - 1)
        this.setState({
          birds: temps
        })
      }
      in_array = []
    }

  }

  render() {
    let display = this.state.birds.map((number) =>
      <Col style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
        <Card>
          <CardHeader>
            <img src={img_array[number]} alt="bird" />
          </CardHeader>
          <CardBody style={{ color: "black" }}>
            {res[number]}
          </CardBody>
          <CardFooter>
            {info[number]}
          </CardFooter>
        </Card>
      </Col>
    )
    let size = "20%";
    let rows = "2";
    if (isMobile) {
      size = "70%";
      rows = "1";
      display = this.state.birds.map((number) =>
        <Col style={{ marginTop: "0.5rem", marginLeft: "1rem", marginRight: "1rem", marginBottom: "0.5rem" }}>
          <Card>
            <CardHeader>
              <img src={img_array[number]} alt="bird" />
            </CardHeader>
            <CardBody style={{ color: "black" }}>
              {res[number]}
            </CardBody>
            <CardFooter>
              {info[number]}
            </CardFooter>
          </Card>
        </Col>
      )
    }
    return (
      <div className="App">
        <div style={{ padding: "10px" }}>
          <IotReciever sub_topics={["birds-detected"]} callback={this.callBackIoT} />
          <img src={logo} width={size} alt="logo" />
          <Row md={rows}>
            {display}
          </Row>
        </div>
      </div>
    );
  }
}

export default App;