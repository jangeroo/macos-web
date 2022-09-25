import styled from '@emotion/styled'
import styles from '../../styles/Home.module.css'

export default function Dock() {
  return <DockWrapper className={styles.dock} />
}

const DockWrapper = styled.div`
  position: fixed;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
  width: 500px;
  height: 50px;
  outline: 1px solid black;
  border: 2px solid darkgray;
  background-color: black;
  opacity: 0.5;
  border-radius: 10px;
`
