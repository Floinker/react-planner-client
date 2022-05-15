import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import Account from './Account'
import Dashboard from './Dashboard'
import Nav from './Nav'
import { QueryClientProvider, QueryClient } from "react-query"
import { useHistory } from "react-router-dom";

import StyledSignedInApp from './styled/SignedInApp.styled'
import Board from './Board'

const queryClient = new QueryClient();

const SignedInApp = () => {


  return (
    <QueryClientProvider client={queryClient}>
      <StyledSignedInApp>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/board" element={<Board />} />
        </Routes>

      </StyledSignedInApp>
      <ReactQueryDevtools position='bottom-right' initialIsOpen='false' />
    </QueryClientProvider>
  )
}

export default SignedInApp