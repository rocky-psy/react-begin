import { ThemeProvider } from '@/components/theme-provider'
import { AppSideBar } from '../components/common'
import { SkeletonHotTopic } from '@/components/skeleton'
import { Skeleton } from '@/components/ui'

function App() {
  return (
    <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
              <div className="hidden lg:block lg:min-w-60 lg:w-60 lg:h-full">
              { /* 카테고리 사이드바 */}
                <AppSideBar/>
              </div>
          
                { /* 토픽 컨텐츠  skeloton UI */}
                <section className="w-full lg:w-[calc(100%-264px)] flex flex-col gap-12">
                
                  {/* 핫토픽 */}
                  <div className='w-full flex flex-col gap-12'>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-2'>
                        <img src="/assets/gifs/gif-001.gif" alt="@IMG" className='w-7 h-7'/>
                        <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>HOT 토픽</h4>
                      </div>
                      <p className=' md:text-base text-muted-foreground'>지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를 얻어보세요.</p>
                    </div>
                    <div className='grid grid-cols-4 gap-6'>
                      <SkeletonHotTopic />
                      <SkeletonHotTopic />
                      <SkeletonHotTopic />
                      <SkeletonHotTopic />
                    </div>
                  </div>  
                
                  {/* New 토픽 */}
        
                  <div className='w-full flex flex-col gap-6'>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-2'>
                        <img src="/assets/gifs/gif-002.gif" alt="@IMG" className='w-7 h-7' />
                        <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>NEW 토픽</h4>
                      </div>
                      <p className=' md:text-base text-muted-foreground'>새로운 시선으로, 새로운 이야기를 시작하세요.</p>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                      <Skeleton className=' w-full h-[210px]'></Skeleton>
                      <Skeleton className=' w-full h-[210px]'></Skeleton>
                      <Skeleton className=' w-full h-[210px]'></Skeleton>
                      <Skeleton className=' w-full h-[210px]'></Skeleton>
                    </div>
                  </div>  
 
                </section>
            </main>

  
  )
}

export default App
