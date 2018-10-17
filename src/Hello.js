import React, {Component} from 'react'
import {SketchPicker} from 'react-color'
import reactCSS from 'reactcss'
class Hello extends Component {
    constructor (pros) {
        super (pros)
        this.state = {
            color: {
                r: '241',
                g: '112',
                b: '19',
                a: '1',
            }
        }
    }

    handleChange = (color) => {
        this.setState({color: color.rgb})
    }
    render() {
        console.log("this is the color now", this.state.color)
        const styles = reactCSS({
            "default": {
                color : {
                    color: `rgba(${this.state.color.r}, ${this.state.color.g},${this.state.color.b},${this.state.color.a})`
                }
            }
        })
        return(
            <div>
                <h1 style={styles.color}>Hello World</h1>
                <SketchPicker color= {this.state.color} onChangeComplete={this.handleChange}/>
            </div>
        )
    }
}

export default Hello;
