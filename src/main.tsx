import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/index.tsx' // 메인페이지 
import { BrowserRouter, Routes, Route } from "react-router";
// import About from '@/pages/about';
import SignIn from '@/pages/sign-in'; // 로그인 페이지
import SignUp from '@/pages/sign-up'; // 회원가입 페이지
import RootLayout from './layout.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout/>} >
            {/* <Route path='/' element={<App />}  /> */}
            <Route index element={<App />} />
            {/* <Route path='about' element={<About />} /> */}
            <Route path='sign-up' element={<SignUp />} />
            <Route path='sign-in' element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </ThemeProvider>
  </StrictMode>
)
