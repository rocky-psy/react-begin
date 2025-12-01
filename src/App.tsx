import { AppFooter, AppHeader } from '@/components/common'
import { ThemeProvider } from '@/components/theme-provider'

function App() {
  
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className='page'>
          <AppHeader />
            <div className='container'>
              <main className='w-full h-full min-h-[720px] flex p-6 gap-6'>
                { /* 카테고리 사이드바 */}
                <aside className='min-w-60 w-60 flex flex-col gap-6'>
                  <div className='flex items-center gap-2'>
                    { /* shadcn ui 의 Typpgraphy h4 컴포넌트 그대로 사용  */}
                      <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'></h4>

                  </div>
                </aside>
              </main>
            </div>
          <AppFooter />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
