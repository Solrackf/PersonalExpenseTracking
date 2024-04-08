import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'

function Dashboard() {
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>Dash</h1>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`

`

export default Dashboard