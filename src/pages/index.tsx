import { ThemeProvider } from '@/components/theme-provider'
import { AppSideBar } from '../components/common'

function App() {
  return (
    <>
            <main className='w-full h-full min-h-[720px] flex p-6 gap-6'>
              { /* 카테고리 사이드바 */}
                <AppSideBar/>
              { /* 토픽 컨텐츠  */}
                <section></section>
            </main>

    </>
  )
}

export default App
