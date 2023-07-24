import React from 'react'
import ColorContext from '../contexts/color'
import { ColorConsumer } from '../contexts/color'
function ColorBox() {
  return (
    <ColorConsumer>
        {value => (
          <div>
            <div
                style={{
                    width:'64px',
                    height:'64px',
                    background: value.state.color
                }}
                />
                <div style={
                  {
                    width:'32px',
                    height:'32px',
                    background:value.state.subcolor
                  }
                }>

                </div>
          </div>
            
        )
        }
    </ColorConsumer>
  )
}

export default ColorBox