import React from 'react'

const Ratings = () => {
    return (
        <div className='text-black bg-white h-auto w-[full] grid content-center justify-items-center pt-10 pb-10'>
            <div className='font-mono mb-10'><h1 className='text-4xl text-green-500 font-bold'>Feedbacks</h1></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center pb-10'>
                <div className='grid content-center justify-items-center'>
                    <div>
                    <div className="flex items-center mb-3 sm:w-[500px] w-[200px]">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill=""><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill=""><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill=""><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill=""><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill=""><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-sm font-medium  dark:text-white">4.95 out of 5</p>
                    </div>
                    <p className="text-sm font-medium ">1,745 global ratings</p>
                    <div className="flex items-center mt-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
                        <div className="mx-4 sm:w-[500px] w-[200px] h-5 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "70%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">70%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
                        <div className="mx-4 sm:w-[500px] w-[200px] h-5 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "17%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
                        <div className="mx-4 sm:w-[500px] w-[200px] h-5 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "8%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
                        <div className="mx-4 sm:w-[500px] w-[200px] h-5 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "2%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
                        <div className="mx-4 sm:w-[500px] w-[200px] h-5 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-yellow-400 rounded" style={{ width: "1%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
                    </div>
                    </div>
                    

                </div>
                <div>

                    <article className='grid justify-items-center content-center max-w-[300px] md:max-w-[600px] lg:max-w-[800px] mt-10 lg:mt-0'>
                        <div className="flex items-center mb-4 space-x-4 max-w-[400px] md:max-w-none">
                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""></img>
                            <div className="space-y-1 font-medium dark:text-white">
                                <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                            </div>
                        </div>
                        <div className="flex items-center mb-1">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill=""><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill=""><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill=""><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill=""><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill=""><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                        </div>
                        <footer className="mb-5 text-sm"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                        <p className="mb-2 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad unde soluta illum necessitatibus eaque iure repudiandae consectetur facilis earum sunt, ea alias nemo officiis suscipit eum aliquam tenetur doloremque fugit.</p>
                        <a href="/" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                        <aside>
                            <p className="mt-1 text-xs">19 people found this helpful</p>
                            <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                                <a href="/" className="border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                                <a href="/" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                            </div>
                        </aside>
                    </article>

                </div>
            </div>
        </div>

    )
}

export default Ratings