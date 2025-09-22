import React from 'react'
import styles from './playerCard.module.css'
import { dynamicStyles } from './PlayerCard.styles'

const PlayerCard = ({i,user,color}) => {
  const dynamicStyle = dynamicStyles(color)
  return (
      <div className={styles.card} style={dynamicStyle.playerColor}>Player {i}: {user}</div>
  )
}

export default PlayerCard
