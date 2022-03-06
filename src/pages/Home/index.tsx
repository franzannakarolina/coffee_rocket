import React from 'react'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import Container from '../../components/Container'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#000',
      width: '100%',
      height: '858px',
      margin: 0,
      padding: 0
    },
    title: {
      fontFamily: 'Manrope',
      fontWeight: 700,
      fontSize: '80px',
      lineHeight: '100px',
      color: '#fff',
      letterSpacing: '-0.03em',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    body: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '100px 0 0 0'
    },
    imageBody: {
      width: '548px',
      height: '109px'
    },
    imageGreat: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '40px 0 0 0'
    },
    imageRocketCoffee: {
      width: '40%',
      height: 'auto',
      margin: '-1.0rem 0 0 0'
    }
  })
)

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <Container />
        <div className={classes.body}>
          <span className={classes.title}>Great Coffee Copy</span>
        </div>
        <div className={classes.imageGreat}>
          <img
            className={classes.imageBody}
            src={require('../../assets/_.png')}
            alt="title center"
          />
        </div>
        <div className={classes.imageGreat}>
          <img
            className={classes.imageRocketCoffee}
            src={require('../../assets/rocket-coffee.png')}
            alt="Rocket Coffee"
          />
        </div>
      </div>
    </div>
  )
}
