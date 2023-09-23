import React from 'react'

export default function Footer() {
  return (

    <footer className="bg-white dark:bg-gray-900">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className='grid grid-cols-6'>
                <div className='col-span-3 col-start-1'>
                    <div className='w-1/2'>
                        <a href="https://flowbite.com/" className="flex items-center mb-10 justify-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                MyApp
                            </span>
                        </a>
                        <p className='text-center text-xs leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eius aut distinctio perferendis consequuntur! Repellat iusto dicta exercitationem eveniet voluptas!</p>
                        <div className='flex space-x-3 justify-center mt-10 text-blue-500'>
                            <svg  className='h-6 w-6 text-blue-500' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xmlSpace="preserve">
                                <g id="XMLID_834_">
                                    <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                                        c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                                        V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                                        C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                                        c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
                                </g>
                            </svg>
                            <svg className='h-6 w-6 text-blue-500' viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>twitter [#154]</title>
                                <desc>Created with Sketch.</desc>
                                <defs> </defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#000000">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg className='h-6 w-6 text-blue-500' viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>youtube [#168]</title>
                                <desc>Created with Sketch.</desc>
                                <defs> </defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#000000">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]">

                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"> Layanan </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col space-y-4">
                        <li> <a href="#" className="hover:underline text-xs uppercase"> Bantuan</a> </li>
                        <li> <a href="#" className="hover:underline text-xs uppercase"> Tanggung Jawab </a> </li>
                        <li> <a href="#" className="hover:underline text-xs uppercase"> Hubungi Kami </a> </li>
                        <li> <a href="#" className="hover:underline text-xs uppercase"> Cara Berjualan </a> </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"> Tentang Kami </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col space-y-4">
                        <li> <a href="#" className="hover:underline text-xs uppercase"> About Us</a> </li>
                        <li> <a href="#" className="hover:underline text-xs uppercase"> Karir </a> </li>
                        <li> <a href="#" className="hover:underline text-xs uppercase"> Blog </a> </li>
                        <li> <a href="#" className="hover:underline text-xs uppercase"> Kebijakan Privasi </a> </li>
                        <li> <a href="#" className="hover:underline text-xs uppercase"> Syarat dan Ketentuan </a> </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"> Mitra </h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col space-y-4">
                        <li> <a href="#" className="hover:underline text-xs uppercase"> Supplier</a> </li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>


    // <footer className="bg-white dark:bg-gray-900">
    //     <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    //         <div className="md:flex md:justify-between">
    //             <div className="mb-6 md:mb-0">
    //                 <a href="https://flowbite.com/" className="flex items-center">
    //                     <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
    //                     <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
    //                         MyApp
    //                     </span>
    //                 </a>
    //                 <p className='w-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil sit numquam iure voluptate tempora temporibus facilis atque, aperiam nobis nisi ipsum quisquam architecto quas saepe culpa impedit incidunt neque earum, nemo eum, iusto ad soluta perspiciatis. Ipsa, ex alias!</p>
    //             </div>
    //             <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    //                 <div>
    //                 <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
    //                     Resources
    //                 </h2>
    //                 <ul className="text-gray-500 dark:text-gray-400 font-medium">
    //                     <li className="mb-4">
    //                     <a href="https://flowbite.com/" className="hover:underline">
    //                         Flowbite
    //                     </a>
    //                     </li>
    //                     <li>
    //                     <a href="https://tailwindcss.com/" className="hover:underline">
    //                         Tailwind CSS
    //                     </a>
    //                     </li>
    //                 </ul>
    //                 </div>
    //                 <div>
    //                 <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
    //                     Follow us
    //                 </h2>
    //                 <ul className="text-gray-500 dark:text-gray-400 font-medium">
    //                     <li className="mb-4">
    //                     <a
    //                         href="https://github.com/themesberg/flowbite"
    //                         className="hover:underline "
    //                     >
    //                         Github
    //                     </a>
    //                     </li>
    //                     <li>
    //                     <a
    //                         href="https://discord.gg/4eeurUVvTy"
    //                         className="hover:underline"
    //                     >
    //                         Discord
    //                     </a>
    //                     </li>
    //                 </ul>
    //                 </div>
    //                 <div>
    //                 <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
    //                     Legal
    //                 </h2>
    //                 <ul className="text-gray-500 dark:text-gray-400 font-medium">
    //                     <li className="mb-4">
    //                     <a href="#" className="hover:underline">
    //                         Privacy Policy
    //                     </a>
    //                     </li>
    //                     <li>
    //                     <a href="#" className="hover:underline">
    //                         Terms &amp; Conditions
    //                     </a>
    //                     </li>
    //                 </ul>
    //                 </div>
    //             </div>
    //         </div>
    //         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //         <div className="sm:flex sm:items-center sm:justify-between">
    //             <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
    //                 © 2023{" "}
    //                 <a href="https://flowbite.com/" className="hover:underline">
    //                 Flowbite™
    //                 </a>
    //                 . All Rights Reserved.
    //             </span>
    //             <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
    //                 <a
    //                 href="#"
    //                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    //                 >
    //                 <svg
    //                     className="w-4 h-4"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 8 19"
    //                 >
    //                     <path
    //                     fillRule="evenodd"
    //                     d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
    //                     clipRule="evenodd"
    //                     />
    //                 </svg>
    //                 <span className="sr-only">Facebook page</span>
    //                 </a>
    //                 <a
    //                 href="#"
    //                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    //                 >
    //                 <svg
    //                     className="w-4 h-4"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 21 16"
    //                 >
    //                     <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
    //                 </svg>
    //                 <span className="sr-only">Discord community</span>
    //                 </a>
    //                 <a
    //                 href="#"
    //                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    //                 >
    //                 <svg
    //                     className="w-4 h-4"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 20 17"
    //                 >
    //                     <path
    //                     fillRule="evenodd"
    //                     d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
    //                     clipRule="evenodd"
    //                     />
    //                 </svg>
    //                 <span className="sr-only">Twitter page</span>
    //                 </a>
    //                 <a
    //                 href="#"
    //                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    //                 >
    //                 <svg
    //                     className="w-4 h-4"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 20 20"
    //                 >
    //                     <path
    //                     fillRule="evenodd"
    //                     d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
    //                     clipRule="evenodd"
    //                     />
    //                 </svg>
    //                 <span className="sr-only">GitHub account</span>
    //                 </a>
    //                 <a
    //                 href="#"
    //                 className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    //                 >
    //                 <svg
    //                     className="w-4 h-4"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 20 20"
    //                 >
    //                     <path
    //                     fillRule="evenodd"
    //                     d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
    //                     clipRule="evenodd"
    //                     />
    //                 </svg>
    //                 <span className="sr-only">Dribbble account</span>
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </footer>

  )
}
