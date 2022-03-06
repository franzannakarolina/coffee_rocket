import React from 'react'

import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: 'none',
      margin: theme.spacing(5),
      color: '#fff'
    },
    container: {
      fontFamily: 'Manrope',
      fontWeight: 400,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0',
      padding: '0'
    },
    button: {
      width: '172px',
      height: '42px',
      border: '2px solid #8257E5',
      boxSizing: 'border-box',
      flex: 1,
      color: '#fff'
    },
    margin: {
      marginLeft: '8rem'
    },
    image: {
      width: '43px',
      height: '53px',
      marginRight: '3rem'
    }
  })
)

export default function Container() {
  const classes = useStyles()

  return (
    <Box>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src={require('../../assets/Logo.png')} alt="logo" />
        </div>
        <Link to="/" className={classes.link}>
          Home
        </Link>
        <Link to="/" className={classes.link}>
          Menu
        </Link>
        <Link to="/" className={classes.link}>
          Recompensas
        </Link>
        <Link to="/" className={classes.link}>
          Gift Cards
        </Link>
        <Link to="/" className={classes.link}>
          Lojas
        </Link>

        <div className={classes.margin}>
          <Button className={classes.button}>Pegar meu café</Button>
        </div>
      </div>
    </Box>
  )
}
