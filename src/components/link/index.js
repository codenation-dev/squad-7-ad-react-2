import React from 'react';
import Link from './style.js' 
import { FontAwesomeIcon as _FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const FontAwesomeIcon = styled(_FontAwesomeIcon)`
  margin-right: 5px;
`

const SimpleLink = ({
  children,
  type,
  to
}) => {
  
  const renderIcon = () => {
    if (type) {
      return type === 'link' ? faLink : faAt;
    }
  } 

  const renderLink = () => {
    if (type) {
      return type === 'email' ? `mailto:${to}` : to;
    }
  }
  
  return (
    <Link href={renderLink()} target="_blank">
      { type && <FontAwesomeIcon icon={renderIcon()}/> }
      {children}
    </Link>
  )
}

export default SimpleLink;
