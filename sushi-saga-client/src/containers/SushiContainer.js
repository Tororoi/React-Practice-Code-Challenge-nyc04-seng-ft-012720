import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let getEach = props.sushiList.map(sushi => {
    return <Sushi key={sushi.id} details={sushi} wallet={props.wallet} stackPlates={props.stackPlates} />
  })

  return (
    <Fragment>
      <div className="belt">
        {getEach}
        <MoreButton getMore={props.getMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer