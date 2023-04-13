import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab
  ? { backgroundColor: snap.color, opacity: 0.5 }
  ? { backgroundColor: "transparent", opacity: 1 } 
  return (
    <div>Tab</div>
  )
}

export default Tab