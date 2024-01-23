import { Link } from "react-router-dom"


const Projects = () => {
  return (
    <div className="container_s mb-[100px]" id="projects">
      <div className="text-center mb-8">
        <h4 className="text-gray-400">Browse My Recent</h4>
        <h1 className="text-[32px] font-[600]">Projects</h1>
      </div>
      <div className="flex justify-between space-x-4 sm:space-x-0 sm:block">
        <div className="bg-gray-100  border-2 border-gray-300 rounded-[15px] py-14 px-10 sm:py-7 sm:px-4 sm:w-[100%] sm:mb-6">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/64a8642adfd3dd00085c8eaf/screenshot_2023-07-07-19-18-00-0000.png"
            width="960"
            height="600"
            alt=""
            className="rounded-[15px] mb-4 tw-m-0 tw-p-0 tw-block tw-w-full tw-align-middle tw-max-w-full tw-h-auto tw-max-h-full tw-object-cover tw-aspect-screenshot"
            loading="lazy" />
          <h1 className="text-[30px] font-[600] text-center mb-4">Project One</h1>
          <div className="space-x-4 flex justify-center">
            <Link
              className="link__button  rounded-[20px] border-2 py-2 px-6"
              to={'https://github.com/Akhrorbek2023/exam_res_api.git'}
              target="_blank">
              GitHub
            </Link>
            <Link
              className="link__button  rounded-[20px]  border-2 py-2 px-6"
              to={'https://examrestapi.netlify.app'}
              target="_blank">
              Netlify
            </Link>
          </div>
        </div>
        <div className="bg-gray-100  border-2 border-gray-300 rounded-[15px] py-14 px-10 sm:py-7 sm:px-4 sm:w-[100%] sm:mb-6">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/64d00c3a03c12f7d9921d487/screenshot_2023-08-06-21-10-41-0000.png"
            width="960"
            height="600"
            alt=""
            className="rounded-[15px] mb-4 tw-m-0 tw-p-0 tw-block tw-w-full tw-align-middle tw-max-w-full tw-h-auto tw-max-h-full tw-object-cover tw-aspect-screenshot"
            loading="lazy" />
          <h1 className="text-[30px] font-[600] text-center mb-4">Project Two</h1>
          <div className="space-x-4 flex justify-center">
            <Link
              className="link__button rounded-[20px] border-2 py-2 px-6"
              to={'https://github.com/Akhrorbek2023/movie-app.git'}
              target="_blank">
              GitHub
            </Link>
            <Link
              className="link__button rounded-[20px] border-2 py-2 px-6"
              to={'https://deadpool-movie-app.netlify.app'}
              target="_blank">
              Netlify
            </Link>
          </div>
        </div>
        <div className="bg-gray-100  border-2 border-gray-300 rounded-[15px] py-14 px-10 sm:py-7 sm:px-4 sm:w-[100%] sm:mb-6">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/6589ca3c2eb20800087efd59/screenshot_2023-12-25-18-30-49-0000.png"
            width="960"
            height="600"
            alt=""
            className="rounded-[15px] mb-4 tw-m-0 tw-p-0 tw-block tw-w-full tw-align-middle tw-max-w-full tw-h-auto tw-max-h-full tw-object-cover tw-aspect-screenshot"
            loading="lazy" />
          <h1 className="text-[30px] font-[600] text-center mb-4">Project Two</h1>
          <div className="space-x-4 flex justify-center">
            <Link
              className="link__button rounded-[20px] border-2 py-2 px-6"
              to={'https://github.com/Akhrorbek2023/shopping.git'}
              target="_blank">
              GitHub
            </Link>
            <Link
              className="link__button rounded-[20px] border-2 py-2 px-6"
              to={'https://fakeonline-shop.netlify.app'}
              target="_blank">
              Netlify
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects